import React from 'react';
import "../css/about.scss";
import egg from "../img/image-transform.jpg";
import glass from "../img/image-stand-out.jpg";

const About = () => 
{
    return (
        <section className="about">
            <div className="grid_about">
                <div className="about1">
                    <h2>Transform your brand</h2>
                    <p>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling 
                    visuals that do most of the marketing for you.
                    </p>
                    <button className="btn yellow_btn">learn more</button>
                </div>
                <img className="egg" src={egg} alt="egg" />
                <img src={glass} alt="glass" />
                <div className="about1">
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, 
                    videographers, and copywriters, we'll build and extend your brand in digital places.</p>
                    <button className="btn pink_btn">learn more</button>
                </div>
                <div className="cherry about_fruit">
                    <h3>graphic desing</h3>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand 
                    message and captures potential clients' attention.
                    </p>
                </div>
                <div className="orange about_fruit">
                    <h3>photography</h3>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that 
                    improve your business image.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
