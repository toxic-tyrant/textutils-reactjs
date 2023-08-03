import { useState } from 'react';
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#111111';
      showAlert("Dark mode has been enabled","success");
    }
  }

  return (
    <>
  
    <Navbar title="TextUitls" mode={mode} toggleMode={toggleMode} />
    
    <div className="container">
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route/>
      <Route exact path ="/" element = {<TextForm text= "Enter the text" heading = "Enter text to analyze" mode={mode} showAlert={showAlert} />}>
      </Route>
    </Routes>
    </div>

    <Alert alert={alert}/>
    </>
  );
}

export default App;