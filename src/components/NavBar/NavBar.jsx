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

    const [displayHome, setDisplayHome] = useState('block');
    const [displayProjects, setDisplayProjects] = useState('block');
    const [displaySkills, setDisplaySkills] = useState('block');
    const [displayContact, setDisplayContact] = useState('block');



    const [opacityResume, setOpacityResume] = useState('100%');
    

    const homeStyle = {
        opacity : `${opacityHome}`,
        borderBottom : `${borderHome}`,
        display : `${displayHome}`,
        
    };
    const projectsStyle = {
        opacity : `${opacityProjects}`,
        borderBottom : `${borderProjects}`,
        display : `${displayProjects}`,
        
    };
    const skillsStyle = {
        opacity : `${opacitySkills}`,
        borderBottom : `${borderSkills}`,
        display : `${displaySkills}`,
        
    };
    const contactStyle = {
        opacity : `${opacityContact}`,
        borderBottom : `${borderContact}`,
        display : `${displayContact}`,
        
    };
    
    const resumeStyle = {
        opacity : `${opacityResume}`,
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
                          setOpacityHome("80%");
                          setBorderHome('1px solid black');
                          setDisplayHome('flex');
                       } }
                       onMouseLeave={function homeLeave(){
                           setOpacityHome("100%");
                           setBorderHome('none');
                           setDisplayHome('block');
                       } }
                        >
                            Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/projects' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={projectsStyle}
                         onMouseEnter={ function projectEnter() {
                            setOpacityProjects("80%");
                            setBorderProjects('1px solid black');
                            setDisplayProjects('flex');
                         } }
                         onMouseLeave={function projectLeave(){
                             setOpacityProjects("100%");
                             setBorderProjects('none');
                             setDisplayProjects('block');
                         } }>
                            Projects
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/skills' activeClassName='active' className='nav-links' onClick={handleClick}
                         style={skillsStyle}
                         onMouseEnter={ function skillsEnter() {
                            setOpacitySkills("80%");
                            setBorderSkills('1px solid black');
                            setDisplaySkills('flex');
                         } }
                         onMouseLeave={function skillsLeave(){
                             setOpacitySkills("100%");
                             setBorderSkills('none');
                             setDisplaySkills('block');
                         } }
                         >
                            Skills
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink exact to= '/contact' activeClassName='active' className='nav-links' onClick={handleClick}
                        style={contactStyle}
                        onMouseEnter={ function contactEnter() {
                           setOpacityContact("80%");
                           setBorderContact('1px solid black');
                           setDisplayContact('flex');
                        } }
                        onMouseLeave={function projectLeave(){
                            setOpacityContact("100%");
                            setBorderContact('none');
                            setDisplayContact('block');
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