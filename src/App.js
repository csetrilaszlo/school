import React from 'react';
import { Header } from "./components/Header/Header";
import { ToDoList } from './components/ToDoList/ToDoList';


import "./App.css";


function App() {
  return (
    <div className="App" id="app">
      <Header />
      <ToDoList 
      key={false}
      />  
       
    </div>
  );
}

export default App;
