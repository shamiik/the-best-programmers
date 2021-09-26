import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <h1>The Greatest Programmer</h1>
            <p>There is a conference about World's Greatest Programmer!!</p>
            <h2>Total Budget: <span className='fw-bold'>50 Million</span></h2>
        </div>
    );
};

export default Header;