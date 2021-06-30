import React from 'react';
import "../css/contact.scss";
import milk from "../img/image-gallery-milkbottles.jpg";
import orange from "../img/image-gallery-orange.jpg";
import cone from "../img/image-gallery-cone.jpg";
import sugar from "../img/image-gallery-sugarcubes.jpg";
import logo from "../img/logo_footer.svg";
import facebook from "../img/icon-facebook.svg";
import instagram from "../img/icon-instagram.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import milkM from "../imgMobile/image-gallery-milkbottles.jpg";
import orangeM from "../imgMobile/image-gallery-orange.jpg";
import coneM from "../imgMobile/image-gallery-cone.jpg";
import sugarM from "../imgMobile/image-gallery-sugar-cubes.jpg";

const Contact = () => 
{
    return (
        <section className="contact">
            <div className="grid_contact">
                <img src={milk} alt="milk" />
                <img src={orange} alt="orange" />
                <img src={cone} alt="cone" />
                <img src={sugar} alt="sugar" />
            </div>
            <div className="grid_contact_mobile">
                <img src={milkM} alt="milk" />
                <img src={orangeM} alt="orange" />
                <img src={coneM} alt="cone" />
                <img src={sugarM} alt="sugar" />
            </div>
            <footer>
                <img className="logo" src={logo} alt="logo" />
                <ul className="ul_contact">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                <div className="social_media">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                </div>
            </footer>
        </section>
    )
}

export default Contact
