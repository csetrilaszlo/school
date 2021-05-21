import patternpad9 from './patternpad9.svg';
import patternpad15 from './patternpad15.svg';
import me from '../Home/me.jpg';


import './About.css';


import React from 'react';

export function About() {
    return(
        <div className='container-about'>
            <div className='about-grid'>
                <div className='about-showcase'>
                    
                    <img src={me} alt='Csetri Laszlo' className='me'/>
                   <h1>Csetri Laszlo</h1>
                    <h5>About me</h5>
                    <p className='text-paragraph' id='text-about'>From the moment I created my first application, I knew I
was hooked into the world of software development. For me software development doesn`t mean "just a
job", it`s offered an engaging challange to continually
learn and improve my skills in creating high-quality
software.</p>
                <a href='../contact/contact' id='get-in-touch' className='btn btn-lg' >
                    
                    Get in Touch</a>
                </div>
                
                <img src={patternpad15} alt='pattern' className='patternpad15' />
            </div>
            
        </div>
    )
}