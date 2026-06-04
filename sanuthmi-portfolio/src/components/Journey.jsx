import { motion } from 'framer-motion';
import { GraduationCap, Building2, Rocket, Cpu, Target, Award } from 'lucide-react';

const milestones = [
  {
    year: '2020',
    icon: Target,
    title: 'Academic Excellence O/L',
    desc: 'Achieved 8 A\'s and 1 B at G.C.E. Ordinary Level Examination from Sujatha Vidyalaya - Nugegoda.',
    color: '#ec4899',
    certificate: '/cert-ol.jpeg',
  },
  {
    year: '2023',
    icon: GraduationCap,
    title: 'Academic Excellence A/L',
    desc: 'G.C.E. Advanced Level Examination – Z-Score: 1.5, Maths Stream at Bishop\'s College - Colombo 03. ICT (A), Combined Mathematics (B), Physics (C).',
    color: '#a855f7',
    certificate: '/cert-al.jpeg',
  },
  {
    year: '2024',
    icon: Cpu,
    title: 'Computer Science Recognition',
    desc: 'Successful completion of 30+ comprehensive programming projects. Issued by Code.org, USA & DP Education Coding School, Sri Lanka.',
    color: '#10b981',
    certificate: '/cert-cs.jpeg',
  },
  {
    year: '2024',
    icon: Building2,
    title: 'Enrolled at SLIIT',
    desc: 'Started BSc (Hons) Information Technology in Software Engineering.',
    color: '#f59e0b',
  },
  {
    year: '2025',
    icon: Award,
    title: 'Dean\'s List Award',
    desc: 'Academic Excellence in Year 1 Semester 1 with a Semester GPA 4.0 (out of 4.0).',
    color: '#ef4444',
    certificate: '/cert-deans.jpeg',
  },
  {
    year: 'Now',
    icon: Rocket,
    title: 'Open to IT Opportunities',
    desc: 'Actively seeking software engineering, quality assurance, and IT roles to apply my skills in building impactful systems.',
    color: '#22c55e',
  },
];

const Journey = () => {
  return (
    <section id="journey" style={{ padding: '120px 0', background: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
          <p className="section-subtitle">
            A timeline of academic milestones, achievements, and growth in software engineering.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '0',
              width: '2px',
              background: 'var(--border-light)',
              display: 'none',
              transformOrigin: 'top'
            }} className="md:block" />

          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--border-light)',
          }} className="md:hidden" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;

              return (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  position: 'relative',
                  width: '100%'
                }}>
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: 'var(--primary-color)',
                      border: '4px solid var(--bg-color)',
                      zIndex: 10,
                      display: 'none'
                    }} className="md:block" />

                  <div style={{
                    position: 'absolute',
                    left: '13px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--primary-color)',
                    border: '4px solid var(--bg-color)',
                    zIndex: 10,
                  }} className="md:hidden" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.3 }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: isEven ? 'flex-end' : 'flex-start',
                      paddingLeft: '50px',
                      paddingRight: '0'
                    }}
                    className="md:px-0"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        padding: '2rem',
                        position: 'relative',
                        marginLeft: isEven ? '0' : '50%',
                        marginRight: isEven ? '50%' : '0',
                      }}
                      className="card-light timeline-card"
                    >
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '50px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          [isEven ? 'right' : 'left']: '-50px',
                          height: '2px',
                          background: 'var(--border-light)',
                          display: 'none',
                          transformOrigin: isEven ? 'right' : 'left'
                        }} className="md:block" />

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'var(--bg-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--primary-color)',
                          border: '1px solid var(--border-light)'
                        }}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            color: 'var(--primary-color)',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                          }}>{m.year}</span>
                          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{m.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: m.certificate ? '0.75rem' : 0 }}>
                        {m.desc}
                      </p>
                      {m.certificate && (
                        <a
                          href={m.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            display: 'inline-block',
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                        >
                          View Certificate →
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .timeline-card {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `}} />
    </section>
  );
};

export default Journey;
