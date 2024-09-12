import React from 'react';

import wonkaLogo from '../../assets/wonkaLogo.png';

const Header = () => {
  return (
    <header className='w-full p-5 bg-wonkaPurple dark:bg-gray-800 flex flex-row justify-between items-center shadow-md'>
      <img
        src={wonkaLogo}
        alt='WonkaLogo'
        className='w-[140px] sm:w-[50px] md:w-[100px] ml-10'
      />
      <div>
        <button className='bg-white text-[#5c5a72] border border-[#e3d7ff] 
        px-5 py-2.5 rounded-[10px] cursor-pointer ml-10 transition-all ease-in 
        duration-500 hover:rounded-[25px] hover:border-black'>
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
