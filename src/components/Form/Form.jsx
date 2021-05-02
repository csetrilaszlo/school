import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";
import { SuccessMessage } from "./SuccessMessage/SuccessMessage"

import "./Form.css"


export class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        firstNameValid: null,
        lastNameValid: null,
        emailValid: null,
        messageValid: null,
        data: false
    }

    onChange = (event,string) => {
        this.setState({[Object.keys(this.state).filter((item)=>item===string).toString()]:event.target.value});
        
    }

    handleSend = () => {
        
        if(this.state.firstName ===""){
            this.setState({firstNameValid:false});
            } else {
            this.setState({firstNameValid:true});
            };
        if(this.state.lastName ===""){
            this.setState({lastNameValid:false});   
            } else {
            this.setState({lastNameValid:true});
            };
        if(this.state.email === "") {
            this.setState({emailValid:false});
            } else {
            this.setState({emailValid:true});
            };
        if(this.state.message === "") {
            this.setState({messageValid:false});
            } else {
            this.setState({messageValid:true});
            };
       
        if(this.state.firstName && 
            this.state.lastName && 
            this.state.email && 
            this.state.message) {
            this.setState({data:true});
        }
    }


    successMessage(){
        this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    firstNameValid: null,
                    lastNameValid: null,
                    emailValid: null,
                    messageValid: null,
                    data: false
                });
            
    }



   

    render(){
        return (
            <div className="form">
                <FormField 
                    key="firstName"
                    id="firstName"
                    name="FIRST NAME" 
                    onChange={this.onChange}
                    invalid = {this.state.firstNameValid}
                />

                <FormField 
                    key="lastName" 
                    id="lastName"
                    name="LAST NAME" 
                    onChange={this.onChange}
                    invalid = {this.state.lastNameValid}
                />
                
                <FormField 
                    key="email"
                    id="email"
                    name="EMAIL" 
                    onChange={this.onChange}
                    invalid = {this.state.emailValid}
                />

                <FormMessage 
                    key="message"
                    id="message"
                    name="MESSAGE" 
                    onChange={this.onChange}
                    invalid = {this.state.messageValid}
                />

                <SendButton
                    handleSend={this.handleSend}
                />

                {this.state.data ? <SuccessMessage successMessage={this.successMessage}/> : null }
                
            </div>
        ) 
    }
}