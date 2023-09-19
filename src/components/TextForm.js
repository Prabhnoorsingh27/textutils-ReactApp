import React, {useState} from 'react'

// Hooks (useState is a Hook)
// Hooks => A method which helps us to use features of classes in function based component 
// State is being used here

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase() 
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const handleDownClick = ()=>{
        // console.log("Uppercase was clicked " + text)
        let newText1 = text.toLowerCase() 
        setText(newText1)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClear = ()=>{
        let newText2 = '' 
        setText(newText2)
        props.showAlert("Text Cleared!", "success")
    }
    
    // IMP 
    const handleOnChange = (event)=>{
        // console.log("On Change")
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        // console.log("I am copy")
        var text = document.getElementById("myBox")
        text.select() 
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied!", "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed!", "success")
    }
    // ratta maar yeh syntax state ka
    const [text, setText] = useState('Enter Text Here');
    // text = "enter here" // Wrong way to update/change the state
    // setText("hdbhbd") // correct way is to use a function to update/change the state 

    return (
        <>
        <div className='container' style={{backgroundColor: props.mode === 'dark'? '#042743' : 'white', color: props.mode === 'dark'?'white' : '#042743'}}> 
            <h1 style={{color: props.mode === 'dark'?'white' : '#042743',backgroundColor: props.mode === 'dark'? '#042743' : 'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}></textarea> 
                {/* CSS bhi ek object ki tarah likkhi jati hai isliye Js object ki trh treat kiya aur upr ek extra {} lgaya */}
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3"  style={{color: props.mode === 'dark'?'white' : '#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.trim() === '' ? 0 : text.split(" ").length} words and {text.replace(/\s+/g, '').length} characters</p>
            {/* <p>{text.split(" ").length} <b>words</b>, {text.length} <b>characters</b></p> */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter Something In The TextBox Above To Preview Tt Here"}</p>
        </div>
        </>
    )
}
