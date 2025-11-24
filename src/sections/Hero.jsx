import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { personal } = content;

    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="greeting">Hi, I'm</p>
                    <h1 className="name">{personal.name}</h1>
                    <h2 className="title">{personal.title}</h2>
                    <p className="location">{personal.location}</p>

                    <div className="social-links">
                        <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personal.email}`} aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#" className="btn btn-outline">
                            <FileText size={18} style={{ marginRight: '8px' }} />
                            Resume
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
