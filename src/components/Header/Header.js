import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <a href="#"><img src={logo} alt=""/></a>
        </div>
    );
};

export default Header;