import React, { useState } from 'react'


export default function TextForm(props) {

    //function for uppercase
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.", "success");
    }
    // function for lowercase 
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    //function for senetencecase 
    const handleSentenceClick = (event)=>{
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("Converted to Sentencecase.", "success");
    }

    const handleRemoveExtraSpace = (event)=>{
        let newText = text.trim();
        setText(text);
        setText(newText);
        props.showAlert("Extra spaces have been removed.", "success");
    }
    //function for copy text
    const handleCopyClick = (event)=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied!", "success");
    }
    //function for clear the text
    const handleToClear = (event)=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }


    //STATE (HOOKS)
    const [text, setText] = useState('');
    // setText("New Text");
    return(
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">                
                    <textarea className="form-control" placeholder='Enter text...' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#262a2f':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleSentenceClick}>Convert to Sentencecase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text</button>
            </div>  
            
            <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read.</p>

                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview..."}</p>
            </div> 
        </>
    );
}
