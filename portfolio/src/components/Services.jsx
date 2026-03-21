import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PenTool, Palette, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 size={28} />,
    title: 'Social Media Strategy',
    description: 'Complete social media roadmaps with content calendars, audience analysis, and growth strategies tailored to your brand goals.',
    deliverables: ['Content Calendar', 'Audience Research', 'Growth Roadmap', 'Competitor Analysis'],
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
  {
    icon: <PenTool size={28} />,
    title: 'Content Creation',
    description: 'Scroll-stopping reels, carousels, and stories designed with hook-based scripting and trend-driven creative direction.',
    deliverables: ['Reels & Short Videos', 'Carousel Posts', 'Story Sequences', 'Caption & Copy'],
    color: 'var(--accent-pink)',
    bg: 'var(--accent-pink-dim)',
  },
  {
    icon: <Palette size={28} />,
    title: 'Brand Building',
    description: 'From brand identity to voice guidelines — I build personal and business brands that stand out and build loyal communities.',
    deliverables: ['Brand Identity', 'Voice & Tone Guide', 'Bio & Profile Setup', 'Visual Direction'],
    color: 'var(--accent-purple)',
    bg: 'rgba(167, 139, 250, 0.15)',
  },
  {
    icon: <Megaphone size={28} />,
    title: 'Paid Ads Management',
    description: 'Data-driven Meta ad campaigns with optimized targeting, creative testing, and clear ROI tracking to turn budget into revenue.',
    deliverables: ['Meta Ad Campaigns', 'Audience Targeting', 'A/B Creative Testing', 'ROAS Reporting'],
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
];

const Services = () => {
  return (
    <section id="services" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>What I Offer</span>
        <h2 className="title-section">
          Services that <span className="gradient-text">drive growth</span>
        </h2>
        <p className="text-body" style={{ maxWidth: '520px', margin: '1rem auto 0' }}>
          Whether you need a full-stack social media strategy or just killer content — 
          I deliver end-to-end marketing solutions.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid-2" style={{ gap: '1.5rem' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="glass-card-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            style={{ padding: '2.5rem', cursor: 'default' }}
          >
            {/* Icon */}
            <div style={{
              width: '56px', height: '56px',
              borderRadius: '16px',
              background: service.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: service.color,
              marginBottom: '1.5rem',
            }}>
              {service.icon}
            </div>

            <h3 style={{
              fontSize: '1.3rem', fontWeight: 700,
              marginBottom: '0.75rem', color: 'var(--text-primary)',
            }}>
              {service.title}
            </h3>

            <p style={{
              fontSize: '0.9rem', color: 'var(--text-secondary)',
              lineHeight: 1.7, marginBottom: '1.5rem',
            }}>
              {service.description}
            </p>

            {/* Deliverables */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {service.deliverables.map((item) => (
                <span key={item} style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.7rem', fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: 'var(--text-muted)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
