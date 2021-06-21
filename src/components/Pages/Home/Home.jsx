import React, {useEffect, useState } from 'react';
import pattern16 from './patternpad16.svg';
import email from './email.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';
import me from './me.jpg';
import patternpad12 from './patternpad12.svg';




import './Home.css';


export function Home() {
    const [opacity, setOpacity] = useState('100%');
    
    const appStyles = {
        opacity: `${opacity}`,
    }

    return(
        <div>
        <div className='section'>
        <div className = 'container'>
            <div className='text'>
                
                
                <h1 id='glitch-effect'>Hi I`m Laszlo.</h1>
                <div className='big-web-developer-div'>
                     <p className='web-developer'>And I`m a <span></span></p>
                </div>
                   
                <p className='text-paragraph'>I'm a software developer passionate about Front-End Development, design and everything in between. I consider work an ongoing education and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.</p>
                <a href='../Contact/Contact' style={appStyles} 
                onMouseEnter={() => setOpacity('80%')}
                onMouseLeave={() => setOpacity('100%')}
                className='btn btn-lg' id='get-in-touch'>
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
                    <img src={linkedin} alt='linkedin' className='links'/>
                    </a>
                </div>
            </div>
            
        </div>
</div>

        <div className='container-about'>
            <div className='about-grid'>
                <div className='about-showcase'>
                    <h5>About me</h5>
                    <p className='text-paragraph'>From the moment I created my first application, I knew I
                    was hooked into the world of software development. For me Front-End Development doesn`t mean "just a
                    job", it`s offered an engaging challenge to continually
                    learn and improve my skills in creating high-quality
                    software.</p>
                <a href='../contact/contact' id='get-in-touch'
                style={appStyles} 
                onMouseEnter={() => setOpacity('80%')}
                onMouseLeave={() => setOpacity('100%')}
                className='btn btn-lg' >Get in Touch</a>
                </div>
                <div>
                <img src={me} alt='Csetri Laszlo' className='me'/>
                <p id='about-text'>Hi, my name is</p>
                <h4>Csetri Laszlo</h4>
               
                </div>
                
            </div> 
        </div>
          


            <div className='container-about'>
                <div className='about-grid'>
                    <div className='about-showcase'>
                        <img src={patternpad12}className='patternpad12' alt='patternpad12' />
                    </div>
                    <div className='hobbies-div'>
                        <h5>Hobbies</h5>
                        <p className='text-paragraph' id='text-hobbies'>I'm a very curios person, my hobbies are related to travelling, exploring new cities, discovering new places,new cultures. I believe travelling make people more open minded. I also enjoy reading books, i think it`s a good way to learn new things.</p>
                        <a href='../contact/contact' id='get-in-touch' 
                        style={appStyles} 
                        onMouseEnter={() => setOpacity('80%')}
                        onMouseLeave={() => setOpacity('100%')}
                        className='btn btn-lg' >Get in Touch</a>
                    </div>
                </div>
            </div>
            <div id='footer-home'>
               <footer>
                    <p>© Csetri Laszlo 2021</p>
                </footer> 
            </div>
            
        
        </div>
    )
}