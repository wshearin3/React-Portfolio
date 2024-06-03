import React from 'react';
import headshot from '/Headshot.jpg';
import styles from './styles/header.css';

function Header () {
    return ( 
    <section className='Header'>
    <h1>Trey Shearin</h1>
    <div>
        <img src={headshot} alt="Trey Headshot"/>
    </div>
    </section>
);
}

export default Header;