import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [letters, setLetters] = useState(0);
    const [words, setWords] = useState(0);
    const [time, setTime] = useState(0);

    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
        setLetters(inputText.length);

        const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
        setWords(wordCount);

        const averageTime = wordCount === 0 ? 0 : wordCount * 0.5;
        setTime(averageTime);
    };

    const handleUppercase = () => {
        const uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    };

    const handleLowercase = () => {
        const lowercaseText = text.toLowerCase();
        setText(lowercaseText);
    };

    const handleClearText = () => {
        setText('');
        setLetters(0);
        setWords(0);
        setTime(0);
    };

    return (
        <div className='container my-5'>
            <div className='row'>
                <h1 className={`${props.mode === 'light' ? '' : 'text-white'}`}>Text Analyzer</h1>
            </div>
            <div className='row'>
                <textarea className='form-control' rows="8" value={text} onChange={handleChange}></textarea>
            </div>

            <div className='row mt-3'>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Word Count</h5>
                            <p className="card-text">{words}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Character Count</h5>
                            <p className="card-text">{letters}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Average Time</h5>
                            <p className="card-text">{time} seconds</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3 '>
                <button className='btn btn-primary mx-2 my-2' onClick={handleUppercase}>Uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLowercase}>Lowercase</button>
                <button className='btn btn-danger mx-2 my-2' onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
    );
}
