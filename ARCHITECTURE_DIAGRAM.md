# High-Level Production Architecture: Vacation-Rental Marketplace

This document outlines the production-scale system architecture for a global vacation-rental platform (similar to Airbnb). It details the scaling strategies across traffic routing, domain microservices, data persistence, event-driven async workflows, caching, and observability.

---

## 1. System Architecture Diagram

Below is the high-level production architecture diagram visualizing synchronous request paths, asynchronous event streams, caches, persistent databases, and edge media distribution.

```mermaid
flowchart TD
    subgraph Clients["Client & Edge Layer"]
        WebClient["Web Client (Next.js / React)"]
        MobileClient["Mobile Apps (iOS / Android)"]
        EdgeCDN["Global Anycast CDN (CloudFront / Fastly)<br>• Edge Caching<br>• Image Resize & Optimization"]
    end

    subgraph SecurityGateway["Security & API Routing Layer"]
        WAF_NLB["Network Load Balancer + WAF<br>• DDoS Protection & Rate Limiting"]
        APIGateway["API Gateway / Envoy Ingress<br>• Authentication Verification<br>• Request Routing & Circuit Breaking"]
    end

    subgraph CoreServices["Domain Services (Kubernetes / HPA)"]
        AuthService["Auth Service<br>• OIDC / OAuth2 & JWT Token Generation"]
        UserService["User & Host Service<br>• Profiles & Verification"]
        ListingService["Listing Service<br>• Property Metadata & Calendars"]
        SearchService["Search Service<br>• Geo-Spatial Search & ML Ranking"]
        BookingService["Booking & Reservation Service<br>• Saga Orchestration & Lock Manager"]
        PaymentService["Payment & Payout Service<br>• Escrow Ledger & PSP Integration"]
        NotificationService["Notification Service<br>• Push, Email & SMS Dispatch"]
    end

    subgraph AsyncBus["Event-Driven Message Bus"]
        KafkaBus["Apache Kafka Event Streaming<br>• Topics: BookingEvents, ListingUpdates, PaymentEvents"]
    end

    subgraph Persistence["Data & Storage Infrastructure"]
        PrimaryDB[(PostgreSQL Primary-Replica Cluster<br>• User, Booking & Payment Ledger)]
        RedisCache[(Redis Cluster / ElastiCache<br>• Listing Cache, Redlock & Sessions)]
        SearchIndex[(Elasticsearch / OpenSearch<br>• H3 Geo-Grids & Spatial Index)]
        ObjectStorage[(S3 Object Storage<br>• Property Photos & Identity Docs)]
    end

    subgraph Observability["Observability & Infrastructure Operations"]
        Monitoring["Prometheus & Grafana<br>• Metrics & Alerts"]
        Tracing["OpenTelemetry & Jaeger<br>• Distributed Tracing"]
    end

    %% Client and CDN Traffic
    WebClient --> EdgeCDN
    MobileClient --> EdgeCDN
    EdgeCDN --> WAF_NLB
    EdgeCDN -. Static Assets & Images .-> ObjectStorage

    %% Ingress and Gateway
    WAF_NLB --> APIGateway

    %% Synchronous API Requests (Solid Arrows)
    APIGateway --> AuthService
    APIGateway --> UserService
    APIGateway --> ListingService
    APIGateway --> SearchService
    APIGateway --> BookingService
    APIGateway --> PaymentService

    %% Service to Storage Connections (Synchronous)
    AuthService --> RedisCache
    UserService --> PrimaryDB
    ListingService --> PrimaryDB
    ListingService --> RedisCache
    ListingService -. Media Upload .-> ObjectStorage

    SearchService --> SearchIndex
    SearchService --> RedisCache

    BookingService --> PrimaryDB
    BookingService --> RedisCache

    PaymentService --> PrimaryDB

    %% Asynchronous Event Streams (Dashed Arrows)
    ListingService -. "ListingUpdatedEvent" .-> KafkaBus
    BookingService -. "BookingCreatedEvent" .-> KafkaBus
    PaymentService -. "PaymentCompletedEvent" .-> KafkaBus

    KafkaBus -. "Sync Search Index" .-> SearchIndex
    KafkaBus -. "Trigger Notifications" .-> NotificationService
    KafkaBus -. "Cache Invalidation" .-> RedisCache

    %% Observability Instrumentation
    CoreServices -. Metrics & Spans .-> Observability
```

