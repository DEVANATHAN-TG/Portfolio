import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const educationData = [
    {
        level: 'PG',
        degree: 'M.Sc Computer Science',
        year: '2024 – 2026',
        college: 'Pondicherry University',
        region: 'Puducherry, India',
    },
    {
        level: 'UG',
        degree: 'BCA – Bachelor of Computer Application',
        year: '2021 – 2024',
        college: 'Saradha Gangadharan College',
        region: 'Puducherry, India',
    },
];

const Skills = () => {
    const [eduOpen, setEduOpen] = useState(false);

    return (
        <section id="skills" className="container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <span className="contact-section-label">Expertise</span>

                <div id="about" style={{ scrollMarginTop: '100px' }}>
                    <h2 style={{ marginTop: '1rem' }}>About <span style={{ fontWeight: '500' }}>Me</span></h2>
                    <motion.div
                        className="about-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="about-text">
                            Software Developer with hands-on experience in Python and full-stack development, specialising in system integration and API integrations across cloud-hosted environments. Proven ability to design and deploy scalable applications that connect data layers with application logic, with a strong focus on cross-functional collaboration and code quality.
                        </p>
                    </motion.div>
                </div>

                {/* ── Education Section ── */}
                <motion.div
                    className="education-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="education-header"
                        onClick={() => setEduOpen(prev => !prev)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setEduOpen(prev => !prev); }}
                    >
                        <div className="education-header-left">
                            <GraduationCap size={22} />
                            <span>Education</span>
                        </div>
                        <motion.span
                            className="education-chevron"
                            animate={{ rotate: eduOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} />
                        </motion.span>
                    </div>

                    <AnimatePresence>
                        {eduOpen && (
                            <motion.div
                                className="education-body"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <div className="education-body-inner">
                                    {educationData.map((edu, index) => (
                                        <div key={edu.level} className="education-entry">
                                            <div className="education-left">
                                                <span className="education-degree">{edu.degree}</span>
                                                <span className="education-year">{edu.year}</span>
                                            </div>
                                            <div className="education-right">
                                                <span className="education-college">{edu.college}</span>
                                                <span className="education-region">{edu.region}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div id="skills-anchor" style={{ scrollMarginTop: '100px', marginTop: '5rem' }}>
                    <h2 style={{ marginTop: '1rem' }}>Technical <span style={{ fontWeight: '500' }}>Skills</span></h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            className="skill-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -15, borderColor: 'rgba(255,255,255,0.3)' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="skill-card-icon"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            >
                                {category.icon}
                            </motion.div>

                            <h3 className="skill-card-title">{category.name}</h3>
                            <div className="skill-card-list">
                                {category.skills.map((skill) => (
                                    <span key={skill.name} className="skill-tag">
                                        <span className="skill-tag-icon">{skill.icon}</span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
