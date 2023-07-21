import React from 'react'
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ placeholder, path }) => {
    return (
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        } to={path}>{placeholder}</NavLink>
    )
}

export default NavigationLink;