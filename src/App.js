import './App.css';
import About from './components/About';
import MainForm from './components/MainForm';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="Text Converter" services="Services" about="About us" contact="Contact us" mode={mode} toggleMode={toggleMode}/>
      
      {/* <Navbar/>  without props */}

      <div className="container my-3">
        <MainForm heading="Enter your text below" mode={mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}
export default App;