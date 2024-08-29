import React from 'react';
import './Header.css';

import styled from 'styled-components';

import wonkaLogo from '../../assets/wonkaLogo.png';

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #684fa3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledImg = styled.img`
  width: 140px;
  margin-left: 40px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledImg
        src={wonkaLogo}
        alt='WonkaLogo'
      />
      <div className='register'>
        <button className='register-button'>Register</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
