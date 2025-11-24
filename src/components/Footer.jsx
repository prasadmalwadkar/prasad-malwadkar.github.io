import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
    const { personal } = content;

    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h2>Get In Touch</h2>
                    <p>Currently looking for new opportunities. My inbox is always open.</p>

                    <a href={`mailto:${personal.email}`} className="btn btn-primary contact-btn">
                        Say Hello
                    </a>

                    <div className="footer-socials">
                        <a href={personal.github} target="_blank" rel="noopener noreferrer"><Github /></a>
                        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        <a href={`mailto:${personal.email}`}><Mail /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Designed & Built by {personal.name}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
