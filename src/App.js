import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News.js';
import React, {Component} from "react";

export default class App extends Component{
  
  render(){
    return(
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}
//export default App
