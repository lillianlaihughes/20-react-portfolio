import React, { useState } from 'react';
// import Resume from --> LIL TODO: Finish resume with career services and update this!
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import './index.css';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('About Me');

  return (
    <div className='App'>
      <Header />
      <Navigation
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <main className='flex'>
        {selectedSection === 'About Me' && <About />}
        {selectedSection === 'Projects' && <Projects />}
        {selectedSection === 'Contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
