import React, { useState } from 'react';
import logo from "../img/logo.svg";
import arrow from "../img/icon-arrow-down.svg";
import "../css/header.scss";
import hamburger from "../imgMobile/icon-hamburger.svg";
import close from "../imgMobile/icon-close.svg";

const Header = () => 
{
    const [show, setShow] = useState(false);

    return (
        <section className="home">
            <header className={show ? "show" : ""}>
                <img className="logo" src={logo} alt="logo" />
                <img onClick={() => setShow(!show)} className="hamburger" src={hamburger} alt="hamburger" />
                <img  onClick={() => setShow(!show)} className="close" src={close} alt="close" />
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><button>CONTACT</button></li>
                    </ul>
                </nav>
            </header>
            <h1>we are creatives</h1>
            <img className="arrow" src={arrow} alt="arrow_down" />
        </section>
    )
}

export default Header
