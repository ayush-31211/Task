import React from 'react';
import './App.css';
import About from './pages/About/about';
import Case from './pages/Case/case';
import Customer from './pages/Customer/customer';
import Union from './pages/Intro/union';
import Bg from './pages/Intro/bg';
import Login from './pages/Login/login';
import Service from './pages/Service/service';
import Tech from './pages/Technology/Tech';
import Work from './Workflow/workflow';


function App() {
  return (
    <div className="App" id="container">
       <Union/>
      <About/>  
      <Service/>
      <Work/>
      <Tech/>
      <Customer/>
      <Case/>
      <Login/>
      {/* <Bg/> */}
    </div>
  );
}

export default App;
