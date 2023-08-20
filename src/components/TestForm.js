import React from 'react'
import { useState } from 'react'

export default function TestForm(props)
{
    const checkForEmptyString = (anyText) =>
    {
        if (anyText === '')
        {
            props.setAlertFunction('Please enter something', 'danger');
            return false
        }
        return true
    }

    const handleOnChange = (event) =>
    {
        // console.log('Text Change');
        setText(event.target.value);
    }

    const handleUpperClick = () =>
    {
        // console.log('Clicked Upper');
        if (checkForEmptyString(text))
        {
            setText(text.toUpperCase());
            props.setAlertFunction('Changed to UpperCase', 'success');
        }

    }

    const handleLowerClick = () =>
    {
        // console.log('Clicked Lower');
        if (checkForEmptyString(text))
        {
            setText(text.toLowerCase());
            props.setAlertFunction('Changed to LowerCase', 'success');
        }
    }

    const handleTitleClick = () =>
    {
        // console.log('Clicked Lower');
        if (checkForEmptyString(text))
        {
            let titleCase = '';
            text.split(' ').forEach((word) =>
            {
                const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
                titleCase += capitalizeWord + ' ';
            });
            setText(titleCase);
            props.setAlertFunction('Changed to TitleCase', 'success');
        }
    }


    const handleClearText = () =>
    {
        if (checkForEmptyString(text))
        {
            setText('');
            props.setAlertFunction('TextBox cleared', 'success');
        }
    }

    const handleCopy = () =>
    {
        if (checkForEmptyString(text))
        {
            let textInput = document.getElementById('box');
            textInput.select();
            navigator.clipboard.writeText(textInput.value);
            props.setAlertFunction('Copied to clipboard', 'success');
        }
    }

    const handleRemoveBlank = () =>
    {
        if (checkForEmptyString(text))
        {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.setAlertFunction('Extra spaces removed', 'success');
        }
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

    if (text === '')
    {
        num = 0;
        minutesToRead = 0;
    }

    return (
        <div className="container">
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode.color} bg-${props.mode.text}`} value={text} onChange={handleOnChange} id="box" rows="8" placeholder='All empty here!'></textarea>
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
                <p>{text || 'Enter Something to preview here!'}</p>
            </div>
        </div>
    )
}
