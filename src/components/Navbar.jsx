import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#philosophy' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <span className="nav-brand">SH</span>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="nav-link"
          onClick={(e) => handleClick(e, link.href)}
        >
          {link.label}
        </a>
      ))}
      <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, '#contact')}>
        Hire Me
      </a>
    </motion.nav>
  );
};

export default Navbar;
