import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
    return (
        <section id="skills" className="container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <span style={{ color: 'var(--secondary)', letterSpacing: '0.3rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Expertise</span>

                <div id="about" style={{ scrollMarginTop: '100px' }}>
                    <h2 style={{ marginTop: '1rem' }}>About <span style={{ fontWeight: '500' }}>Me</span></h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            padding: '3rem 2rem',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.02)',
                            marginTop: '2rem',
                        }}
                    >
                        <p style={{ color: 'var(--secondary)', lineHeight: '1.8', fontSize: '1.15rem', textAlign: 'justify' }}>
                            Software Developer with hands-on experience in Python and full-stack development, specialising in system integration and API integrations across cloud-hosted environments. Proven ability to design and deploy scalable applications that connect data layers with application logic, with a strong focus on cross-functional collaboration and code quality.
                        </p>
                    </motion.div>
                </div>

                <div id="skills-anchor" style={{ scrollMarginTop: '100px', marginTop: '5rem' }}>
                    <h2 style={{ marginTop: '1rem' }}>Technical <span style={{ fontWeight: '500' }}>Skills</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '5rem' }}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -15, borderColor: 'rgba(255,255,255,0.3)' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '3rem 2rem',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.02)',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                style={{ color: 'white', marginBottom: '2rem' }}
                            >
                                {category.icon}
                            </motion.div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '1.2rem', letterSpacing: '0.05rem' }}>{category.name}</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                {category.skills.join('  •  ')}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
