 import './FormFieldFirst.css';
 import { useState } from 'react';

 export function FirstName(){
     return(
         <div className="contact-form-field">
             <p>FIRST NAME</p>
             <input type='textbox' className="input-field"/>
         </div>
     )
 }