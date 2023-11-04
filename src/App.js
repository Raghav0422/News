
import Alert from './compoments/Alert.js';
import Navbar from './compoments/Navbar.js';
import TextForm from './compoments/TesxtForm.js';
// import About from './compoments/About.js';
import React, {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes, //as switch replacement
// } from "react-router-dom";

function App() {
  const [mode, setMode]= useState("light");
  const [text,settext]=useState("Enable Dark Mode")
  // const [newtext,setnewtext]=useState("Enable Blue Mode")
  // const [newmode, setnewMode]= useState("blue");
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);}
      ,1000);
  }
  const toggleFun=()=>{
    if(mode==="light"){
      setMode("dark")
      settext("Enable light Mode")
      document.body.style.background="#4D5063"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light");
      settext("Enable Dark Mode")
      document.body.style.background="white"
      showAlert("Light mode has been enabled","success")
    }
  }
  // const toggleNewFun=()=>{
  //   if(newmode==="blue"){
  //     setnewMode("red")
  //     setnewtext("Enable Red Mode")
  //     document.body.style.background="#132FE3"
  //     showAlert("Blue mode has been enabled","success")
  //   }
  //   else{
  //     setnewMode("blue");
  //     setnewtext("Enable Blue Mode")
  //     document.body.style.background="#E32613"
  //     showAlert("Red mode has been enabled","success")
  //   }
  //}
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mymode={mode} toggle={toggleFun} enableText={text} /*enableNewColo r={newtext} toggleNew={toggleNewFun} newmode={newmode}*//>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter your Text here" mymode={mode} showAlert={showAlert}/>
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter your Text here" mymode={mode} showAlert={showAlert}/>} />
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
