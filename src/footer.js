import React from 'react';
import { Link } from "react-router-dom";
import Calculator from './calculator';
import About from './About';
import ikona_be_fono from './ikona_be_fono.png';

const Footer = () => {
    return (
        <div className = "d-flex p-2 justify-content-end fixed-bottom">
            Mykolas Baranauskas, 2022 08
        </div>
    );
};

export default Footer;