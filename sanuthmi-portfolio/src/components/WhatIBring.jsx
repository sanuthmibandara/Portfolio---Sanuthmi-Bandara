import { motion } from 'framer-motion';
import {
  Layers, Users, GitBranch, Calendar, Server, Zap, Database, Code2
} from 'lucide-react';

const skills = [
  { icon: Code2,    title: 'Full-Stack Development', desc: 'Building end-to-end web and mobile applications', color: '#e11d48' },
  { icon: Server,   title: 'REST API Design',        desc: 'Designing and implementing scalable backend services', color: '#a855f7' },
  { icon: Layers,   title: 'System Design',          desc: 'Architecture-first approach to software solutions', color: '#3b82f6' },
  { icon: Database, title: 'Database Management',    desc: 'MySQL, MongoDB, and MS SQL schema design & queries', color: '#10b981' },
  { icon: Calendar, title: 'Agile / Scrum',          desc: 'Collaborative development in sprint-based teams', color: '#f59e0b' },
  { icon: GitBranch,title: 'Version Control',        desc: 'Git workflows and collaborative code reviews', color: '#ef4444' },
  { icon: Users,    title: 'Team Collaboration',     desc: 'Cross-functional teamwork on group projects', color: '#06b6d4' },
  { icon: Zap,      title: 'Problem Solving',        desc: 'Breaking down complex challenges into solutions', color: '#ec4899' },
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
            Beyond writing code — I bring structure, communication, and a drive to deliver reliable software.
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
