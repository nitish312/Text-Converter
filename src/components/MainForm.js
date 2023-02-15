import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function MainForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button is clicked" + text)
        let upperText = text.toUpperCase()
        setText(upperText)
    }

    const handleLoClick = () => {
        // console.log("lowercase button is clicked")
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }

    const handleFirstUpClick = () => {
        
        let mySentence = text;
        
        let capitalize = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        setText(capitalize)
    }

    const handleClearClick = () => {
        
        let clearText = ""
        setText(clearText)
    }

    const handleInverseClick = () => {
        
        let clearText = ""
        setText(clearText)
    }

    const handleCopy = () => {
        
        let copiedText = document.getElementById("exampleFormControlTextarea1")
        copiedText.select()
        copiedText.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(copiedText.value);
    }

    const handleExtraSpace = () => {
        
        let extraSpacesRemoved = text.split(/[ ]+/)
        setText(extraSpacesRemoved.join(" "))
    }
    

    const handleOnChange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState("")
    // setText("new text")

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button type="button" className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleUpClick}>UpperCase</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleLoClick}>LowerCase</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleFirstUpClick}>Capitalize</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleInverseClick}>Inverse</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleCopy}>Copy</button>

        <button type="button" className="btn btn-success mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>

        {/* <div className="mb-3 my-3">
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="7" value={text} onChange={handleOnChange}></textarea>
        </div> */}
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in above box to preview here"}</p>
    </div>
    </>
  )
}

MainForm.propTypes = {
    heading : PropTypes.string.isRequired
}

MainForm.defaultProps = {
    heading : "heading likhle"
}