import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Sharma',
    role: 'Founder, FitLife Studio',
    text: 'Swapnil completely transformed our Instagram presence. We went from barely getting any engagement to having reels that consistently hit 100K+ views. His content strategy is sharp and result-oriented.',
    rating: 5,
    result: '10x follower growth in 3 months',
  },
  {
    name: 'Priya Mehta',
    role: 'Marketing Mentor, PIIDM Pune',
    text: 'One of the most dedicated and strategic thinkers I\'ve worked with. Swapnil doesn\'t just create content — he understands why content works and backs everything with data.',
    rating: 5,
    result: 'Top performer in digital marketing cohort',
  },
  {
    name: 'Arjun Kapoor',
    role: 'CEO, Vibes Media & Marketing',
    text: 'Swapnil brought a performance-driven approach to our social media operations. His content calendars and trend predictions consistently delivered better results than expected.',
    rating: 5,
    result: '150% engagement increase for clients',
  },
];

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Social Proof</span>
        <h2 className="title-section">
          What people <span className="gradient-text">say about my work</span>
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass-card-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', cursor: 'default' }}
          >
            {/* Quote Icon */}
            <Quote size={28} color="var(--accent-yellow)" style={{ marginBottom: '1.5rem', opacity: 0.4 }} />

            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.2rem' }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p style={{
              fontSize: '0.95rem', color: 'var(--text-secondary)',
              lineHeight: 1.8, flex: 1, marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}>
              "{t.text}"
            </p>

            {/* Result Badge */}
            <div style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--accent-yellow-dim)',
              border: '1px solid rgba(253, 224, 71, 0.2)',
              marginBottom: '1.5rem',
              display: 'inline-flex',
              alignSelf: 'flex-start',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-yellow)' }}>
                📊 {t.result}
              </span>
            </div>

            {/* Author */}
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                {t.name}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
