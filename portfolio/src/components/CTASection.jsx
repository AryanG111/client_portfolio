import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'swapnilharamkar.work@gmail.com',
    href: 'mailto:swapnilharamkar.work@gmail.com',
    color: 'var(--accent-yellow)',
  },
  {
    icon: <Phone size={22} />,
    label: 'WhatsApp',
    value: '+91 7499687349',
    href: 'https://wa.me/917499687349?text=Hi%20Swapnil!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.',
    color: '#25D366',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'Swapnil Haramkar',
    href: 'https://www.linkedin.com/in/swapnil-haramkar-ab143b316',
    color: '#0A66C2',
  },
  {
    icon: <Instagram size={22} />,
    label: 'Instagram',
    value: '@swapnil_haramkar',
    href: 'https://instagram.com/swapnil_haramkar',
    color: 'var(--accent-pink)',
  },
];

const CTASection = () => {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '8rem 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, var(--bg-color) 0%, rgba(253, 224, 71, 0.03) 50%, var(--bg-color) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(253, 224, 71, 0.06) 0%, transparent 60%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Let's Work Together</span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-2px',
            marginBottom: '1.5rem',
          }}>
            Let's grow your <span className="gradient-text">brand together</span>
          </h2>
          <p className="text-body" style={{ maxWidth: '550px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Ready to turn your social media into a growth engine?
            Let's talk strategy, content, and results.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginBottom: '4rem' }}
        >
          <a
            href="mailto:swapnilharamkar.work@gmail.com"
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '1.1rem 3rem' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={20} /> Get In Touch
            </span>
          </a>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex', gap: '1rem', justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                minWidth: '220px',
              }}
            >
              <div style={{
                width: '42px', height: '42px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: link.color, flexShrink: 0,
              }}>
                {link.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{link.label}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{link.value}</div>
              </div>
              <ArrowUpRight size={14} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2026 Swapnil Haramkar — Digital Marketing Strategist & Content Creator
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
