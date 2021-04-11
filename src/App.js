import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from "./components/form.js"
import ToDolist from "./components/ToDoList"
function App() {
  const [inputText, setInputText]= useState("");
  return (
    <div className="App">
      <header>
        <h1>Gaurang Bhatt's To-DO list {inputText}</h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDolist />
    </div>
  );
}

export default App;
