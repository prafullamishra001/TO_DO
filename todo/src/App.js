  import React from 'react';
  import Todoitem from './components/Todoitem';
  import Header from './components/header';
  import Button from './components/Button';
  import Countercomponent from './components/countercomponent';
  import './style.css';
  const App = () =>{
    return (
      <div className='todo-container'>
        <Countercomponent/>
        <Header/>
        <Todoitem text="Eat" />
        <Todoitem text="Sleep" />
        <Todoitem completed={true}text="Code" />
        <Todoitem text="Repeat" />
        <Todoitem text="Relax" />
        <Button/>
        
      </div>
    )
  }

  export default App;