import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Download } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="container" style={{ paddingTop: '100px', paddingBottom: '0' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span style={{ color: 'var(--secondary)', letterSpacing: '0.3rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Get in Touch</span>
                <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
                    Let's create something <span style={{ fontWeight: '500' }}>exceptional.</span>
                </h2>

                <div style={{ marginTop: '5rem', display: 'flex', flexWrap: 'wrap', gap: '5rem', marginBottom: '8rem' }}>

                    {/* Contact Methods */}
                    <div>
                        <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.2rem' }}>Connect</p>
                        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>

                            <motion.a
                                href={`mailto:${contactInfo.email}`}
                                whileHover={{ y: -5 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', color: 'var(--text)', textDecoration: 'none' }}
                            >
                                <Mail size={28} strokeWidth={1.2} />
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: 'var(--secondary)' }}>Email</span>
                            </motion.a>

                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                whileHover={{ y: -5 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', color: 'var(--text)', textDecoration: 'none' }}
                            >
                                <Phone size={28} strokeWidth={1.2} />
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: 'var(--secondary)' }}>Call</span>
                            </motion.a>

                            <motion.a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', color: 'var(--text)', textDecoration: 'none' }}
                            >
                                <Linkedin size={28} strokeWidth={1.2} />
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: 'var(--secondary)' }}>LinkedIn</span>
                            </motion.a>

                            <motion.a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', color: 'var(--text)', textDecoration: 'none' }}
                            >
                                <Github size={28} strokeWidth={1.2} />
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: 'var(--secondary)' }}>GitHub</span>
                            </motion.a>

                        </div>
                    </div>

                    {/* Resume Block */}
                    <div>
                        <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '0.2rem' }}>Resume</p>
                        <motion.a
                            href={contactInfo.resume}
                            download="DEVANATHAN_T_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.2rem 2.5rem',
                                border: '1px solid var(--border)',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15rem',
                                background: 'rgba(255,255,255,0.03)',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            <Download size={18} /> Download CV
                        </motion.a>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
