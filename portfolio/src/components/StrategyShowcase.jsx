import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, FileText, Calendar, Lightbulb } from 'lucide-react';

const beforeAfterData = [
  {
    metric: 'Followers',
    before: '2,100',
    after: '25,000+',
    growth: '+1,090%',
    color: 'var(--accent-yellow)',
  },
  {
    metric: 'Avg. Reach/Post',
    before: '150',
    after: '45,000+',
    growth: '+29,900%',
    color: 'var(--accent-pink)',
  },
  {
    metric: 'Engagement Rate',
    before: '0.8%',
    after: '8.5%',
    growth: '+962%',
    color: 'var(--accent-purple)',
  },
  {
    metric: 'Monthly Leads',
    before: '0',
    after: '50+',
    growth: '∞',
    color: 'var(--accent-yellow)',
  },
];

const hookFormulas = [
  { hook: '"Stop scrolling if you..."', why: 'Direct address + curiosity gap', icon: '🎯' },
  { hook: '"Nobody talks about this but..."', why: 'Exclusivity + controversy', icon: '🤫' },
  { hook: '"I grew from X to Y by..."', why: 'Proof + transformation story', icon: '📈' },
  { hook: '"3 things I wish I knew..."', why: 'Listicle + relatability', icon: '💡' },
];

const calendarSample = [
  { day: 'Mon', type: 'Reel', topic: 'Viral Hook Content', color: 'var(--accent-pink)' },
  { day: 'Tue', type: 'Carousel', topic: 'Educational Value Post', color: 'var(--accent-yellow)' },
  { day: 'Wed', type: 'Story', topic: 'BTS + Polls & Engagement', color: 'var(--accent-purple)' },
  { day: 'Thu', type: 'Reel', topic: 'Trend-jacking Format', color: 'var(--accent-pink)' },
  { day: 'Fri', type: 'Post', topic: 'Social Proof / Testimonial', color: 'var(--accent-yellow)' },
  { day: 'Sat', type: 'Carousel', topic: 'Tips & How-to Guide', color: 'var(--accent-purple)' },
  { day: 'Sun', type: 'Reel', topic: 'Personal Brand Story', color: 'var(--accent-pink)' },
];

const StrategyShowcase = () => {
  return (
    <section id="strategy" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Strategy Breakdown</span>
        <h2 className="title-section" style={{ maxWidth: '650px' }}>
          The strategy <span className="gradient-text">behind the growth</span>
        </h2>
      </motion.div>

      {/* Before vs After */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card-glow"
        style={{ padding: '2.5rem', marginBottom: '3rem' }}
      >
        <h3 style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '1.1rem', fontWeight: 700, marginBottom: '2rem',
        }}>
          <TrendingUp size={20} color="var(--accent-yellow)" />
          Before vs After — Real Growth Example
        </h3>

        <div className="grid-4">
          {beforeAfterData.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
                {item.metric}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{item.before}</span>
                <ArrowRight size={14} color="var(--text-muted)" />
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: item.color }}>{item.after}</span>
              </div>
              <div style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.7rem', fontWeight: 700,
                color: item.color,
                background: item.color === 'var(--accent-yellow)' ? 'var(--accent-yellow-dim)' :
                  item.color === 'var(--accent-pink)' ? 'var(--accent-pink-dim)' : 'rgba(167, 139, 250, 0.15)',
              }}>
                {item.growth}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        {/* Reel Hook Formulas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card-glow"
          style={{ padding: '2.5rem' }}
        >
          <h3 style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem',
          }}>
            <Lightbulb size={20} color="var(--accent-pink)" />
            Reel Hook Formulas I Use
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {hookFormulas.map((formula, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}>
                <span style={{ fontSize: '1.2rem' }}>{formula.icon}</span>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {formula.hook}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {formula.why}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sample Content Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card-glow"
          style={{ padding: '2.5rem' }}
        >
          <h3 style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem',
          }}>
            <Calendar size={20} color="var(--accent-purple)" />
            Sample Content Calendar
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {calendarSample.map((day, i) => (
              <div key={day.day} style={{
                display: 'grid',
                gridTemplateColumns: '50px 80px 1fr',
                gap: '0.75rem',
                alignItems: 'center',
                padding: '0.6rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                background: i % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {day.day}
                </span>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  color: day.color,
                  background: day.color === 'var(--accent-yellow)' ? 'var(--accent-yellow-dim)' :
                    day.color === 'var(--accent-pink)' ? 'var(--accent-pink-dim)' : 'rgba(167, 139, 250, 0.15)',
                  textAlign: 'center',
                }}>
                  {day.type}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {day.topic}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategyShowcase;
