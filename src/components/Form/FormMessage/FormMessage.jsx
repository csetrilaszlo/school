import "./FormMessage.css"

export function FormMessage(props) {
    let inputClass = "";
    if(props.invalid===false) {
        inputClass += " input-field--selected" 
    }
    return(
        <div className="contact-form-field" >
            <p>{props.name}</p>
            <textarea onChange={(event)=>props.onChange(event,props.id)}  
            className={inputClass}
            ></textarea>
        </div>
        
    )
}