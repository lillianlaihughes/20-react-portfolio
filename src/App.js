import React, { useState } from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import './index.css';


const App = () => {

  const [selectedSection, setSelectedSection] = useState('About Me');


  return (
    <div className="App">
      <Header />
      <Navigation selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <main className='flex'>
        {selectedSection === 'About Me' && <AboutMe />}
        {selectedSection === 'Portfolio' && <Portfolio />}
        {selectedSection === 'Contact' && <Contact />}
        {selectedSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;