import React from 'react';
import weather from '/Weather_Dashboard.jpg';
import scheduler from '/Work_Day_Scheduler.jpg';
import quiz from '/JavaScript_Quiz.jpg';
import generator from '/Password_Generator.png';
import midwest from '/Midwest_Morning.jpg';
import warhammer from '/Warhammer_401k.jpg';
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
            <div className='project-box'>
                <p><a href="https://wshearin3.github.io/work-day-scheduler/">
                    <img src={scheduler} alt="Scheduler Screenshot" />
                    </a></p>
                <a href="https://github.com/wshearin3/work-day-scheduler">Work Day Scheduler GitHub Repository</a>
            </div>
            <div className='project-box'>
                <p><a href="https://wshearin3.github.io/JS-Quiz/">
                    <img src={quiz} alt="JS Quiz Screenshot" />
                    </a></p>
                <a href="https://github.com/wshearin3/JS-Quiz">JavaScript Quiz GitHub Repository</a>
            </div>
            <div className='project-box'>
                <p><a href="https://github.com/wshearin3/Password-Generator">
                    <img src={generator} alt="Password Generator Screenshot" />
                    </a></p>
                <a href="https://github.com/wshearin3/Password-Generator">Password Generator GitHub Repository</a>
            </div>
            <div className='project-box'>
                <p><a href="https://no-avitar.github.io/MidWest-Morning/">
                    <img src={midwest} alt="Midwest Morning Screenshot" />
                    </a></p>
                <a href="https://github.com/No-Avitar/MidWest-Morning">Midwest Morning GitHub Repository</a>
            </div>
            <div className='project-box'>
                <p><a href="https://warhammer401k-0ea44bf0c442.herokuapp.com/">
                    <img src={warhammer} alt="Warhammer 401k Screenshot" />
                    </a></p>
                <a href="https://github.com/AHuss13/Warhammer_401K">WarHammer 401k GitHub Repository</a>
            </div>
            </div>
        </section>
    );
}

export default Portfolio;