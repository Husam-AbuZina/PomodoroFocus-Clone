import React, { useState } from 'react';
import './Box.css';

const Box = ({ changeBackground }) => {
  const [activeButton, setActiveButton] = useState("");
  const [time, setTime] = useState(25 * 60);
  const [bgColor, setBgColor] = useState("#fff");

  const handleClick = (button) => {
    setActiveButton(button);
  }

  const modes = {
    pomodoro: { time: 25 * 60, color: "#ff6347" }, // Tomato color for Pomodoro
    shortBreak: { time: 5 * 60, color: "#87ceeb" }, // Sky blue for Short Break
    longBreak: { time: 15 * 60, color: "#6a5acd" }, // Slate blue for Long Break
  };


  const handleModeChange = (mode) => {
    setTime(modes[mode].time);
    setBgColor(modes[mode].color);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };




  return (
    <div className="box">
      <div className='btns'>
        <button 
        className={activeButton === "pomodoro" ? "active" : ""}
        onClick={() => {
          handleClick("pomodoro");
          handleModeChange("pomodoro");
          changeBackground("#ff6347");
        }}
        >Pomodoro</button>
        <button
        className={activeButton === "shortBreak" ? "active": ""}
        onClick={() => {
          handleClick("shortBreak");
          handleModeChange("shortBreak");
          changeBackground("#87ceeb");
        }}
        >Short Break</button>
        <button
        className={activeButton === "longBreak" ? "active": ""}
        onClick={() => {
          handleClick("longBreak");
          handleModeChange("longBreak");
          changeBackground("#6a5acd");
        }}
        >Long Break</button>
      </div>
      <div className='timer'>
        {/* <h1>25:00</h1> */}
        <div className="timer">{formatTime(time)}</div>
      </div>
      <div className='start-btn'>
        <button className='start-btn-btn'><h1>Start</h1></button>
      </div>
    </div>
  );
}

export default Box;