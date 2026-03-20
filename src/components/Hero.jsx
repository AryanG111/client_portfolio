import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, TrendingUp, Eye } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const stats = [
    { icon: <Eye size={18} />, value: '3M+', label: 'Organic Reach' },
    { icon: <TrendingUp size={18} />, value: '150%', label: 'Engagement Growth' },
    { icon: <Sparkles size={18} />, value: '50+', label: 'Campaigns' },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '6rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ y: yText, opacity: opacityFade }}
      >
        <span className="tag tag-yellow" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <Sparkles size={14} /> Digital Marketing Strategist
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ textAlign: 'center', maxWidth: '900px', y: yText, opacity: opacityFade }}
      >
        <h1 style={{
          fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-2px',
          marginBottom: '1.5rem',
        }}>
          I help brands grow with{' '}
          <span className="gradient-text">high-performing content</span>{' '}
          & data-driven strategy
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '620px',
          margin: '0 auto 2.5rem',
        }}>
          From scroll-stopping reels to full social media strategies — I turn
          followers into fans and attention into revenue.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap', justifyContent: 'center', opacity: opacityFade }}
      >
        <button className="btn-primary" onClick={() => handleScroll('#case-studies')}>
          <span>View My Work</span>
        </button>
        <button className="btn-outline" onClick={() => handleScroll('#contact')}>
          <span>Hire Me →</span>
        </button>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center',
          y: yBadge, opacity: opacityFade
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="glass-card"
            style={{
              padding: '1.2rem 2rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '12px',
              background: i === 0 ? 'var(--accent-yellow-dim)' : i === 1 ? 'var(--accent-pink-dim)' : 'rgba(167, 139, 250, 0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: i === 0 ? 'var(--accent-yellow)' : i === 1 ? 'var(--accent-pink)' : 'var(--accent-purple)',
            }}>
              {stat.icon}
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} color="var(--text-muted)" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
