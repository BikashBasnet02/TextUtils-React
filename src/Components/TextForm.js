import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was Clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        console.log("LowerCase was Clicked: " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const sentenceCase = (str) => {
        if (!str) return str;
        return str
            .toLowerCase()
            .replace(/(^\s*\w|\s*\w)/g, function(c) {
                return c.toUpperCase();
            });
    };

    const handleScClick = () => {
        console.log("Sentence Case was Clicked: " + text);
        let newText = sentenceCase(text);
        setText(newText);
    };
    const handleCtClick = () => {
        console.log("Cleared Text: " + text);
        let newText = '';
        setText(newText);
    };
    
    

    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value);
    };
    
    const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-danger mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleCtClick}>Clear Text</button>
    <button className="btn btn-danger mx-2" onClick={handleScClick}>Convert To Sentence Case</button>
    </div>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>

    </div>
    </>
  )
}
