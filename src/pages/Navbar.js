import React from 'react';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/icons/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const goToPage = (page) => {
    navigate(page);
    };
    return (
            <div className="navbar-container">
                <div className="left-section">
                    <img src={Logo} alt="Company Logo" className="logo" />
                </div>
                <div className="left-links">
                    <a className="nav-link" onClick={() => goToPage('/howitworks')}>How it Works</a>
                    <a className="nav-link" onClick={() => goToPage('/agents')}>Agents</a>
                    <a className="nav-link" onClick={() => goToPage('/aboutus')}>About</a>
                    <a className="nav-link" onClick={() => goToPage('/blog')}>Blog</a>
                    <a className="nav-link" onClick={() => goToPage('/contactus')}>Contact Us</a>
                </div>
                <div className="right-section">
                    <Link to = '/signin'><button className="btn btn-signin">Sign In</button></Link>
                    <Link to = '/proplist'><button className="btn btn-getstarted">Get Started</button></Link>
                </div>
            </div>
    );
}

export default Navbar;
