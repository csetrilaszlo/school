import React, { useState, Component } from 'react';
import logo from './logo.svg';
import cv from './CsetriLaszloCV.pdf';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export function NavBar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [opacityHome, setOpacityHome] = useState('100%');
    const [opacityProjects, setOpacityProjects] = useState('100%');
    const [opacitySkills, setOpacitySkills] = useState('100%');
    const [opacityContact, setOpacityContact] = useState('100%');

    const [borderHome, setBorderHome] = useState('none');
    const [borderProjects, setBorderProjects] = useState('none');
    const [borderSkills, setBorderSkills] = useState('none');
    const [borderContact, setBorderContact] = useState('none');

    ;



    const [opacityResume, setOpacityResume] = useState('100%');
    

    const homeStyle = {
        opacity : `${opacityHome}`,
        borderBottom : `${borderHome}`,
        zIndex : '1',
        borderBottom : '-1px',
      
        
        
    };
    const projectsStyle = {
        opacity : `${opacityProjects}`,
        borderBottom : `${borderProjects}`,
        zIndex : '1',
        borderBottom : '-1px',
        
        
        
    };
    const skillsStyle = {
        opacity : `${opacitySkills}`,
        borderBottom : `${borderSkills}`,
        zIndex : '1',
        borderBottom : '-1px',
        
        
    };
    const contactStyle = {
        opacity : `${opacityContact}`,
        borderBottom : `${borderContact}`,
        zIndex : '1',
        borderBottom : '-1px',
        
        
        
        
    };
    
    const resumeStyle = {
        opacity : `${opacityResume}`,
        zIndex : '1',
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
                       onMouseEnter={ function homeEnter() {
                          setOpacityHome("50%");
                          setBorderHome('1px solid black');
                          
                       } }
                       onMouseLeave={function homeLeave(){
                           setOpacityHome("100%");
                           setBorderHome('1px solid transparent');
                           
                       } }
                        >
                            Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/projects' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={projectsStyle}
                         onMouseEnter={ function projectEnter() {
                            setOpacityProjects("50%");
                            setBorderProjects('1px solid black');
                            
                         } }
                         onMouseLeave={function projectLeave(){
                             setOpacityProjects("100%");
                             setBorderProjects('1px solid transparent');
                             
                         } }>
                            Projects
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/skills' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={skillsStyle}
                         onMouseEnter={ function skillsEnter() {
                            setOpacitySkills("50%");
                            setBorderSkills('1px solid black');
                           
                         } }
                         onMouseLeave={function skillsLeave(){
                             setOpacitySkills("100%");
                             setBorderSkills('1px solid transparent');
                             
                         } }
                         >
                            Skills
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/contact' activeClassName='active' className='nav-links' onClick={handleClick}
                        style={contactStyle}
                        onMouseEnter={ function contactEnter() {
                           setOpacityContact("50%");
                           setBorderContact('1px solid black');
                           
                        } }
                        onMouseLeave={function projectLeave(){
                            setOpacityContact("100%");
                            setBorderContact('1px solid transparent');
                            
                        } }
                         >
                            Contact
                    </NavLink>
                    </li>
                    <li className='resume-item'>
                        <a href={cv} target='_blank' activeClassName='active' id='resume-link' onClick={handleClick}
                        style={resumeStyle}
                        onMouseEnter={() => setOpacityResume("80%")}
                        onMouseLeave={() => setOpacityResume("100%")}
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