---

## 2. Layer-by-Layer Architectural Breakdown

### 2.1 Client & Edge Layer
- **Global Anycast CDN**: Serves static HTML/JS bundles and listing media. Performs on-the-fly image transformations (WebP/AVIF encoding, viewport-based responsive resizing) to optimize mobile and desktop page load performance.
- **WAF & DDoS Mitigation**: Sits at the edge to inspect incoming HTTP requests, enforce rate limits per IP/User, and block bot traffic/scraping attempts.

### 2.2 API Gateway & Security
- **Envoy / API Gateway**: Serves as the single entry point for all frontend API calls. Handles TLS termination, CORS validation, JWT signature verification, and dynamic upstream service routing.
- **Circuit Breaking & Rate Limiting**: Implemented at gateway level using Redis to prevent downstream cascading failures during peak search or flash-booking traffic.

### 2.3 Domain Services (Microservices on Kubernetes)
- **Listing Service**: Manages property details, room rules, host configurations, and booking calendar availability. Writes to PostgreSQL and invalidates Redis caches.
- **Search Service**: Powering search inputs, date range filtering, spatial geo-bounds querying (using Uber H3 spatial indexing), and ML-based recommendation ranking. Queries OpenSearch/Elasticsearch cluster for sub-50ms query latency.
- **Booking & Reservation Service**: Coordinates booking state transitions (`PENDING`, `CONFIRMED`, `CANCELLED`). Uses **Distributed Locks (Redlock)** to prevent double-booking race conditions during simultaneous reservations on the same date window. Implements the **Saga Pattern** for multi-step transaction management.
- **Payment & Payout Service**: Integrates with Payment Service Providers (Stripe, Adyen) to collect payments into escrow accounts and handle automated host payouts post check-in.
- **Notification Service**: Listens asynchronously to Kafka event topics to send transactional emails (AWS SES), mobile push notifications (FCM/APNS), and SMS receipts (Twilio).

### 2.4 Data Persistence & Event Architecture
- **Transactional Database (PostgreSQL)**: Multi-az cluster with primary write node and read replicas. Uses PgBouncer connection pooling and vertical/horizontal sharding by region.
- **Read Cache (Redis Cluster)**: In-memory cache for listing metadata, host profiles, session stores, and Redlock distributed locks.
- **Search Index (Elasticsearch/OpenSearch)**: Optimized for geo-distance queries and full-text keyword search. Synced asynchronously via Kafka consumer pipelines.
- **Object Storage (AWS S3)**: Multi-region S3 buckets for raw and processed listing images, PDF invoices, and host verification documents.

---

## 3. Practical Scaling Strategies

| Component | Scaling Strategy | Failure Mode & Resiliency |
|---|---|---|
| **Frontend Delivery** | Multi-region CDN edge caching with stale-while-revalidate headers. | Fallback to origin S3 static backup bucket if edge nodes fail. |
| **API Gateway** | Horizontal scaling via Kubernetes Horizontal Pod Autoscaler (HPA) based on CPU/Request count. | Rate limiting (429 Too Many Requests) & graceful degradation. |
| **Search Index** | Sharded OpenSearch cluster across availability zones; read replicas per shard. | Fallback to cached Postgres spatial query fallback if cluster is degraded. |
| **Booking Engine** | Redlock distributed locks with 5-second TTL; Saga state machine in PostgreSQL. | Idempotency key tracking prevents duplicate payment charges. |
| **Image Pipeline** | Edge worker image format transformation (WebP/AVIF) and S3 lifecycle storage. | CloudFront fallback to raw original JPEG image if optimization worker fails. |

---

## 4. Path Legend

- `──>` **Synchronous Request Path**: Direct HTTP/REST or gRPC client-to-service or service-to-database call.
- `- . ->` **Asynchronous Event Path**: Kafka topic event publish/subscribe streams or telemetry pipelines.
