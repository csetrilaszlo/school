import React, { Component } from 'react';
import resume from './CsetriLaszloCV.pdf';
import patternpad161 from './patternpad161.svg';
 
import './Resume.css';

export class Resume extends Component {
    onResumeClick() {
        window.open(resume);
    }
    render(){
        
        return(
        <div className='resume-section'>
            <h5>Résumé</h5>
            <div className='resume-div'>
                <div> 
                    <a className='resume-link' onClick={this.onResumeClick}>Resume</a>
                    <img src={patternpad161} alt='pattern' id='patternpad161'/>
                </div>
                
                <div className='iframe-div'>
                    <iframe 
                className='iframe'
                src={resume}
                type='application/pdf'
                title='Resume'
                    />
                </div>
                
           </div>
        </div>
        
    )
    }
    
}