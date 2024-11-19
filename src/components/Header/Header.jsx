import React from 'react';
import './Header.css';
import check1 from '../../assets/img/check1.png'
import settings from '../../assets/img/settings.png'
import barchart from '../../assets/img/bar-chart.png'
import profile from '../../assets/img/profile.png'

const Header = () => {
  return (
    <header className="header underlined" >
      <nav className='nav'>
        <ul className='ul'>
          <div className='icon-text'>
          <li className='logo'><img src={check1} alt="check" className='logo-img'/><a className='logo-a' href="/">PomodoroFocus</a></li>
          </div>
          <li>
            <button className='button-header'> <img className='logo-img' src={barchart} alt="statistics" /> Report</button>
            </li>
          <li>
           
            <button className='button-header'> <img className='logo-img' src={settings} alt="settings" /> Setting</button>
            </li>
            <li>
              <img src={profile} alt="profile" />
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
