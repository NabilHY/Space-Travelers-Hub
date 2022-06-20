import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to='Rockets'> Rockets</NavLink>
                <NavLink to='Missions'> Missions</NavLink>
                <NavLink to='Profile'> Profile</NavLink>
            </nav>
        </div>
    )
}

export default Navbar
