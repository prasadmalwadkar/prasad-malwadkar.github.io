import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { content } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <div className="project-links">
                                    {/* Placeholder links as they are not in resume */}
                                    <a href="#" aria-label="GitHub Repo"><Github size={20} /></a>
                                    <a href="#" aria-label="Live Demo"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <p className="project-tech">{project.tech}</p>

                            <ul className="project-description">
                                {project.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
