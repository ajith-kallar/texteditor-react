import React, { useState } from "react";

import "./Textfield.css";

export default function Textfield() {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };


    const handleUpclick = () => {
   if(text){
     let newText = text.toUpperCase();
     setText(newText);
   }
  };
  
  const handleCopy = () => {
    var textElement = document.getElementById("text");

    if (textElement) {
      var range = document.createRange();
      range.selectNode(textElement);

      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand("copy");
        console.log("Text copied to clipboard");
      } catch (err) {
        console.error("Unable to copy text to clipboard", err);
      }

      // Clear the selection
      selection.removeAllRanges();
    } else {
      console.error("Element with ID 'text' not found");
    }
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  const handleBackClick = () => {
    setText(" ");
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
  };
  const themeChange = () => {
    // setTheme(!theme);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };


  const [text, setText] = useState();

  return (
    <>
      <nav>
        <div className='logo'>
          <h1>Text Editor </h1>
        </div>
        <div>
          <label className='switch'>
            <input type='checkbox' onClick={themeChange} />
            <span className='slider'></span>
          </label>
        </div>
      </nav>

      <div className='container'>
        <div className='text_body'>
          <textarea
            name=''
            id='text'
            cols='40'
            rows='23'
            value={text}
            onChange={handleOnchange}
            placeholder=' Enter Text Here '
          ></textarea>
        </div>

        <div className='options_body'>
          <div className='preview_box'>
            <p>{text}</p>
          </div>
          <div className='button_filed'>
            <button onClick={handleUpclick}>To Upper Case</button>
            <button onClick={handleDownClick}>To Lower case</button>
            <button onClick={handleExtraSpace}>Remove Extra space</button>
          </div>
          <div className='button_filed'>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={reverseText}>Reverse</button>
            <button onClick={handleBackClick}>Dlete</button>
          </div>
        </div>
      </div>
    </>
  );
}
