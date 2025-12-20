import React from 'react';
import './Hero.css';
import heroBg from '../assets/images/hero_background.png'; // Will be renamed after generation

const Hero = () => {
    return (
        <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.6)), url(${heroBg})` }}>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Connecting Talent with <span className="highlight">Opportunity</span></h1>
                    <p>Abhishree Workforce Corporate Services is your trusted partner for Blue Collar, Grey Collar, and BPO staffing solutions across PAN India.</p>
                    <div className="hero-buttons">
                        <a href="https://forms.gle/8brDtCxUt5X4r4Ux9" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">I am a Candidate</a>
                        <a href="https://forms.gle/aDyqLPg3SCWPTmGN8" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">I am an Employer</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
