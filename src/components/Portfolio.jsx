import React from 'react';
import weather from '/Weather_Dashboard.jpg';
import './styles/portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            
            <h2>Portfolio</h2>
            <div id='portfolio-container'>
            <div className='project-box'>
                <p><a href="https://wshearin3.github.io/Weather-Dashboard/">
                    <img src={weather} alt="Weather Dashboard Screenshot" />
                    </a></p>
                <a href="https://github.com/wshearin3/Weather-Dashboard">Weather Dashboard GitHub Repository</a>
            </div>
            <div>
               
            </div>
            </div>
        </section>
    );
}

export default Portfolio;