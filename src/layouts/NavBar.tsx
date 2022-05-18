import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to={'/'}>index</NavLink>
        <NavLink to={'/register'}>register</NavLink>
    </nav>
  )
}

export default NavBar