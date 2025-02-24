import React from 'react'
import logo from "../assets/logo-png3.png"
import "../Styles/Header.css"
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Header = () => (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="PlayRVA Logo" />
      </div>
      <nav className="nav">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <NavLink to="/explore" style={{fontSize: '2rem'}}>Explore</NavLink> 
        <NavLink to="/leagues" style={{fontSize: '2rem'}}>Leagues</NavLink> 
        <NavLink to="/community" style={{fontSize: '2rem'}}>Community</NavLink>
        <NavLink style={{fontSize: '2rem'}}>Messages</NavLink> 
        <NavLink to="/dashboard"style={{fontSize: '2rem'}}>Profile</NavLink>
      </nav>
    </header>
  );
  
  export default Header;
