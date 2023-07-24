import React from 'react';

const Navigation = ({ selectedSection, setSelectedSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul class=' flex flex-row justify-center gap-6 m-1'>
        {sections.map((section) => (
          <li key={section}>
            <button
              class='btn btn-primary btn-outline'
              onClick={() => setSelectedSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
