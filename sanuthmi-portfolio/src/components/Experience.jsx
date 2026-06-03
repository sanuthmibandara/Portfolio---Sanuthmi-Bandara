import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Private ICT Tutor",
    company: "Self-Employed Home-Based Individual Tutoring",
    location: "Sri Lanka",
    period: "2024 - Present",
    description: [
      "Conducting one-on-one and small-group ICT classes for G.C.E. Advanced Level students, covering core concepts such as programming fundamentals, databases, networking, and system logic, tailored to individual learning needs.",
      "Prepare lesson plans, practice questions, and exam-oriented explanations to improve students' understanding and performance, while developing strong communication, mentoring, and problem-solving skills."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">
            My work history and professional contributions in various corporate and technical environments.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto" style={{ maxWidth: '64rem', margin: '0 auto' }}>
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-light"
              style={{ padding: '3rem', borderRadius: '1.5rem', marginBottom: '2rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {exp.period}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {exp.location}</div>
                </div>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary-color)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }} />
                    <p style={{ lineHeight: 1.6 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
