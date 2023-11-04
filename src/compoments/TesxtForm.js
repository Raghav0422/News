import React,  { useState } from "react";


export default function TextForm(props){

    const Upper =()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("UpperMode enable","success");
    }
    const Lower =()=>{
        let newText= text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("LowerMode enable","success");
    }

    const Changed=event=>{
        setText(event.target.value);
    }
    
    const [text, setText]=useState("start entering");
    return(
    <>
        <div className="container" style={{color: props.mymode==="light"?"grey":"white" }}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} 
        onChange={Changed} style={{color: props.mymode==="light"?"grey":"white", background:props.mymode==="light"?"white":"grey" }}></textarea>
        </div>
        <button className="btn btn-primary active" onClick={Upper}>Convert to upper</button>
        <button className="btn btn-secondary active" onClick={Lower}>Convert to Lower</button>
    </>
    );
}