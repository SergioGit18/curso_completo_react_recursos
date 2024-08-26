import React from 'react';
import './Header.css';

import wonkaLogo from '../../assets/wonkaLogo.png';

const Header = () => {
  return (
    <header className='header' style={{backgroundColor:'red'}}>
      <img
        src={wonkaLogo}
        alt='WonkaLogo'
      />
      <div className='register'>
        <button className='register-button'>Register</button>
      </div>
    </header>
  );
};

export default Header;
