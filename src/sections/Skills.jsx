import React from 'react';
import { content } from '../data/content';
import './Skills.css';

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Languages & Databases</h3>
                        <div className="skill-tags">
                            {skills.languages.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Machine Learning</h3>
                        <div className="skill-tags">
                            {skills.ml.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Libraries & Visualization</h3>
                        <div className="skill-tags">
                            {skills.libraries.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Technologies & Cloud</h3>
                        <div className="skill-tags">
                            {skills.technologies.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
