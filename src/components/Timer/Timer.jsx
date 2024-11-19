import React, { useState, useEffect } from 'react';
import './Timer.css'; // Make sure to include the CSS for styling

const Timer = () => {
    // State for timer and button clicks
    const [timer, setTimer] = useState(0);
    const [clicks, setClicks] = useState(0);

    // Update the timer every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    // Button click handler
    const handleButtonClick = () => {
        setClicks((prev) => prev + 1);
    };

    return (
        <div className="timer-container">
            <div className="buttons-container">
                <button onClick={handleButtonClick}>Button 1</button>
                <button onClick={handleButtonClick}>Button 2</button>
                <button onClick={handleButtonClick}>Button 3</button>
            </div>
            <div className="timer">
                <h2>Timer: {timer}s</h2>
            </div>
            <div className="button-clicks">
                <p>Button Clicks: {clicks}</p>
            </div>
        </div>
    );
};

export default Timer;
