import React, { useState, Component } from 'react';
import logo from './logo.svg';
import cv from './CsetriLaszloCV.pdf';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [opacity, setOpacity] = useState('100%');
    const [border, setBorder] = useState('none');

    const homeStyle = {
        opacity = `${setOpacity}`,
        border = `${setBorder}`,
    };
    const projectsStyle = {
        opacity = `${setOpacity}`,
        border = `${setBorder}`,
    };
    const skillsStyle = {
        opacity = `${setOpacity}`,
        border = `${setBorder}`,
    };
    const contactStyle = {
        opacity = `${setOpacity}`,
        border = `${setBorder}`,
    };
    const resumeStyle = {
        opacity = `${setOpacity}`,
    };
    

    return(
        

        
        <header className='navbar'>
            <div className='nav-container'>
                <NavLink exact to= '/' className='nav-logo'> 
                    <img src={logo} className='logo'/>
                </NavLink>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                        <NavLink exact to= '/' activeClassName='active' className='nav-links' onClick={handleClick} 
                        style={homeStyle}
                        onMouseEnter={function homeStyle(){
                           setOpacity('80%');
                           setBorder('1px solid black');
                        } }
                        onMouseLeave={function homeLeave(){
                            setOpacity('100%');
                           setBorder('none');
                        }}
                        >
                            Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/projects' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={projectsStyle}
                         onMouseEnter={function projectStyle(){
                            setOpacity('80%');
                            setBorder('1px solid black');
                         } }
                         onMouseLeave={function projectLeave(){
                            setOpacity('100%');
                            setBorder('none');
                         }}>
                            Projects
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/skills' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={skillsStyle}
                         onMouseEnter={function skillsStyle(){
                            setOpacity('80%');
                            setBorder('1px solid black');
                         } }
                         onMouseLeave={function skillsLeave(){
                            setOpacity('100%');
                            setBorder('none');
                         }}>
                            Skills
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/contact' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={contactStyle}
                         onMouseEnter={function contactStyle(){
                            setOpacity('80%');
                            setBorder('1px solid black');
                         } }
                         onMouseLeave={function contactLeave(){
                            setOpacity('100%');
                            setBorder('none');
                         }}>
                            Contact
                    </NavLink>
                    </li>
                    <li className='resume-item'>
                        <a href={cv} target='_blank' activeClassName='active' id='resume-link' onClick={handleClick}
                        style={resumeStyle}
                        onMouseEnter={() => setOpacity("80%")}
                        onMouseLeave={() => setOpacity("100%")}
                        >
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