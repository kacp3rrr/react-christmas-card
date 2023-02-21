import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Generator.css';

const Generator: React.FC = () => {
    const [link, setLink] = useState('');
    const [name, setName] = useState(''); //In place to allow visit link button to work
    const [err, setErr] = useState('');

    const handleChange = (recipient: string) => {
        if (recipient.length > 15) {
            return setErr('Error: Name cannot be greater than 15 characters')
        }
        recipient = encodeURIComponent(recipient); //Percent encodes string into valid url param 
        setName(recipient); 
        if (recipient === '') {
            setLink('');
        } else {
            setLink(`https://https://christmascardgenerator.netlify.app/name/${recipient}`);
        }
        setErr('');
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
    }
   
    return (
        <div className="gen">
        <h1>Virtual Christmas Letter Generator</h1>
        <h3>Input the name of the person you want to send a christmas card, and a link will be generated that links to the card. Simply copy the link, and share it with the person of interest. That's all!</h3>
        <input
            id="name"
            type="text"
            placeholder="Enter Recipient's Name"
            onChange={(e) => handleChange(e.target.value)}
        ></input>
        <h4>{ link }</h4>
        <div className="buttonWrapper">
            <button
                className="clipboard"
                type="button"
                onClick={() => copyToClipboard()}
            >Copy Link To Clipboard</button>
            <Link to={`/name/${name}`}>
            <button
               className="visit" 
               type="button"
            >Preview Christmas Card</button>
            </Link>
        </div>
        <h3>{ err }</h3>
        </div> 
    )
};

export default Generator;
