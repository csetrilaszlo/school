
import "./FormField.css"

export function FormField(props) {
    let inputClass = "";
    if(props.invalid===false) {
        inputClass += " input-field--selected" 
    }
    return(
        <div className="contact-form-field">
            <p>{props.name}</p>
            <input onChange={(event) => props.onChange(event,props.id)} 
            className={inputClass}
           
            ></input>
        </div>
    )
}