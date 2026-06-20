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
                <span className="contact-section-label">Get in Touch</span>
                <h2 style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
                    Let's create something <span style={{ fontWeight: '500' }}>exceptional.</span>
                </h2>

                <div className="contact-layout">

                    {/* Contact Methods */}
                    <div>
                        <p className="contact-methods-label">Connect</p>
                        <div className="contact-icons">

                            <motion.a
                                href={`mailto:${contactInfo.email}`}
                                whileHover={{ y: -5 }}
                                className="contact-link"
                                aria-label="Send email"
                            >
                                <Mail size={28} strokeWidth={1.2} />
                                <span className="contact-link-label">Email</span>
                            </motion.a>

                            <motion.a
                                href={`tel:${contactInfo.phone}`}
                                whileHover={{ y: -5 }}
                                className="contact-link"
                                aria-label="Call phone"
                            >
                                <Phone size={28} strokeWidth={1.2} />
                                <span className="contact-link-label">Call</span>
                            </motion.a>

                            <motion.a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="contact-link"
                                aria-label="Visit LinkedIn profile"
                            >
                                <Linkedin size={28} strokeWidth={1.2} />
                                <span className="contact-link-label">LinkedIn</span>
                            </motion.a>

                            <motion.a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className="contact-link"
                                aria-label="Visit GitHub profile"
                            >
                                <Github size={28} strokeWidth={1.2} />
                                <span className="contact-link-label">GitHub</span>
                            </motion.a>

                        </div>
                    </div>

                    {/* Resume Block */}
                    <div>
                        <p className="contact-resume-label">Resume</p>
                        <motion.a
                            href={contactInfo.resume}
                            download="DEVANATHAN_T_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            className="resume-button"
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
