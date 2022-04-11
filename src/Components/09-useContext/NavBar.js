import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink className='nav-link text-white' aria-current="page" to='/'>HomeScreen</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link text-white' to='/about'>AboutScreen</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link text-white' to='/login'>LoginScreen</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
