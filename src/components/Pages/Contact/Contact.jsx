import React from 'react';
import patternpad9 from './patternpad9.svg';
import phone from './phone.svg';
import github from '../Home/github.svg';
import linkedin from '../Home/linkedin.svg';
import email from '../Home/email.svg';


import './Contact.css';
export function Contact() {
    return(
        <div className='contact'>
            <div className='contact-div'>
                <h5>Get In Touch</h5>
                <p>Want to get in touch?  Here`s how you can reach me..</p>
                <p>Feel free to message me! I`d love to hear from you. </p>
            </div>
        <div class='contact-section'>
            <div className='contact-pattern-image'>
                <img src={patternpad9} alt='pattern' className='patternpad9' />
            </div>    
        <div className ='contact-list'>
           
          <ul>
            <li>
              <a href="mailto: csetrilaszlo@gmail.com" className='contact-item'>
                  <img src={email} alt='email' />
                  <span>csetrilaszlo@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+40755179534" className='contact-item'>
                <img src={phone} alt='phone' />
                <span>+40 755 179 534</span></a>
            </li>
            <li>
              <a href="https://github.com/csetrilaszlo" target="_blank" className='contact-item'>
                  <img src={github} alt='github' />
                  <span>github.com/csetrilaszlo</span></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/csetrilaszlo/" target="_blank" className='contact-item'>
                  <img src={linkedin} alt='linkedin' />
                <span>linkedin.com/in/csetrilaszlo</span></a>
            </li>
          </ul>
        </div>
        
      
    

        
    </div>
        <footer>
            <p>© Csetri Laszlo 2021</p>
        </footer>
    </div>
        
    )
}