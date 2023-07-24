import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col mx-auto'>
      <h2 className='flex justify-center m-4 text-2xl'>Contact</h2>
      <div className='card w-96 glass p-4 my-4'>
        <p className='pb-4 indent-8 text-xl text-justify'>
          Thank you for your interest in little ol' moi! If you would like to
          contact me, please get in touch via LinkedIn, GitHub, or email. I look
          foward to hearing from you!
        </p>
        <ul className='flex flex-row justify-center gap-4'>
          <li>
            <button className='btn btn-primary'>
              <a href='https://www.linkedin.com/in/lillianlaihughes/'>
                LinkedIn
              </a>
            </button>
          </li>
          <li>
            <button className='btn btn-secondary'>
              <a href='https://github.com/lillianlaihughes'>GitHub</a>
            </button>
          </li>
          <li>
            <button className='btn btn-accent'>
              <a href='mailto:lillianlaihughes+okeydokey@gmail.com'>Email</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
