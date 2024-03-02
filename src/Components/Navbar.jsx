import React from 'react';
import "../Components/CSS/Navbar.css"
import { Link } from 'react-router-dom';
import logo from "../Images/logo/logo.png"

function Navbar() {
 return (
    <nav className="navbar navbar-expand-md">
      <div className="container Navbar">
        <a className="navbar-brand" href="#">
          <Link to="/">
            <img src={logo} alt="logo" width="250" height="50"/>
          </Link>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className='nav-link' to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/AboutUs" >About Us</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Services" >Services</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="Batches/" >Batches</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/" >Payment</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/Studentlogin" >Student Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 );
}

export default Navbar;
