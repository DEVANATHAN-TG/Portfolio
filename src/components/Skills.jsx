import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

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
                <h2 style={{ marginTop: '1rem' }}>Technical <span style={{ fontWeight: '500' }}>Skills</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '5rem' }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
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
                                {skill.icon}
                            </motion.div>

                            <h3 style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '1.2rem', letterSpacing: '0.05rem' }}>{skill.name}</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
