import React from 'react';
import headshot from '/Headshot.jpg';
import './styles/aboutme.css';

function AboutMe() {
    return (
        <section className='about-me'>
            
            <h2>About Me</h2>
            <div id='top-bar'>
            <div>
                <img src={headshot} alt="Trey Headshot" />
            </div>
            <div>
                <p>
                    I graduated from Clemson University with a B.S. in Biological Sciences. I have sales experience working primarily in the contract research space. I am in the process of a career pivot, and currently enrolled in a full-stack web development bootcamp at the University of Minnesota. I created this webpage to showcase some of my work. In my freetime, I enjoy working with my hands, playing disc golf, and visiting art museums.
                </p>
            </div>
            </div>
        </section>
    );
}

export default AboutMe;