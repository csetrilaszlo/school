import React from 'react';

import { FirstName } from './FormFieldFirst/FormFieldFirst';
import { LastName } from './FormFieldLast/FormFieldLast';
import { Mail } from './FormFieldMail/FormFieldMail';
import { FormMessage } from './FormMessage/FormMessage'
import { SendButton } from './SendButton/SendButton';


import './Form.css';




export class Form extends React.Component{
    render(){
        return(
            <div className="contact-form">
               
                <FirstName />
                <LastName />
                <Mail />
                <FormMessage />
                <SendButton />
                
                
            </div>
        )
    }
}