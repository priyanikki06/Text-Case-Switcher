import './App.css';
 import Navbar from "./MyComponent/Navbar";
 import Footer from './MyComponent/Footer';
 import Todos from './MyComponent/Todos';
 import TextForm from './MyComponent/TextForm';
 import About from './MyComponent/About';
 import { useState } from 'react';
 import Alert from './MyComponent/Alert';
 import React from "react";
 import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light'); // wether dark dark mode is enable or not
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
  setAlert({
      msg: message,
      type: type
     })
    setTimeout(() => {
     setAlert(null);
    },3000) ;
  }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#232121';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-Dark-Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light-Mode';
    }
  }
  return (
    <>
    <Router>
   <Navbar title="Text-Case-Switch" aboutText="About" Homeinfo="Home" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    
    
   <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route exact path="/about" element={<About mode={mode}/>}/> {/* Update route declaration */}
          <Route exact path="/Home" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> {/* Update route declaration */}
        </Routes>
    </Router>
     <Footer/>
     <Todos/>
    </>

  );
}

export default App;
