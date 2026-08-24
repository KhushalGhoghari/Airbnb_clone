import React from 'react';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { UserMenu } from './UserMenu';
import './Header.css';

export const Header = ({ hostAvatar }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <Logo />
        <SearchBar />
        <UserMenu hostAvatar={hostAvatar} />
      </div>
    </header>
  );
};
