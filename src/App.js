import './App.css';
import About from './components/About';
import MainForm from './components/MainForm';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState("light")
  
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(80 56 28)'
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Text Converter" services="Services" about="About us" contact="Contact us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar/>  without props */}

      <div className="container my-3">
        <MainForm showAlert={showAlert} heading="Type your text below" mode={mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}
export default App;