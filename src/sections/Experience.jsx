import React from 'react';
import { content } from '../data/content';
import './Experience.css';

const Experience = () => {
    const { experience } = content;

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experience.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <h4 className="exp-company">{exp.company}</h4>
                                    </div>
                                    <span className="exp-date">{exp.date}</span>
                                </div>
                                <ul className="exp-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
