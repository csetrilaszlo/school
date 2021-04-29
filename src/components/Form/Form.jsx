import React from 'react';
import { FormOne } from './FormField/FormField'
import { FormMessageOne } from './FormMessage/FormMessage';
import { SendButton } from './SendButton/SendButton';
import { Component } from 'react';



import './Form.css';

export class Form extends React.Component{

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        allInputsValid: false
    }

    handleChange = (event,string) => {
        // let entries = Object.entries(this.state);
        // console.log(entries);
        console.log(Object.keys(this.state).filter((item)=>item===string).toString());
        // console.log("newState: ",newState);
        this.setState({[Object.keys(this.state).filter((item)=>item===string).toString()]:event.target.value});
        // this.state= newStateObject;
        console.log("this.state: ",this.state);
    }

    handleSend = () => {
        console.log("Send Button Pressed");
        if(this.state.allInputsValid) {
            
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                allInputsValid: true});
            
        } 
    }

    render(){
        return(
            <div className="contact-form">
             <FormOne 
             key="firstName"
             id="firstName"
             name="FIRSTNAME"
             handleChange={this.handleChange}
             />

             <FormOne 
             key="lastName"
             id="lastName"
             name="LASTNAME"
             handleChange={this.handleChange}
             />

             <FormOne 
             key="email"
             id="email"
             name="EMAIL"
             handleChange={this.handleChange}
             />

            <FormMessageOne 
            key="message"
            id="message"
            name="MESSAGE"
            /> 
            <SendButton 
            handleSend={this.handleSend}
            />
                
                
            </div>
        )
    }
}