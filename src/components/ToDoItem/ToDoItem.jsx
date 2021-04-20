import './ToDoItem.css';

export function ToDoItem(){
    return (<div className="to-do-item">
        <input type="checkbox"/>
        <p>Item</p>
        <img src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938216~hmac=3f7e367554afc12a493cbac6db91d874" 
        alt="trash"/>
    </div>)
}