import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Basic smooth scroll implementation for all browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer-container">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-name">DEVANATHAN T</p>
            <p className="footer-subtitle">AI/ML Engineer & Developer</p>
          </div>

          <div className="footer-right">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="footer-disclaimer">
              Disclaimer: This site is for professional portfolio purposes only. Images are from Unsplash.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
