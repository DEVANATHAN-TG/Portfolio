import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleProject = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

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
                    {projects.map((project, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`project-item-wrapper ${isExpanded ? 'project-item-wrapper--expanded' : ''}`}
                            >
                                {/* Clickable Header Row */}
                                <div
                                    className="project-item"
                                    onClick={() => toggleProject(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleProject(index); }}
                                >
                                    <div>
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>
                                    <div className="project-meta">
                                        <span className="project-year">{project.year}</span>
                                        <motion.span
                                            className="project-chevron"
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={22} />
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Expandable Details Panel */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            className="project-details"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        >
                                            <div className="project-details-inner">
                                                <p className="project-description">{project.description}</p>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-github-btn"
                                                >
                                                    <ExternalLink size={16} />
                                                    View on GitHub
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
