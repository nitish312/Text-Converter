import './App.css';
import MainForm from './components/MainForm';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="Text Converter" services="Services" about="About us" contact="Contact us"/>
      
      {/* <Navbar/>  without props */}

      <div className="container my-3">
        <MainForm heading="Enter your text here"/>
      </div>
    </>
  );
}
export default App;