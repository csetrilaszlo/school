import React, { useState } from 'react';
import logo from './logo.svg';
import cv from './CsetriLaszloCV.pdf';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        

        
        <header className='navbar'>
            <div className='nav-container'>
                <NavLink exact to= '/' className='nav-logo'> 
                    <img src={logo} className='logo'/>
                </NavLink>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                        <NavLink exact to= '/' activeClassName='active' className='nav-links' onClick={handleClick}>
                            Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/projects' activeClassName='active' className='nav-links' onClick={handleClick}>
                            Projects
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/skills' activeClassName='active' className='nav-links' onClick={handleClick}>
                            Skills
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/contact' activeClassName='active' className='nav-links' onClick={handleClick}>
                            Contact
                    </NavLink>
                    </li>
                    <li className='resume-item'>
                        <a href={cv} target='_blank' activeClassName='active' id='resume-link' onClick={handleClick}>
                            Résumé
                    </a>
                    </li>
                </ul>
                <div className='nav-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>    
                </div> 
            </div>
            
        </header>
    )
}