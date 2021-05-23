
import patternpad12 from './patternpad12.svg';

import me from '../Home/me.jpg';


import './About.css';


import React from 'react';

export function About() {
    return(
        <div>
        <div className='container-about'>
            <div className='about-grid'>
                <div className='about-showcase'>
                    <h5>About me</h5>
                    <p className='text-paragraph' id='text-about'>From the moment I created my first application, I knew I
                    was hooked into the world of software development. For me Front-End Development doesn`t mean "just a
                    job", it`s offered an engaging challenge to continually
                    learn and improve my skills in creating high-quality
                    software.</p>
                <a href='../contact/contact' id='get-in-touch' className='btn btn-lg' >Get in Touch</a>
                </div>
                <div>
                <img src={me} alt='Csetri Laszlo' className='me'/>
                <p id='about-text'>Hi, my name is</p>
                <h4>Csetri Laszlo</h4>
                <p>And I`m a <span>Web Developer</span></p>
                </div>
                
            </div> 
        </div>
           


            <div className='container-about'>
                <div className='about-grid'>
                    <div className='about-showcase'>
                        <img src={patternpad12}className='patternpad12' alt='patternpad12' />
                    </div>
                    <div>
                        <h5>Hobbies</h5>
                        <p className='text-paragraph' id='text-about'>I'm a very curios person, my hobbies are related to travelling, exploring new cities, discovering new places,new cultures. I believe travelling make people more open minded. I also enjoy reading books, i think it`s a good way to learn new things.</p>
                        <a href='../contact/contact' id='get-in-touch' className='btn btn-lg' >Get in Touch</a>
                    </div>
                </div>
            </div>
        
        </div>
    )
}