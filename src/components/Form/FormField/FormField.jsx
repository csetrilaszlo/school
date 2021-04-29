import { Component } from 'react';
import './FormField.css';
 

export  function FormOne(props){
     return(
         <div className="contact-form-field">
             <p>{props.name}</p>
             <input  onChange={(event) => props.handleChange(event,props.id)}  type='textbox' className="input-field"/>
         </div>
     )
 }

 