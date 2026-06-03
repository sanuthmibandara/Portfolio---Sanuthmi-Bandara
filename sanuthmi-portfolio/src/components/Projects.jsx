import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import swiftrouteImg from '../assets/swiftroute.png';
import ecotransitImg from '../assets/ecotransit.png';
import acadamixImg from '../assets/acadamix.png';
import vehicleRentalImg from '../assets/vehicle-rental.png';
import campushubImg from '../assets/campushub.png';

const projects = [
  {
    title: "Smart Gate Automation System",
    subtitle: "IoT + Computer Vision · Embedded Systems",
    description: "Developed embedded control logic using Arduino (C/C++) on ESP32-CAM to process sensor inputs, handle OCR-based vehicle authentication, and control automated gate operations. Implemented motor control with PIR sensors and WiFi/HTTP communication via Blynk IoT for real-time monitoring.",
    tech: ["Arduino", "ESP32-CAM", "C/C++", "Blynk IoT", "OCR", "PIR Sensors"],
    github: "#",
    image: ecotransitImg,
    accent: "#f59e0b",
    tag: "IoT",
  },
  {
    title: "WasteWise",
    subtitle: "Smart Garbage Management System",
    description: "Designed and developed the Complaint & Feedback Management module for a smart garbage management system integrating citizen reporting and IoT-based bin monitoring using React, Spring Boot REST APIs, MySQL, and Arduino C++.",
    tech: ["React", "Spring Boot", "MySQL", "REST API", "Arduino", "Agile"],
    github: "#",
    image: campushubImg,
    accent: "#10b981",
    tag: "Full-Stack",
  },
  {
    title: "Food Ordering Mobile Application",
    subtitle: "Web and Mobile Technology · Group Project",
    description: "Designed, developed, and deployed the full User Management module for a cross-platform system using Node.js, Express, MongoDB, and React Native. Engineered JWT-based authentication with Role-Based Access Control for Customer, Driver, and Store Administrator roles.",
    tech: ["Node.js", "Express", "MongoDB", "React Native", "JWT", "RBAC"],
    github: "#",
    image: swiftrouteImg,
    accent: "#a855f7",
    tag: "Mobile",
  },
  {
    title: "Vehicle Spare-Parts Management System",
    subtitle: "Software Engineering · Group Project",
    description: "Designed and developed customer-facing features including spare parts search, order history viewing, and product review functionality using Java Spring Boot and MS SQL within an Agile team following MVC architecture and RESTful APIs.",
    tech: ["Java", "Spring Boot", "MS SQL", "REST API", "MVC", "Figma"],
    github: "#",
    image: vehicleRentalImg,
    accent: "#06b6d4",
    tag: "Web App",
  },
  {
    title: "Restaurant Table Reservation System",
    subtitle: "Object Oriented Programming · Group Project",
    description: "Designed and developed the Menu Management module with CRUD functionalities for menu items, categories, pricing, and availability using Spring Boot, Apache Tomcat, MySQL, HTML, and CSS.",
    tech: ["Spring Boot", "MySQL", "Apache Tomcat", "HTML", "CSS", "GitHub"],
    github: "#",
    image: acadamixImg,
    accent: "#e11d48",
    tag: "Web App",
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="card-light"
    style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    <div style={{
      height: '4px',
      background: project.accent,
      width: '100%',
    }} />

    <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f8fafc' }}>
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{
        position: 'absolute', top: '1rem', right: '1rem',
        padding: '0.35rem 0.8rem',
        background: 'white',
        border: `1px solid ${project.accent}30`,
        borderRadius: '100px',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: project.accent,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}>
        {project.tag}
      </div>
    </div>

    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: project.accent, fontWeight: 600 }}>
            {project.subtitle}
          </p>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--text-secondary)',
            transition: 'color 0.2s',
            marginLeft: '1rem',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = project.accent}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <FaGithub size={22} />
        </a>
      </div>

      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        flex: 1,
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '0.3rem 0.8rem',
            background: 'var(--bg-color)',
            border: '1px solid var(--border-light)',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Academic <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            Full-stack systems, IoT integrations, and mobile applications built through academic group projects at SLIIT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
