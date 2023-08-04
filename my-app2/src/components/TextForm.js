import React,{useState} from 'react'

export default function TextForm(prop) {
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText);
    prop.showAlert("Converted to uppercase!", "success");
      
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText);
    prop.showAlert("Converted to lowercase!", "success");
}

  const handleReverse = ()=>{
    let newText = text.split('').reverse().join('');
    setText(newText);
    prop.showAlert("Text has been reversed!", "success");
  }

  const handleCopyClick = ()=>{
    console.log("copy was clicked");
    var text = document.getElementById('text');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Text was copied","Success");
  }
  const handleClearClick = ()=>{
    console.log("clear");
    document.getElementById("text").value='';
    prop.showAlert("Text was cleared","Success")

  }

  const handleExtraSpaces = ()=>{
    console.log("remove extra spaces");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container my-3" style={{color: prop.mode==='dark'?'white':'black'}}>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <label htmlFor="text" className="form-label"></label>
        <textarea className="form-control" id="text" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor: prop.mode==='light'?'white':'#212529', color: prop.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <div className="container" >
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Upper Case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Lower Case</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleReverse}>Reverse Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color: prop.mode==='dark'?'white':'black'}} >
      <h2>Text Summary</h2>
      <p>{text.length} Characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
    </div>
    </>
  )
}

