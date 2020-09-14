import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from  './Components/home';
import Header from  './Components/Heqder';

function App() {
  return (
    <div className="App">
     <div className="container-fluid">
       <div className="App-header"><Header></Header></div>
       <div><Home></Home></div>
     </div>
    </div>
  );
}

export default App;
