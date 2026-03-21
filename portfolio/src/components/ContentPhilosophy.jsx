import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart3, ArrowRight, Dumbbell, Briefcase, Smartphone } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Search size={24} />,
    title: 'Research & Analyze',
    description: 'Deep dive into audience behavior, competitor strategies, trending formats, and platform algorithms to find what works.',
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
  {
    num: '02',
    icon: <PenTool size={24} />,
    title: 'Create & Execute',
    description: 'Craft scroll-stopping content with hook-based scripting, viral-ready formats, and on-brand visual storytelling.',
    color: 'var(--accent-pink)',
    bg: 'var(--accent-pink-dim)',
  },
  {
    num: '03',
    icon: <BarChart3 size={24} />,
    title: 'Optimize & Scale',
    description: 'Track performance, double down on what works, A/B test creatives, and continuously optimize for growth.',
    color: 'var(--accent-purple)',
    bg: 'rgba(167, 139, 250, 0.15)',
  },
];

const niches = [
  { icon: <Dumbbell size={20} />, label: 'Fitness & Health', color: 'var(--accent-yellow)' },
  { icon: <Briefcase size={20} />, label: 'Business & Startups', color: 'var(--accent-pink)' },
  { icon: <Smartphone size={20} />, label: 'Social Media & Personal Brands', color: 'var(--accent-purple)' },
];

const ContentPhilosophy = () => {
  return (
    <section id="philosophy" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>My Process</span>
        <h2 className="title-section">
          How I <span className="gradient-text">think about content</span>
        </h2>
        <p className="text-body" style={{ maxWidth: '550px', margin: '1rem auto 0' }}>
          Great content isn't luck — it's a system. Here's the framework
          I use to consistently produce results.
        </p>
      </motion.div>

      {/* Process Steps */}
      <div className="grid-3" style={{ marginBottom: '5rem' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Step Card */}
            <div className="glass-card-glow" style={{
              textAlign: 'center', padding: '3rem 2rem',
            }}>
              {/* Step Number */}
              <div style={{
                fontSize: '3.5rem', fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.04)',
                position: 'absolute', top: '1rem', right: '1.5rem',
                lineHeight: 1,
              }}>
                {step.num}
              </div>

              {/* Icon */}
              <div style={{
                width: '60px', height: '60px',
                borderRadius: '18px',
                background: step.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: step.color,
                margin: '0 auto 1.5rem',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontSize: '1.2rem', fontWeight: 700,
                marginBottom: '0.75rem',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.9rem', color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                {step.description}
              </p>
            </div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', top: '50%', right: '-1.5rem',
                transform: 'translateY(-50%)', zIndex: 5,
                color: 'var(--text-muted)',
                display: 'none', // hidden on mobile
              }}>
                <ArrowRight size={20} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Niche Focus */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block' }}>My Niche Focus</span>
        <div style={{
          display: 'flex', gap: '1rem', justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {niches.map((niche, i) => (
            <motion.div
              key={niche.label}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                padding: '1rem 1.5rem', borderRadius: 'var(--radius-xl)',
              }}
            >
              <span style={{ color: niche.color, display: 'flex' }}>{niche.icon}</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{niche.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContentPhilosophy;
