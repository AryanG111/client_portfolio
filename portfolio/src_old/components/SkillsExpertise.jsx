import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, Hash, PenTool, Megaphone, Target, TrendingUp,
  Palette, Video, FileText, Calendar, Search, LineChart
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Strategy & Growth',
    color: 'var(--accent-yellow)',
    bg: 'var(--accent-yellow-dim)',
    skills: [
      { icon: <BarChart3 size={16} />, name: 'Social Media Strategy' },
      { icon: <Target size={16} />, name: 'Lead Generation & Funnels' },
      { icon: <TrendingUp size={16} />, name: 'Audience Growth' },
      { icon: <Search size={16} />, name: 'SEO & SEM Basics' },
    ],
  },
  {
    title: 'Content & Creative',
    color: 'var(--accent-pink)',
    bg: 'var(--accent-pink-dim)',
    skills: [
      { icon: <Video size={16} />, name: 'Reel & Short-form Video' },
      { icon: <PenTool size={16} />, name: 'Hook-based Copywriting' },
      { icon: <FileText size={16} />, name: 'Content Marketing' },
      { icon: <Palette size={16} />, name: 'Visual Storytelling' },
    ],
  },
  {
    title: 'Marketing & Ads',
    color: 'var(--accent-purple)',
    bg: 'rgba(167, 139, 250, 0.15)',
    skills: [
      { icon: <Megaphone size={16} />, name: 'Meta Ads (Facebook & IG)' },
      { icon: <LineChart size={16} />, name: 'Google Ads Basics' },
      { icon: <Hash size={16} />, name: 'Influencer Marketing' },
      { icon: <Calendar size={16} />, name: 'Campaign Planning' },
    ],
  },
];

const tools = [
  'Canva', 'Meta Business Suite', 'Google Analytics',
  'CapCut', 'Hootsuite', 'ChatGPT',
  'Google Ads', 'Notion', 'Figma',
];

const SkillsExpertise = () => {
  return (
    <section id="skills" className="section container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem' }}
      >
        <span className="text-label" style={{ marginBottom: '1rem', display: 'block' }}>Skills & Expertise</span>
        <h2 className="title-section" style={{ maxWidth: '600px' }}>
          The toolkit behind <span className="gradient-text">the results</span>
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid-3" style={{ marginBottom: '4rem' }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="glass-card-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3 style={{
              fontSize: '1.1rem', fontWeight: 700,
              marginBottom: '1.5rem', color: cat.color,
            }}>
              {cat.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cat.skills.map((skill) => (
                <div key={skill.name} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.6rem 0.8rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{ color: cat.color, display: 'flex' }}>{skill.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-label" style={{ marginBottom: '1.5rem', display: 'block', textAlign: 'center' }}>
          Tools I Use Daily
        </span>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.75rem',
          justifyContent: 'center',
        }}>
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              className="tag"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent-yellow)' }}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsExpertise;
