import { Header } from "./components/Header/Header";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";

import './App.css';
import { ToDoItemWithState } from "./components/ToDoItemWithState./ToDoItemWithState";


function App() {
  return (
    <div className="App" id="app">
      <Header />
      <ToDoItem label="task1" checkValue={false}/>
      <ToDoItem label="task2" checkValue={true}/>
      <ToDoItem label="task3" />
      <ToDoItemWithState label="task 4" checkValue={true}/>
    </div>
  );
}

export default App;
