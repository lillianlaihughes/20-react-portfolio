import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col mx-auto'>
      <div className='flex flex-col justify-center'>
        <h2 className='flex justify-center m-4 text-2xl'>About Me</h2>
        <p className='card max-w-3xl p-4 my-4 glass text-xl text-justify indent-8'>
          I am a web developer based in Atlanta. My interests include music,
          science, justice, animals, shapes, and feelings... just like Lisa
          Simpson. I'm also interested in collaborating on human-centered
          projects that are accessible and inclusive. <br />
          I'm a Full Stack Web Developer (thanks, Georgia Tech!) with a
          particular interest in back end technologies and implementation.
        </p>
      </div>
    </section>
  );
};

export default About;
