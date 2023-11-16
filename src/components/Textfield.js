import React, { useState } from "react";
import "./Textfield.css";

export default function Textfield() {
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleBackClick = () => {
    // let removeText = text.trimEnd();
    setText(" ");
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
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
          </div>
        </nav>
      
      <div className='container'>
        <div className='text_body'>
          <textarea
            name=''
            id=''
            cols='50'
            rows='30'
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
            <button onClick={handleBackClick}>Dlete</button>
          </div>
        </div>
      </div>
    </>
  );
}
