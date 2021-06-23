import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import emailjs, { init } from 'emailjs-com';
import patternpadcontact from './patternpadcontact.svg';
import patternpad9 from './patternpad9.svg';
import phone from './phone.svg';
import github from '../Home/github.svg';
import linkedin from '../Home/linkedin.svg';
import mail from '../Home/email.svg';
import 'aos/dist/aos.css';


import './Contact.css';
export function Contact() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('csetrilaszlo', 'template_af7kh0h', e.target, 'user_ZCqc68Il9bOSKh6MAg8Dm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

    const [user_name, setname] = useState('');
    const [user_email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [opacity, setOpacity] = useState('100%');

    const appStyles = {
      opacity: `${opacity}`,
    }

    function SubmitButton(){
        if (user_name && user_email && message){
          return <input type='submit' className='submit-button' value='Submit' 
          style={appStyles}
          onMouseEnter={() => setOpacity("80%")}
          onMouseLeave={() => setOpacity("100%")}
        //   onClick={function empty(){
        //     setname("");
        //     setemail('');
        //     setmessage('');
            
        // } }
          />
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
    
    <div className='contact-section' id='contact-second' >
        <div className='input-section'  className='contact=form' >
            <p id='get-in'>Get in Touch</p>
            <form className="contact-form" onSubmit={sendEmail}> 
              
                <input type="text" name="user_name" id='name-item' placeholder='*Name' required className='input-item' value={user_name} onChange={ e => setname(e.target.value)}/>
              
              
                <input type="email" name="user_email"   placeholder='*Email' required className='input-item' value={user_email} onChange={ e => setemail(e.target.value)}/>
              
              <div>
                <textarea name="message" placeholder='*Message'  value={message} onChange={ e => setmessage(e.target.value)}/>
              </div> 
                <div>
                  <SubmitButton />
                </div>
                
            </form>
                
            
        </div>
        <div className='contact-pattern-image'  id='input-image'>
            <img src={patternpadcontact} alt="pattern" className='patternpad9' />
        </div>
        
    </div>
        
    




                {/* <input type='text'  name='user_name' placeholder='*Name' id='name-item' required className='input-item' value={user_name} onChange={ e => setname(e.target.value)}/>
                <input type='email' name='user_email' placeholder='*Email' required className='input-item' value={user_email} onChange={ e => setemail(e.target.value)}/>
                <textarea required name='message' placeholder='*Message'  value={message} onChange={ e => setmessage(e.target.value)}></textarea>
                
                <SubmitButton /> */}




        
        <footer>
            <p>© Csetri Laszlo 2021</p>
        </footer>
    </div>
        
    )
}