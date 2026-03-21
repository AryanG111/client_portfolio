import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3, Medal } from 'lucide-react';

const highlights = [
  { icon: <Target size={20} />, text: 'Social media strategy & growth' },
  { icon: <BarChart3 size={20} />, text: 'Data-driven content marketing' },
  { icon: <Users size={20} />, text: 'Brand building & community growth' },
  { icon: <Medal size={20} />, text: 'National-level athlete mindset' },
];

const experiences = [
  {
    company: 'Vibes Media & Marketing',
    role: 'Social Media Strategist & Marketing Executive',
    points: [
      'Built social media strategies that increased client engagement by 150%',
      'Managed paid ad campaigns across Meta with optimized ROAS',
      'Created trend-driven content calendars for multiple brands',
      'Led influencer marketing initiatives and partnership outreach',
    ],
  },
  {
    company: 'PIIDM Pune',
    role: 'Digital Marketing Intern',
    period: 'Oct 2025 – Dec 2025',
    points: [
      'Optimized SEM campaigns, improving brand visibility and lead generation',
      'Managed social media accounts with measurable engagement growth',
      'Designed brand identities and optimized social media profiles',
    ],
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>

        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>About Me</span>
            <h2 className="title-section" style={{ marginBottom: '2rem' }}>
              I turn <span className="gradient-text">social media attention</span> into real business results
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-body" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              I'm Swapnil Haramkar — a digital marketing strategist and content creator
              who has generated <strong style={{ color: 'var(--accent-yellow)' }}>3M+ organic reach</strong> through
              scroll-stopping content and sharp social media strategies.
            </p>
            <p className="text-body" style={{ marginBottom: '2rem' }}>
              I help brands in <strong style={{ color: 'var(--text-primary)' }}>fitness, business, and lifestyle</strong> grow
              their audience, boost engagement, and convert followers into paying customers — using a mix of
              audience psychology, trend-driven content, and performance marketing.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          >
            {highlights.map((item) => (
              <span key={item.text} className="tag" style={{ gap: '0.5rem' }}>
                <span style={{ color: 'var(--accent-yellow)' }}>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column — Experience */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="text-label" style={{ marginBottom: '2rem', display: 'block' }}>Experience</span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                style={{ padding: '1.5rem 2rem' }}
              >
                <h4 style={{
                  fontSize: '1.1rem', fontWeight: 700,
                  marginBottom: '0.3rem', color: 'var(--accent-yellow)',
                }}>
                  {exp.company}
                </h4>
                <p style={{
                  fontSize: '0.85rem', color: 'var(--text-muted)',
                  marginBottom: '1rem', fontWeight: 500,
                }}>
                  {exp.role} {exp.period && `• ${exp.period}`}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{
                      fontSize: '0.85rem', color: 'var(--text-secondary)',
                      lineHeight: 1.6, paddingLeft: '1.2rem', position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '0.5rem',
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: 'var(--accent-pink)',
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
