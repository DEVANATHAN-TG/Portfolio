import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '1.2rem', fontWeight: '600', letterSpacing: '0.2rem', textTransform: 'uppercase' }}
      >
        DEVANATHAN T
      </motion.div>
      <nav className="nav-links">
        {['Portfolio', 'Skills', 'Projects', 'Contact'].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
