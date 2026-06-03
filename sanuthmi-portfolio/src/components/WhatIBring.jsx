import { motion } from 'framer-motion';
import {
  Layers, Users, GitBranch, Calendar, Search, FileText, Server, Zap
} from 'lucide-react';

const skills = [
  { icon: Layers,    title: 'Test Automation',    desc: 'Building robust automated test suites', color: '#e11d48' },
  { icon: Search,    title: 'Attention to Detail',desc: 'Identifying edge cases and hidden bugs', color: '#a855f7' },
  { icon: Calendar,  title: 'Agile Testing',      desc: 'Seamless integration with CI/CD & Scrums', color: '#10b981' },
  { icon: GitBranch, title: 'Defect Tracking',    desc: 'Clear, reproducible bug reports & metrics', color: '#f59e0b' },
  { icon: Users,     title: 'UAT Coordination',   desc: 'Ensuring products meet user requirements', color: '#ef4444' },
  { icon: FileText,  title: 'Test Documentation', desc: 'Writing clear test plans & scenarios', color: '#06b6d4' },
  { icon: Server,    title: 'API Testing',        desc: 'Validating backend logic and contracts', color: '#3b82f6' },
  { icon: Zap,       title: 'Quality First',      desc: 'Advocating for best practices & standards', color: '#ec4899' },
];

const WhatIBring = () => {
  return (
    <section style={{ padding: '120px 0', background: 'var(--surface-color)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">What I <span className="text-gradient">Bring to a Team</span></h2>
          <p className="section-subtitle">
            Beyond writing code — I bring structure, communication, and leadership to every project I'm part of.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-light"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Icon container */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '0.65rem',
                  background: `${skill.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: skill.color,
                }}>
                  <Icon size={18} strokeWidth={2} />
                </div>

                <span style={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                }}>
                  {skill.title}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                }}>
                  {skill.desc}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
