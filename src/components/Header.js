import React from 'react';
import headShot from '../assets/Lillian-other-headshot.jpg';

const Header = () => {
  return (
    <header class='flex flex-row bg-gradient-to-r from-cyan-200 to-pink-200 justify-center'>
      <img className='w-64 rounded-full' src={headShot} alt='Lillian' />
    </header>
  );
};

export default Header;
