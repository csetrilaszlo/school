
import './SuccessMessage.css';



 export function SuccessMessage(props){
     return(
         <div className="success-message">
          
             <p >MESSAGE SENT!</p>
             <button onClick={props.close}
             >X</button>
         </div>
     )
 }
