import React from 'react';
import logoLinkedIn from '../assets/logo-linkedin.png';
import logoGitHub from '../assets/logo-github.png';

const Footer = () => {
  return (
    <footer>
      <div className=' flex flex-row justify-center bg-gradient-to-r from-cyan-200 to-pink-200'>
        <a href='https://www.linkedin.com/in/lillianlaihughes'>
          <img
            className='w-32 rounded'
            src={logoLinkedIn}
            alt='LinkedIn Logo'
          />
        </a>
        <a href='https://github.com/lillianlaihughes'>
          <img className='w-32 rounded' src={logoGitHub} alt='GitHub Logo' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
