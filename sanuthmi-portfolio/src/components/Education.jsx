import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) Information Technology specialized in Software Engineering",
    period: "July 2024 – July 2028 (Expected)",
    details: `Cumulative GPA: 3.7 / 4.0

Relevant Coursework:
Data Structures & Algorithms, Object-Oriented Programming, Artificial Intelligence & Machine Learning, Database Design & Development, Computer Networks, Operating Systems & System Administration, Software Engineering, Web & Mobile Technology, Probability & Statistics.`
  },
  {
    institution: "Bishop's College - Colombo 03",
    degree: "G.C.E. Advanced Level - Physical Science (Maths) Stream",
    period: "2021 - 2023",
    details: `ICT (A), Combined Mathematics (B), Physics (C)

Z-Score: 1.5`
  },
  {
    institution: "Sujatha Vidyalaya - Nugegoda",
    degree: "G.C.E. Ordinary Level ",
    period: "2010 - 2020",
    details: "Achieved academic excellence with 8 A's and 1 B."
  }
];

const Education = () => {
  return (
    <section id="education" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Education & Academic <span className="text-gradient">Path</span></h2>
          <p className="section-subtitle">
            My formal academic journey and technical foundation in computer science and software engineering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-light"
              style={{ padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '1rem', color: 'var(--primary-color)', width: 'fit-content', marginBottom: '1.5rem' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{edu.institution}</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>{edu.degree}</p>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <Award size={16} /> {edu.period}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
