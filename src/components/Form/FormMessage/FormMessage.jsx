import './FormMessage.css';
 

export  function FormMessageOne(props){
     return(
         <div className="contact-form-field">
             <p>{props.name}</p>
             <textarea  onChange={(event)=>props.handleChange(event,props.id)} type='textbox' className="input-field" className='text-area'/>
         </div>
     )
 }