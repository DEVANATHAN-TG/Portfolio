import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="portfolio" className="hero-section">
            {/* Background Image - User can swap this URL */}
            {/* Hero Background Animation */}
            <div className="hero-bg-container">
                <img
                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2039&auto=format&fit=crop"
                    alt="Background"
                    className="hero-bg-animated"
                />
            </div>
            <div className="hero-overlay"></div>

            <div className="hero-content container">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}
                >
                    AI/ML & FULL-STACK DEVELOPER
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '300', marginBottom: '1.5rem', lineHeight: '1' }}
                >
                    DEVANATHAN T
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ fontSize: '1.2rem', color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}
                >
                    Crafting intelligent digital experiences through code and innovative style.
                    Specialized in React, AI/ML, and the art of prompt engineering.
                </motion.p>

            </div>
        </section>
    );
};

export default Hero;
