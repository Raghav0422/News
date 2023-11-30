import './App.css';
import React, {Component} from "react";

export default class App extends Component{
  c= "Raghav";
  render(){
    return(
      <div>
        Hello my first class based component {this.c}
      </div>
    )
  }
}

export default App
