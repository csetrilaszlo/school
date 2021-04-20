import './ToDoItem.css';

export function ToDoItem(props){
    console.log(props);

    return (<div className="to-do-item">
        <input type="checkbox" defaultChecked={props.checkValue}/>
        <p>{props.label}</p>
        <img src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938216~hmac=3f7e367554afc12a493cbac6db91d874" 
        alt="trash"/>
    </div>)
}