import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: "Languages",
    color: "#e11d48",
    skills: ["Java", "JavaScript", "C", "C++", "PHP", "Python", "HTML5", "CSS3", "Arduino", "Bash"],
  },
  {
    label: "Frameworks & Libraries",
    color: "#a855f7",
    skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "React Native"],
  },
  {
    label: "Databases & Mobile",
    color: "#3b82f6",
    skills: ["MySQL", "MongoDB", "Microsoft SQL", "Kotlin", "Android Studio", "ESP32"],
  },
  {
    label: "Tools & Infrastructure",
    color: "#10b981",
    skills: ["Git", "GitHub", "Figma", "Apache Tomcat", "REST API", "JWT", "VS Code", "Linux/Unix"],
  },
  {
    label: "Concepts",
    color: "#f59e0b",
    skills: ["Full-Stack Development", "OOP", "System Design", "Data Structures & Algorithms", "SDLC", "Agile/Scrum", "Real-Time Systems"],
  },
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--bg-color)', padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
          <p className="section-subtitle">
            Languages, frameworks, and tools I use to design and build software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="card-light"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: `2px solid ${group.color}20`,
                paddingBottom: '1rem'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: group.color,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                }}>
                  {group.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gIdx * 0.1 + sIdx * 0.05 }}
                    style={{
                      padding: '0.4rem 1rem',
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}30`,
                      borderRadius: '100px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: group.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
