import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-name">DEVANATHAN T</p>
          <p className="footer-subtitle">Full Stack Developer</p>
        </div>

        <div className="footer-right">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="footer-disclaimer">
            Disclaimer: This site is for professional portfolio purposes only.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
