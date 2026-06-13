import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{ background: 'transparent' }}>
            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}
                >
                    FULL-STACK DEVELOPER
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: '300', marginBottom: '1.5rem', lineHeight: '1', whiteSpace: 'nowrap' }}
                >
                    DEVANATHAN T
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.2rem', marginBottom: '1rem', fontSize: '0.9rem' }}
                >
                    Crafting intelligent digital experiences through code and innovative style.
                    Specialized in Python, React, and the art of prompt engineering.
                </motion.p>

            </div>
        </section>
    );
};

export default Hero;

