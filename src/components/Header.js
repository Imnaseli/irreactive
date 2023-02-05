import React from 'react'
import { useState } from 'react'
import {List } from 'react-bootstrap-icons'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import '../style/style.scss'

const Header = ({user , handleLogout}) => {

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
            <ul className='header-links'>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              { user &&(
                <li>
                  <NavLink to="/create">Create</NavLink>
                </li>)
              }

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              {!user?(
                <li>
                  <NavLink to="/authentication">Sign In</NavLink>
                </li>
              ):(
                 
                  showNavbar? (

                    <li>
                      <div className='navbar-signout-button'
                         onClick={handleLogout}>
                          Sign Out
                      </div>
                    </li>

                  ):(
                    <button className='signout-button' onClick={handleLogout}>Sign Out</button>
                  )
                  
              )}


            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Header