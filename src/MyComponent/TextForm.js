import React, { useState } from 'react';


export default function TextForm(props) {
   const handleOnClick = () =>{
    //console.log("you were clicked on handle on click");
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
   };
   
   const handleloClick = () =>{
    //console.log("you were clicked on handle on click");
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "sucess");
   } 

   const handClearText = () =>{
    //console.log("you were clicked on handle on click");
    let newText= '';
    setText(newText);
   }  
   const handleOnChange = (event) =>{
    //console.log("on change");
    setText(event.target.value);
   }
   const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length -1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    }; 

   const speak = () =>{
    let msg= new SpeechSynthesisUtterance();
    msg.text= text;
    window.speechSynthesis.speak(msg);
   }

    const [text, setText] = useState(' ');
    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'light'? 'black':'white'}}>
           <h1> {props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3" 
                style ={{backgroundColor: props.mode === 'dark'?'#494848': 'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>

           <button className="btn-primary mx-2 my-2" onClick={handleOnClick} disabled={text.length===0}> Convert to Uppercase</button>
           <button className="btn-primary mx-2 my-2"  onClick={handleloClick} disabled={text.length===0}> Convert to Lowercase</button>
           <button className="btn-primary mx-2 my-2"  onClick={handClearText} disabled={text.length===0}> Clear Text</button>
           <button className="btn-primary mx-2 my-2"  onClick={handleinverseclick} disabled={text.length===0}> inverse</button>
           <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" disabled={text.length===0}>Speak</button>
           
            <h1 className="my-2"> Your text summery</h1>
            <p className="asd">{text.split(" ").filter ((element) => {return element.length !==0}).length} Words and {text.split(" ").filter((element)=>{return element.length !==0}).length} Characters </p>
            <p className='tyu'>{0.008 * text.split(" ").filter ((element) => {return element.length !==0}).length} Minutes of read</p>
            <h3 style={{color: props.mode === 'light'?'black':'white'}}> Preview</h3>
            <p>{text}</p>
            </div>
        </>
    )
}


