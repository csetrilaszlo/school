import React from 'react';
import pattern16 from './patternpad16.svg';
import email from './email.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';


import me from './me.jpg';

import './Home.css';


export function Home() {
    return(
        <div className='section'>
        <div className = 'container'>
            <div className='text'>
                
                
                <h1>Hi I`m Laszlo.</h1>
                
                <p className='text-paragraph'>I'm a software developer passionate about front end development, design and everything in between. I consider work an ongoing education and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.</p>
                <a href='../Contact/Contact' className='btn btn-lg' id='get-in-touch'>
                    Get in Touch
                    <i className='fas fa arrow-right'></i>
                </a>
            </div>
            <div>
                <img src={pattern16} alt='pattern' className='pattern-big' id='big-pattern'/>
                <div className='links-container'>
                    <a href='mailto: csetrilaszlo@gmail.com' target='_blank'>
                    <img src={email} alt='email' className='links' />
                    </a>
                    <a href='https://github.com/csetrilaszlo' target='_blank'>
                    <img src={github} alt='github' className='links' />
                    </a>
                    <a href='https://www.linkedin.com/in/csetri-laszlo-07220936/' target='_blank'>
                    <img src={linkedin} alt='linkedin' className='links' />
                    </a>
                </div>
            </div>
            
            
            {/* <img src={pattern12} alt='pattern' className='pattern-small'/> */}
        </div>
        </div>
    )
}