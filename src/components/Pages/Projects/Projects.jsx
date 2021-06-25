import React, { Component } from 'react';
import calculator from './calculator.jpg';
import sovata from './szovatafinal2.jpg';
import dogsapp from './dogsapp.jpg';
import imovies from './imovies.jpg';
import starship from './starship.jpg';
import store from './store.jpg';


import './Projects.css';

export class Projects extends Component {
    handleMouseEnter(e){
        e.target.style.opacity = '85%';
    }
    handleMouseLeave(e){
        e.target.style.opacity = '100%';
    }
    render(){
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
                                        <a href='https://csetrilaszlo.github.io/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/csetrilaszlo.github.io' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
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
                                        <a href='https://csetrilaszlo.github.io/sovata/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/sovata' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                            <div className='projects-image'>
                                <img src={sovata} alt='image' className='project-img'/>
                            </div>

                    </article>


                    <article className='project-grid'>
                        <div className='projects-image'>
                            <img src={dogsapp} alt='image' className='project-img'/>
                        </div>
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>Dog Application</h6>
                            <p className='project-paragraph'>Getting data from an API: dog list and dog pictures.Working with JSON. Creating next and previous picture buttons. A simple and clean CSS design. </p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/dogapp/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/dogapp' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                    </article>


                    <article className='project-grid'>
                        
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>iMovies</h6>
                            <p className='project-paragraph'>iMovies Factory Landing Page. Made with nice and simple styling. Built with JavaScript Vanilla.</p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/imoviesfactory/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/imoviesfactory' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                            <div className='projects-image'>
                                <img src={imovies} alt='image' className='project-img'/>
                            </div>

                    </article>

                    <article className='project-grid'>
                        <div className='projects-image'>
                            <img src={starship} alt='image' className='project-img'/>
                        </div>
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>Spaceship Game</h6>
                            <p className='project-paragraph'>Built with JavaScript Vanilla. The game is playing with three types of spaceships, creating new spaceships, and moving them on screen them. .</p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/spaceshipgame/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/spaceshipgame' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                    </article>


                    <article className='project-grid'>
                        
                        <div className='projects-buttons' >
                            <h6 className='project-h6'>E-commerce Site</h6>
                            <p className='project-paragraph'>Created a simple and nice E-commerce page. Build with HTML and CSS.</p>
                            <div className='container-projects-button'>
                                <ul className='projects-ul'>
                                    <li>
                                        <a href='https://csetrilaszlo.github.io/store/' target='_blank' id='live-button' 
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >Live Site</a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/csetrilaszlo/store' target='_blank' id='github-button' className='btn-secondary'
                                        onMouseEnter={this.handleMouseEnter}
                                        onMouseLeave={this.handleMouseLeave}
                                        >GitHub</a>
                                    </li>
                                </ul>
                                
                                
                            </div>
                        </div>
                            <div className='projects-image'>
                                <img src={store} alt='image' className='project-img'/>
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
}