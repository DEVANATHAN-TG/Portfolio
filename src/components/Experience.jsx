import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, Building2, ScrollText } from 'lucide-react';
import { experiences, certifications } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="container" style={{ paddingTop: '100px', background: 'transparent' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <span className="contact-section-label">Career Journey</span>
                <h2 style={{ marginTop: '1rem' }}>
                    Work <span style={{ fontWeight: '500' }}>Experience</span>
                </h2>

                {/* Experience Cards / Timeline */}
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${exp.role}`}
                            className="experience-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {/* Card Header */}
                            <div className="exp-card-header">
                                <div className="exp-role-group">
                                    <div className="exp-role-title-row">
                                        <div className="exp-icon-box">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h3 className="exp-role-title">{exp.role}</h3>
                                            <div className="exp-company-row">
                                                <Building2 size={16} className="exp-inline-icon" />
                                                <span className="exp-company-name">{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="exp-meta-badges">
                                    <span className="exp-type-badge">{exp.badge}</span>
                                    {exp.grade && (
                                        <span className="exp-grade-badge">
                                            <Award size={14} /> {exp.grade}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Meta Info: Period & Location */}
                            <div className="exp-meta-info">
                                <div className="exp-meta-item">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <div className="exp-meta-item">
                                    <MapPin size={14} />
                                    <span>
                                        {exp.workplace && <strong className="exp-workplace-label">{exp.workplace}</strong>}
                                        {exp.workplace && <span className="exp-meta-sep"> • </span>}
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Summary description */}
                            <p className="exp-summary-text">{exp.description}</p>

                            {/* Key Highlights */}
                            <div className="exp-highlights-box">
                                <h4 className="exp-highlights-title">Key Contributions & Achievements:</h4>
                                <ul className="exp-highlights-list">
                                    {exp.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="exp-highlight-item">
                                            <CheckCircle2 size={16} className="exp-highlight-icon" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies Used */}
                            <div className="exp-tech-tags">
                                {exp.technologies.map((tech) => (
                                    <span key={tech} className="exp-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Row */}
                {certifications && certifications.length > 0 && (
                    <motion.div
                        className="certifications-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="certifications-header">
                            <div className="certifications-title-wrap">
                                <ScrollText size={22} className="cert-icon" />
                                <h3>Professional Certifications</h3>
                            </div>
                            <span className="cert-badge">Verified Credentials</span>
                        </div>

                        <div className="certifications-grid">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={cert.title}
                                    className="cert-card"
                                    whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.3)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="cert-issuer-badge">
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <h4 className="cert-card-title">{cert.title}</h4>
                                    <p className="cert-card-cat">{cert.category}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Experience;
