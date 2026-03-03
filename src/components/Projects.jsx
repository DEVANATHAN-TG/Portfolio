import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
    return (
        <section id="projects" className="container" style={{ paddingTop: '100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <span style={{ color: 'var(--secondary)', letterSpacing: '0.3rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Selected Works</span>
                <h2 style={{ marginTop: '1rem' }}>Latest <span style={{ fontWeight: '500' }}>Projects</span></h2>

                <div style={{ marginTop: '4rem' }}>
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="project-item"
                        >
                            <div>
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                            <div className="project-year">
                                {project.year}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
