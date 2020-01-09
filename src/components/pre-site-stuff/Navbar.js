import React from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar(){

    return (
     <div className='navmenu'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/home'>Introverts</NavLink>
        <NavLink to='/home'>Hangouts</NavLink>
        <NavLink to='/home'>Metrics</NavLink>
        <NavLink to='/home'>Settings</NavLink>
     </div> 
    )
}