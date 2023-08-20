import React from 'react'

export default function Alert(props)
{
    const capitalize = (text) => {
        let newText = text.toLowerCase();
        return newText.charAt(0).toUpperCase() + newText.slice(1);
    }
    return (
        props.alertMessage && 
        <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertMessage.type)}</strong> : {props.alertMessage.message}
        </div>
    )
}
