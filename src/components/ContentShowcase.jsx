import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, Bookmark, TrendingUp, Eye } from 'lucide-react';

const contentPieces = [
  {
    type: 'Reel',
    typeIcon: <Play size={14} />,
    title: 'Fitness Motivation Reel',
    metric: '500K+ Views',
    metricIcon: <Eye size={14} />,
    whyItWorked: 'Used a pattern-interrupt hook in the first 0.5 seconds. Relatable gym humor + trending audio = massive shares.',
    engagement: { likes: '45K', shares: '8.2K', saves: '12K' },
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    accent: 'var(--accent-yellow)',
  },
  {
    type: 'Carousel',
    typeIcon: <Bookmark size={14} />,
    title: '5 Content Hooks That Go Viral',
    metric: '200K+ Reach',
    metricIcon: <TrendingUp size={14} />,
    whyItWorked: 'Educational carousels get 3x more saves. Used a "swipe to learn" format with actionable value on every slide.',
    engagement: { likes: '12K', shares: '3.5K', saves: '18K' },
    gradient: 'linear-gradient(135deg, #1a1a2e, #2d1b69, #11001c)',
    accent: 'var(--accent-pink)',
  },
  {
    type: 'Story Series',
    typeIcon: <Heart size={14} />,
    title: 'Behind-the-Scenes Brand Day',
    metric: '85% Completion Rate',
    metricIcon: <Eye size={14} />,
    whyItWorked: 'Raw, unpolished BTS content builds trust faster than polished posts. Added polls & quizzes for 2-way engagement.',
    engagement: { likes: '8K', shares: '2.1K', saves: '5K' },
    gradient: 'linear-gradient(135deg, #0d1117, #161b22, #1a1e2e)',
    accent: 'var(--accent-purple)',
  },
  {
    type: 'Reel',
    typeIcon: <Play size={14} />,
    title: 'Product Launch Teaser',
    metric: '350K+ Views',
    metricIcon: <Eye size={14} />,
    whyItWorked: 'Curiosity gap in the first frame + fast cuts + trending transition. CTA drove 2K link clicks in 24 hours.',
    engagement: { likes: '28K', shares: '6.5K', saves: '9K' },
    gradient: 'linear-gradient(135deg, #1a1a2e, #0d2818, #1a2e1a)',
    accent: 'var(--accent-yellow)',
  },
];

const ContentShowcase = () => {
  return (
    <section id="content" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Content Showcase</span>
        <h2 className="title-section" style={{ maxWidth: '650px' }}>
          Content that <span className="gradient-text">stops the scroll</span>
        </h2>
        <p className="text-body" style={{ maxWidth: '550px', marginTop: '1rem' }}>
          Each piece of content is engineered to grab attention, deliver value, 
          and drive action. Here's the strategy behind the numbers.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid-2">
        {contentPieces.map((piece, i) => (
          <motion.div
            key={piece.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              cursor: 'default',
            }}
          >
            {/* Preview Area */}
            <div style={{
              background: piece.gradient,
              padding: '2.5rem 2rem',
              position: 'relative',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Type Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.7rem', fontWeight: 600,
                alignSelf: 'flex-start',
                color: piece.accent,
              }}>
                {piece.typeIcon} {piece.type}
              </div>

              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {piece.title}
                </h3>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  color: piece.accent, fontSize: '0.9rem', fontWeight: 700,
                }}>
                  {piece.metricIcon} {piece.metric}
                </div>
              </div>
            </div>

            {/* Info Area */}
            <div style={{ padding: '1.5rem 2rem', background: 'var(--bg-secondary)' }}>
              <h4 style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: piece.accent,
                marginBottom: '0.6rem',
              }}>
                Why It Worked
              </h4>
              <p style={{
                fontSize: '0.85rem', color: 'var(--text-secondary)',
                lineHeight: 1.7, marginBottom: '1.2rem',
              }}>
                {piece.whyItWorked}
              </p>

              {/* Engagement Stats */}
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Heart size={13} color="var(--accent-pink)" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{piece.engagement.likes}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Share2 size={13} color="var(--accent-yellow)" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{piece.engagement.shares}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Bookmark size={13} color="var(--accent-purple)" />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{piece.engagement.saves}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContentShowcase;
