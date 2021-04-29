import './SendButton.css';


export function SendButton(props){
    return(
        <div className="send-container">
            <button className="send" onClick={()=>props.handleSend()}>Send</button>
        </div>
    )
}
