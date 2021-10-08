import React, { useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import Counter from './components/Counter/Counter'
import InputForm from './components/InputForm/InputForm';
import Fetch from './components/Fetch/Fetch';
import ReactDOM from 'react-dom';


const App = () => {
  return(
    <div>
      <Fetch />
    </div>
  )
}
ReactDOM.render(App, document.getElementById('root'));

export default App;
