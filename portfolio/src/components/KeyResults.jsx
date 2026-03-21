import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Eye, TrendingUp, Zap, Users } from 'lucide-react';

const metrics = [
  {
    icon: <Eye size={28} />,
    value: 3000000,
    suffix: '+',
    display: '3M+',
    label: 'Organic Reach',
    description: 'Across Instagram & social platforms',
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
  {
    icon: <TrendingUp size={28} />,
    value: 150,
    suffix: '%',
    display: '150%',
    label: 'Engagement Growth',
    description: 'Average increase in audience engagement',
    color: 'var(--accent-pink)',
    bg: 'var(--accent-pink-dim)',
  },
  {
    icon: <Zap size={28} />,
    value: 50,
    suffix: '+',
    display: '50+',
    label: 'Content Campaigns',
    description: 'Reels, posts, stories & paid campaigns',
    color: 'var(--accent-purple)',
    bg: 'rgba(167, 139, 250, 0.15)',
  },
  {
    icon: <Users size={28} />,
    value: 10,
    suffix: '+',
    display: '10+',
    label: 'Brands Helped',
    description: 'From fitness to business & lifestyle',
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
  },
];

const AnimatedCounter = ({ value, suffix, display }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    // For very large numbers (like 3M), show abbreviated
    if (value >= 1000000) {
      const target = value / 1000000;
      let start = 0;
      const increment = target / 40;
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start * 10) / 10);
        }
      }, 40);
      return () => clearInterval(timer);
    }

    let start = 0;
    const increment = Math.max(1, Math.floor(value / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const displayValue = value >= 1000000 ? `${count}M` : count;

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {displayValue}{suffix}
    </span>
  );
};

const KeyResults = () => {
  return (
    <section id="results" className="section container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Proven Impact</span>
        <h2 className="title-section">
          Results that <span className="gradient-text">speak louder</span> than words
        </h2>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="glass-card-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            style={{ textAlign: 'center', cursor: 'default' }}
          >
            {/* Icon */}
            <div style={{
              width: '56px', height: '56px',
              borderRadius: '16px',
              background: metric.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: metric.color,
              margin: '0 auto 1.5rem',
            }}>
              {metric.icon}
            </div>

            {/* Counter */}
            <div style={{
              fontSize: '2.8rem',
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: '0.5rem',
              color: metric.color,
            }}>
              <AnimatedCounter value={metric.value} suffix={metric.suffix} display={metric.display} />
            </div>

            {/* Label */}
            <h3 style={{
              fontSize: '1rem', fontWeight: 700,
              marginBottom: '0.5rem', color: 'var(--text-primary)',
            }}>
              {metric.label}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '0.8rem', color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}>
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyResults;
