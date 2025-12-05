  import React from 'react';
  import Todoitem from './components/Todoitem';
  import Header from './components/header';
  import Button from './components/Button';
  import './style.css';
  const App = () =>{
    return (
      <div className='todo-container'>
        <Header/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Todoitem/>
        <Button/>
        
      </div>
    )
  }

  export default App;