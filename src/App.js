import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    const [currentSection, setCurrentSection] = useState('about');

    const renderSection = () => {
        switch (currentSection) {
            case 'about':
                return <AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    };
}