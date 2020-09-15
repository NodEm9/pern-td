import React from 'react';
import './App.css'; 
import { Fragment } from 'react';

import ListTodos from "./components/ListTodos";
import InputTodo from './components/InputTodo';



function App() {

  return (
    
    <Fragment >
      <div className="container">
      <InputTodo />
      <ListTodos />
      </div>
    </Fragment>
   );
}

export default App;
