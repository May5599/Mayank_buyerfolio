import React from 'react';
import '../css/mainNavbar.css';

const MainNavbar = () => {
  return (
    <nav className="main-navbar">
      <div className="logo">
        <a href="/">
          <img src="../images/logoB.png" alt="Logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/">How it Works</a>
        <a href="/agents">Agents</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact US</a>
      </div>
      <div className="nav-buttons">
        <button>Sign In</button>
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default MainNavbar;
