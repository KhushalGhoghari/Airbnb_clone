// Property listing mock data importing centralized propertyImages and supportingAssets
import { propertyImages, supportingAssets } from './propertyImages';

export { propertyImages, supportingAssets };

export const GALLERY_IMAGES = propertyImages;

export const LISTING_DATA = {
  id: "mirashya-ug10-candolim",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  rating: 5.0,
  isNew: false,
  reviewCount: 15,
  isSuperhost: true,
  location: "Candolim, Goa, India",
  propertyType: "Entire serviced apartment",
  specs: "2 guests · 1 bedroom · 1 bed · 1 bath",
  pricePerNight: 4500,
  currency: "₹",
  cleaningFee: 800,
  serviceFee: 650,

  host: {
    name: "Mirashya",
    avatar: supportingAssets.hostAvatar,
    isSuperhost: true,
    hostingDuration: "5 years hosting",
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Hi! I am Mirashya, a passionate host from Goa. I love curating warm, luxurious, and peaceful spaces for travelers looking for a serene getaway."
  },

  guestFavorite: {
    leftLaurel: supportingAssets.guestFavorite.leftLaurel,
    rightLaurel: supportingAssets.guestFavorite.rightLaurel,
    badgeText: "Guest favorite",
    subtitle: "One of the most loved homes on Airbnb, according to guests"
  },

  highlights: [
    {
      id: "self-checkin",
      icon: "key",
      title: "Self check-in",
      description: "Check yourself in with the digital keypad."
    },
    {
      id: "superhost",
      icon: "medal",
      title: "Mirashya is a Superhost",
      description: "Superhosts are experienced, highly rated hosts committed to great stays."
    },
    {
      id: "great-location",
      icon: "location",
      title: "Great location",
      description: "95% of recent guests gave the location a 5-star rating."
    }
  ],

  description: `Welcome to Mirashya UG10, a serene 1BHK serviced apartment located in the prime coastal town of Candolim, Goa. 

Designed for couples and solo travelers looking for a romantic escape, this apartment features a private outdoor Jacuzzi hot tub on the attached balcony, a plush queen bedroom, a cozy air-conditioned living area, and a fully functional kitchen. Enjoy lush tropical views, high-speed Wi-Fi, and top-notch hospitality.`,

  bedroomInfo: {
    roomName: "Bedroom 1",
    bedType: "1 queen bed",
    icon: "bed"
  },

  amenities: [
    { id: "wifi", name: "Fast Wi-Fi (50 Mbps+)", icon: "wifi" },
    { id: "jacuzzi", name: "Private Jacuzzi / Hot tub", icon: "hot-tub" },
    { id: "kitchen", name: "Kitchen with cookware & microwave", icon: "kitchen" },
    { id: "ac", name: "Air conditioning", icon: "ac" },
    { id: "parking", name: "Free parking on premises", icon: "parking" },
    { id: "checkin", name: "Self check-in keypad", icon: "key" },
    { id: "tv", name: "55\" HDTV with Netflix", icon: "tv" },
    { id: "pool", name: "Shared outdoor pool", icon: "pool" }
  ],

  ratingCategories: [
    { id: "cleanliness", name: "Cleanliness", score: 5.0, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/cleanliness.png" },
    { id: "accuracy", name: "Accuracy", score: 5.0, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/accuracy.png" },
    { id: "communication", name: "Communication", score: 5.0, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/condition.png" },
    { id: "location", name: "Location", score: 4.9, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/location.png" },
    { id: "checkin", name: "Check-in", score: 5.0, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/hospitality.png" },
    { id: "value", name: "Value", score: 4.9, icon: "https://airbnb-clone-umber-two.vercel.app/assets/images/chips/comfort.png" }
  ],

  reviews: [
    {
      id: "r1",
      author: "Aarav Sharma",
      date: "August 2026",
      avatar: supportingAssets.reviewers[0].avatar,
      rating: 5,
      comment: "Mirashya's place in Candolim is breathtaking! The private Jacuzzi on the balcony at sunset was the highlight of our vacation. Super clean and peaceful."
    },
    {
      id: "r2",
      author: "Sophia Taylor",
      date: "July 2026",
      avatar: supportingAssets.reviewers[1].avatar,
      rating: 5,
      comment: "Wonderful apartment, extremely well maintained and close to Candolim beach. Mirashya was super responsive and helpful throughout our stay."
    },
    {
      id: "r3",
      author: "Rohan & Priya",
      date: "June 2026",
      avatar: supportingAssets.reviewers[2].avatar,
      rating: 5,
      comment: "The balcony Jacuzzi is pure luxury! Great amenities, fast Wi-Fi for remote work, and comfortable king bed. Would definitely book again."
    },
    {
      id: "r4",
      author: "Vikram Malhotra",
      date: "May 2026",
      avatar: supportingAssets.reviewers[3].avatar,
      rating: 5,
      comment: "5-star experience from check-in to check-out. Location is central yet quiet. High quality linen and spotless apartment."
    }
  ]
};
