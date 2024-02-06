import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';

import {
  BrowserRouter,
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //by default light mode enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262a2f';
      showAlert("Dark mode has been enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
      <BrowserRouter basename='/TextUtils-template'>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About mode={mode} showAlert={showAlert} />} />
            {/* <About /> */}
          <Route index element={<div className="container my-3"><TextForm heading="Try TextUtils - Word Counter" mode={mode} showAlert={showAlert} /></div>} />
        </Routes>
        <Footer mode={mode}/>
      </BrowserRouter>
    </>
  );
}

export default App;
