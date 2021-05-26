import calculator from './calculator.jpg';
import sovata from './szovatafinal2.jpg';
import React from 'react';

import './Projects.css';

export function Projects() {
    return(
        <div className='projects-big'>
            
            <div className='container-projects'>
                <h5>Projects</h5>
                <div className='projects-item'>
                    <article className='project-grid'>
                        <div className='projects-image'>
                            <img src={calculator} alt='image' className='project-img'/>
                        </div>
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>Calculator</h6>
                            <p className='project-paragraph'>Performs arithmetic operations on numbers. Can do only addition, subtraction, multiplication, and division. Built with JavaScript Vanilla. Designed to be simple.</p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/' target='_blank' id='live-button' >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/csetrilaszlo.github.io' target='_blank' id='github-button' className='btn-secondary'>GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                    </article>


                    <article className='project-grid'>
                        
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>Presentation Site</h6>
                            <p className='project-paragraph'>City Landing Page. Offers a small presentation about the city. Built with JavaScript Vanilla.</p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/sovata/' target='_blank' id='live-button' >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/sovata' target='_blank' id='github-button' className='btn-secondary'>GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                            <div className='projects-image'>
                                <img src={sovata} alt='image' className='project-img'/>
                            </div>

                    </article>
                    <div class='project-last'></div>
                </div>
                
            </div>
            <div className='project-footer'>
                <footer>
                    <p>© Csetri Laszlo 2021</p>
                </footer> 
            </div>
                
        </div>
    )
}