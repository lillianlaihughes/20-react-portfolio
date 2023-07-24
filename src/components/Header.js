import React from 'react';
import headShot from '../assets/Lillian-other-headshot.jpg';

const Header = () => {
  return (
    <header class='flex flex-row bg-gradient-to-r from-cyan-200 to-pink-200 justify-center'>
      <img className='w-4 rounded-full' src={headShot} alt='Lillian' />
      <p>Lillian may or may not know what she is doing, tbh.</p>
    </header>
  );
};

export default Header;
