import './styling/NotFound.css';
import logo from '../images/zach_algo.gif';
import React from 'react';


const NotFound = () => {
    return (
        <div>
            <img className='gif' src={logo} alt="loading..." />
            <div className='ohNo'>Uh oh! The page you are looking for seems to be missing.</div>
        </div>
    )
}

export default NotFound;
