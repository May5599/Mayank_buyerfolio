import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavbarBlog.css';
const NavbarBlog = () => {
  return (
    <nav className="navbar-blog">
      <NavLink to="/blog/AllPost" activeClassName="active">
        All Posts
      </NavLink>
      <NavLink to="/blog/weekly" activeClassName="active">
        Weekly Posts
      </NavLink>
      <NavLink to="/blog/trends" activeClassName="active">
        Market Trends
      </NavLink>
      <NavLink to="/blog/improvement" activeClassName="active">
        Home Improvement
      </NavLink>
      <NavLink to="/blog/tips" activeClassName="active">
        Tips & Advice
      </NavLink>
    </nav>
  );
};

export default NavbarBlog;
