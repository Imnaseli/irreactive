import React from 'react'
import { useState } from 'react'
import {List } from 'react-bootstrap-icons'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import '../style/style.scss'

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <List size={28}/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/create">Add</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/authentication">Account</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Header