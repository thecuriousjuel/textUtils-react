import React from 'react'
import { useState } from 'react'

export default function TestForm(props)
{
    const handleUpperClick = () =>
    {
        // console.log('Clicked Upper');
        setText(text.toUpperCase());
    }

    const handleLowerClick = () =>
    {
        // console.log('Clicked Lower');
        setText(text.toLowerCase());
    }

    const handleTitleClick = () =>
    {
        // console.log('Clicked Lower');
        let titleCase = '';
        text.split(' ').forEach((word) =>
        {
            const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
            titleCase += capitalizeWord + ' ';
        });
        setText(titleCase);
    }

    const handleOnChange = (event) =>
    {
        // console.log('Text Change');
        setText(event.target.value)
    }

    const handleClearText = () =>
    {
        setText('');
    }

    const handleCopy = () =>
    {
        let textInput = document.getElementById('box');
        textInput.select();
        navigator.clipboard.writeText(textInput.value);
    }

    const handleRemoveBlank = () =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const numberCountFunction = (stringValue) =>
    {
        let num = 0;
        stringValue.split('').forEach((element) =>
        {
            if (!isNaN(parseFloat(element)))
            {
                num += 1;
            }
        });
        
        return num;
    }

    const [text, setText] = useState('');

    let textLength = text.length;
    let num = text.split(' ').length;
    let minutesToRead = 0.008 * text.split(' ').length;
    let numberCount = numberCountFunction(text);


    return (
        <div className="container">
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8" placeholder='All empty here!'></textarea>
                </div>
                <div className="container">
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-outline-primary mx-2" onClick={handleUpperClick}>{props.upperCase}</button>
                        <button className="btn btn-outline-primary mx-2" onClick={handleLowerClick}>{props.lowerCase}</button>
                        <button className="btn btn-outline-primary mx-2" onClick={handleTitleClick}>{props.titleCase}</button>
                        <button className="btn btn-outline-primary mx-2" onClick={handleClearText}>{props.clear}</button>
                        <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>{props.copy}</button>
                        <button className="btn btn-outline-primary mx-2 my-2" onClick={handleRemoveBlank}>{props.removeBlank}</button>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h3>Summary</h3>
                <li>{num} Words</li>
                <li>{textLength} Characters</li>
                <li>{minutesToRead} Minutes to read</li>
                <li>{numberCount} Numbers</li>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
