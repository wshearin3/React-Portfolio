import React from 'react';

function Header({ currentSection, setCurrentSection }) {
    return (
      <header className="header">
        <h1>Trey Shearin</h1>
        <nav>
          <ul>
            <li className={currentSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => setCurrentSection('about')}>About Me</a>
            </li>
            <li className={currentSection === 'portfolio' ? 'active' : ''}>
              <a href="#portfolio" onClick={() => setCurrentSection('portfolio')}>Portfolio</a>
            </li>
            <li className={currentSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => setCurrentSection('contact')}>Contact</a>
            </li>
            <li className={currentSection === 'resume' ? 'active' : ''}>
              <a href="#resume" onClick={() => setCurrentSection('resume')}>Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;