import React from 'react';
import { content } from '../data/content';
import './Education.css';

const Education = () => {
    const { education, certifications, publications } = content;

    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="edu-grid">
                    <div className="edu-column">
                        <h2 className="section-title">Education</h2>
                        <div className="edu-list">
                            {education.map((edu, index) => (
                                <div key={index} className="edu-card">
                                    <div className="edu-header">
                                        <h3>{edu.school}</h3>
                                        <span>{edu.date}</span>
                                    </div>
                                    <h4>{edu.degree}</h4>
                                    <p>Relevant Coursework: {edu.coursework}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="edu-column">
                        <h2 className="section-title">Certifications & Publications</h2>

                        <div className="cert-list">
                            <h3>Certifications</h3>
                            <ul>
                                {certifications.map((cert, index) => (
                                    <li key={index}>{cert}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="pub-list">
                            <h3>Publications</h3>
                            <ul>
                                {publications.map((pub, index) => (
                                    <li key={index}>{pub}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
