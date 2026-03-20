import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, Zap, BarChart3, ChevronRight, Instagram, Megaphone, PenTool } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    tag: 'Instagram Growth',
    icon: <Instagram size={18} />,
    title: 'Fitness Brand Instagram Growth',
    problem: 'A fitness brand had 2K followers with less than 1% engagement rate. Their content was inconsistent and lacked a clear strategy.',
    strategy: 'Implemented a hook-based reel strategy, created a 30-day content calendar focused on trending formats, and used audience psychology to craft relatable fitness content.',
    execution: [
      '4 reels/week with viral hook formulas',
      'Story-driven carousel posts for saves & shares',
      'Engagement pods + community building in DMs',
      'Hashtag research & posting time optimization',
    ],
    results: [
      { label: 'Followers', value: '2K → 25K', icon: <TrendingUp size={16} /> },
      { label: 'Reach', value: '1.2M+', icon: <BarChart3 size={16} /> },
      { label: 'Engagement', value: '8.5%', icon: <Zap size={16} /> },
    ],
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
  {
    id: 2,
    tag: 'Brand Launch',
    icon: <Megaphone size={18} />,
    title: 'Local Business Social Media Launch',
    problem: 'A local business had zero social media presence and was losing customers to competitors who were active online.',
    strategy: 'Built their brand identity from scratch — logo, color palette, tone of voice. Created launch content and ran targeted Meta ads to reach local audience.',
    execution: [
      'Complete brand identity & social media setup',
      'Launch campaign with 15 posts + stories',
      'Meta Ads with geo-targeting (₹500/day budget)',
      'Google My Business optimization',
    ],
    results: [
      { label: 'Leads in 30 days', value: '200+', icon: <Target size={16} /> },
      { label: 'Ad ROAS', value: '4.2x', icon: <BarChart3 size={16} /> },
      { label: 'Followers', value: '0 → 5K', icon: <TrendingUp size={16} /> },
    ],
    color: 'var(--accent-pink)',
    bg: 'var(--accent-pink-dim)',
  },
  {
    id: 3,
    tag: 'Personal Brand',
    icon: <PenTool size={18} />,
    title: 'Personal Brand Content Strategy',
    problem: 'A personal brand wanted to establish authority in their niche but had inconsistent posting and no content strategy.',
    strategy: 'Developed a content pillar framework, created a weekly content system, and used hook-based scripting for short-form videos to maximize reach and saves.',
    execution: [
      'Content pillar framework (educate, inspire, entertain)',
      '3 reels/week with scripted hooks',
      'Weekly carousel breakdowns for authority building',
      'Bio optimization & link-in-bio funnel setup',
    ],
    results: [
      { label: 'Organic Reach', value: '800K+', icon: <BarChart3 size={16} /> },
      { label: 'Saves Rate', value: '12%', icon: <Zap size={16} /> },
      { label: 'DM Leads', value: '50+/month', icon: <Target size={16} /> },
    ],
    color: 'var(--accent-purple)',
    bg: 'rgba(167, 139, 250, 0.15)',
  },
];

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="case-studies" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Case Studies</span>
        <h2 className="title-section" style={{ maxWidth: '700px' }}>
          Real projects. <span className="gradient-text">Real results.</span>
        </h2>
        <p className="text-body" style={{ maxWidth: '550px', marginTop: '1rem' }}>
          Every project follows a clear framework: identify the problem, build a strategy, execute with precision, and deliver measurable outcomes.
        </p>
      </motion.div>

      {/* Case Study Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            className="glass-card-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            style={{ cursor: 'pointer', padding: '2.5rem' }}
            onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
          >
            {/* Card Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: expandedId === study.id ? '2rem' : '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '14px',
                  background: study.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: study.color, flexShrink: 0,
                }}>
                  {study.icon}
                </div>
                <div>
                  <span className="tag" style={{
                    borderColor: study.color + '40',
                    color: study.color,
                    background: study.bg,
                    marginBottom: '0.5rem',
                    fontSize: '0.7rem',
                  }}>
                    {study.tag}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.5rem' }}>{study.title}</h3>
                </div>
              </div>

              {/* Results Preview (always visible) */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {study.results.map((r) => (
                  <div key={r.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: study.color }}>{r.value}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.label}</div>
                  </div>
                ))}
                <motion.div
                  animate={{ rotate: expandedId === study.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === study.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '2rem',
                  }}>
                    {/* Problem */}
                    <div>
                      <h4 style={{
                        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px',
                        textTransform: 'uppercase', color: 'var(--accent-pink)',
                        marginBottom: '0.75rem',
                      }}>
                        🔍 Problem
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                        {study.problem}
                      </p>
                    </div>

                    {/* Strategy */}
                    <div>
                      <h4 style={{
                        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px',
                        textTransform: 'uppercase', color: 'var(--accent-yellow)',
                        marginBottom: '0.75rem',
                      }}>
                        💡 Strategy
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                        {study.strategy}
                      </p>
                    </div>

                    {/* Execution */}
                    <div>
                      <h4 style={{
                        fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1.5px',
                        textTransform: 'uppercase', color: 'var(--accent-purple)',
                        marginBottom: '0.75rem',
                      }}>
                        🚀 Execution
                      </h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {study.execution.map((item, j) => (
                          <li key={j} style={{
                            fontSize: '0.85rem', color: 'var(--text-secondary)',
                            paddingLeft: '1rem', position: 'relative', lineHeight: 1.6,
                          }}>
                            <span style={{
                              position: 'absolute', left: 0, top: '0.55rem',
                              width: '5px', height: '5px', borderRadius: '50%',
                              background: 'var(--accent-purple)',
                            }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
