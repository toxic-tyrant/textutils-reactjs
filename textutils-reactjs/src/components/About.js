import React from 'react'

export default function About(prop) {
  return (
    <div>
      <>
        <div className="container" style={{color: prop.mode==='dark'?'white':'black'}}>
            <h1 className='my-3'>About Us</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black',border: '1px solid'}}>
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black'}}>Discover the TextUtils Web-Application – your essential tool for analyzing text with ease. Count words, Convert your text to uppercase and lowercase, Remove extra spaces from your text and more.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black',border: '1px solid'}}>
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black'}}>This cutting-edge free Web-Application is designed to enhance your daily life, providing you with a seamless and delightful experience like never before.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black', border: '1px solid'}}>
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={{backgroundColor: prop.mode==='light'?'white':'#292e31', color: prop.mode==='dark'?'white':'black'}}>TextUtils works in any web browser such as Chrome, Firefox, Microsoft Edge, Safari etc.</div>
            </div>
        </div>
        </div>
        </div>
        
        
      </>
    </div>
  )
}
