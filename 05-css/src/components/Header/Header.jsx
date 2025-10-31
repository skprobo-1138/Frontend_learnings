import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>My Website</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Header