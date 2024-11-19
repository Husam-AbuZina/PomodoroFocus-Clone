import React from 'react';
import './Box.css';

const Box = () => {
  return (
    <div className="box">
      <div className='btns'>
        <button>Pomodoro</button>
        <button>Short Break</button>
        <button>Long Break</button>
      </div>
      <div className='timer'>
        <h1>25:00</h1>
      </div>
      <div className='start-btn'>
        <button><h1>Start</h1></button>
      </div>
    </div>
  );
}

export default Box;