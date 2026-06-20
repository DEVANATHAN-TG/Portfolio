import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{ background: 'transparent' }}>
            <div className="hero-content">
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    FULL-STACK DEVELOPER
                </motion.p>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    DEVANATHAN T
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Crafting intelligent digital experiences through code and innovative style.
                    Specialized in Python, React, and the art of prompt .
                </motion.p>

                <motion.a
                    href={contactInfo.resume}
                    download="DEVANATHAN_T_Resume.pdf"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="resume-button"
                    style={{ marginTop: '2rem' }}
                >
                    <Download size={18} /> Download CV
                </motion.a>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{
                        marginTop: '1.5rem',
                        marginBottom: '0',
                        maxWidth: '500px',
                        textAlign: 'center'
                    }}
                >
                    Click the button to download my resume.
                </motion.p>

            </div>
        </section>
    );
};

export default Hero;
