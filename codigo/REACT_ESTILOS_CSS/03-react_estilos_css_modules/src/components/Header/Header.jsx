import React from 'react';

import styles from './Header.module.css';

import wonkaLogo from '../../assets/wonkaLogo.png';

const Header = () => {

  return (
    <header className={styles.header}>
      <img
        src={wonkaLogo}
        alt='WonkaLogo'
        className={styles.headerImg}
      />
      <div className={styles.register}>
        <button className={styles.registerButton}>Register</button>
      </div>
    </header>
  );
};

export default Header;
