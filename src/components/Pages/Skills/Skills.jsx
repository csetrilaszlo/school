import React from 'react';
import patternpad4 from './patternpad4.svg';
import patternpad44 from './patternpad44.svg';
import patternpad444 from './patternpad444.svg';

import './Skills.css';

export function Skills() {
    return(
        <div className='big-skills-div'>
           <h5>Skills</h5> 
        <div className='skills-section'>
            
            <div className='container-skills'>
                <div className='card'>
                    <img src={patternpad4} alt='pattern' className='patternpad44' />
                    <div>
                        <h3>Programming</h3>
                         <h3 className='card-item'>Languages</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>

                    </div>
                </div>

                <div className='card'>
                    <img src={patternpad44} alt='pattern' className='patternpad44' />
                    <div>
                        <h3>Programming</h3>
                        <h3 className='card-item'>Tools</h3>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Chrome DevTools</li>
                            <li>VSCode</li>
                            <li>Sublime Text</li>
                        </ul>

                    </div>
                </div>

                <div className='card'>
                    <img src={patternpad444} alt='pattern' className='patternpad44' />
                    <div>
                        <h3>Spoken</h3>
                        <h3 className='card-item'>Languages</h3>
                        <ul>
                            <li>Hungarian</li>
                            <li>Romanian</li>
                            <li>English</li>
                            <li>German</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

        <h5>Education</h5>

        </div>
    )
}