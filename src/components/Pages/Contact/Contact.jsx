import React, { useState } from 'react';
import patternpadcontact from './patternpadcontact.svg';
import patternpad9 from './patternpad9.svg';
import phone from './phone.svg';
import github from '../Home/github.svg';
import linkedin from '../Home/linkedin.svg';
import mail from '../Home/email.svg';


import './Contact.css';
export function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [opacity, setOpacity] = useState('100%');

    const appStyles = {
      opacity: `S{opacity}`,
    }

    function SubmitButton(){
        if (name && email && message){
          return <a href='mailto:csetrilaszlo@gmail.com' className='submit-button'>Submit</a>
        } else {
          return <a  className='submit-disabled' disabled>Submit</a>
        };
      };
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
                  <img src={mail} alt='email' />
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
    <div className='contact-big-div'>
        <div className='input-section'>
            <p>Get in Touch</p>
            
                <input type='text' placeholder='*Name' id='name-item' required className='input-item' value={name} onChange={ e => setname(e.target.value)}/>
                <input type='text'  placeholder='*Email' required className='input-item' value={email} onChange={ e => setemail(e.target.value)}/>
                <textarea required placeholder='*Message' value={message} onChange={ e => setmessage(e.target.value)}></textarea>
                <SubmitButton 
                 style={appStyles}
                 onMouseEnter={() => setOpacity("80%")}
                 onMouseLeave={() => setOpacity("100%")}
                />
            {/* <a href='mailto:csetrilaszlo@gmail.com' className='submit-button'>Submit</a> */}
        </div>
        <div className='contact-pattern-image' id='input-image'>
            <img src={patternpadcontact} alt="pattern" className='patternpad9' />
        </div>
        
    </div>
        
        
        <footer>
            <p>© Csetri Laszlo 2021</p>
        </footer>
    </div>
        
    )
}