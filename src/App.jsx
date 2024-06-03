import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    
    return (
        <div className="App">
          <Header />
          <AboutMe />
          <Footer />
        </div>
      );
}

export default App;