import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, TrendingUp, Eye } from 'lucide-react';
import profileImg from '../../assests/WhatsApp_Image_2026-03-19_at_18.32.16-removebg-preview.png';

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
      {/* Profile Image - Redesigned for Premium Look */}
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: yText, opacity: opacityFade, marginBottom: '2.5rem', position: 'relative' }}
      >
        <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
          
          {/* Animated Ambient Blob Base */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '130px',
              height: '130px',
              background: 'var(--accent-gradient)',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              filter: 'blur(30px)',
              opacity: 0.45,
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              zIndex: 0
            }} 
          />

          {/* Glass Pedestal */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            width: '160px',
            height: '160px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            zIndex: 1,
            boxShadow: 'inset 0 0 20px rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.5)'
          }} />

          {/* Clean Transparent Image Popping Out */}
          <img 
            src={profileImg} 
            alt="Swapnil Haramkar" 
            style={{ 
              position: 'relative',
              zIndex: 2,
              width: '190px', 
              height: '190px', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))',
              transform: 'translateY(-15px)' // Pops out of the pedestal
            }} 
          />
        </div>
      </motion.div>

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
          fontSize: 'clamp(2rem, 5.5vw, 4.2rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-2px',
          marginBottom: '1.5rem',
        }}>
          Hello I'm Swapnil Haramkar.<br/>
          I help brands grow with{' '}
          <span className="gradient-text">high-performing content</span>
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
        className="hero-stats-row"
        style={{
          y: yBadge, opacity: opacityFade
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="glass-card stat-card"
            style={{
              padding: '1.2rem 2rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              borderRadius: 'var(--radius-xl)',
              minWidth: '240px'
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
