import React from 'react';
import { Link } from "react-router-dom";
import Calculator from './calculator';
import About from './About';
import ikona_be_fono from './ikona_be_fono.png';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand p-2"><img width="30" src={ ikona_be_fono } alt="Logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex">
                    <div className="nav-item"><Link className = 'nav-link' to="/calculator">Kalkuliatorius</Link></div>
                    <div className="nav-item"><Link className = 'nav-link' to="/About">Apie</Link></div>
                </div>
            </div>
        </nav>
    );
};

export default Header;