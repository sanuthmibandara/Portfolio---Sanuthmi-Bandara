import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import swiftrouteImg from '../assets/swiftroute.png';
import ecotransitImg from '../assets/ecotransit.png';
import acadamixImg from '../assets/acadamix.png';
import vehicleRentalImg from '../assets/vehicle-rental.png';
import campushubImg from '../assets/campushub.png';

const projects = [
  {
    title: "E-Commerce Test Automation Suite",
    subtitle: "Selenium WebDriver & TestNG",
    description: "Designed and developed a comprehensive automated UI testing framework for an e-commerce platform. Implemented the Page Object Model (POM) pattern for maintainability and integrated with Jenkins for CI/CD.",
    tech: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
    github: "#",
    image: campushubImg,
    accent: "#ec4899",
    tag: "UI Automation",
  },
  {
    title: "REST API Validation Framework",
    subtitle: "Postman & RestAssured",
    description: "Built a robust automated API testing suite using RestAssured and Java to validate endpoints for a complex microservices architecture. Automated schema validation and authorization checks.",
    tech: ["RestAssured", "Java", "Postman", "JSON", "JUnit"],
    github: "#",
    image: ecotransitImg,
    accent: "#f43f5e",
    tag: "API Testing",
  },
  {
    title: "Mobile App Test Automation",
    subtitle: "Appium & Cucumber (BDD)",
    description: "Engineered a cross-platform (iOS/Android) mobile test automation framework using Appium. Integrated Cucumber for Behavior-Driven Development to ensure test cases mapped directly to business requirements.",
    tech: ["Appium", "Cucumber", "Java", "Gherkin", "Appium Inspector"],
    github: "#",
    image: swiftrouteImg,
    accent: "#a855f7",
    tag: "Mobile QA",
  },
  {
    title: "Vehicle Spare-Parts System QA",
    subtitle: "Manual Testing & Defect Tracking",
    description: "Led the manual testing lifecycle for a vehicle spare-parts web platform. Authored comprehensive test plans, executed regression suites, and tracked defects using Jira.",
    tech: ["Jira", "Test Cases", "UAT", "Exploratory Testing"],
    github: "#",
    image: vehicleRentalImg,
    accent: "#06b6d4",
    tag: "Manual QA",
  },
  {
    title: "Smart Gate Automation QA",
    subtitle: "Hardware & Software Integration Testing",
    description: "Developed and executed specialized test scenarios to validate the integration between IoT hardware (ESP32-CAM) and software interfaces, ensuring reliable OCR-based vehicle authentication.",
    tech: ["Integration Testing", "IoT", "Arduino", "System Testing"],
    github: "#",
    image: acadamixImg,
    accent: "#f59e0b",
    tag: "IoT QA",
  }
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
    {/* Accent top bar */}
    <div style={{
      height: '4px',
      background: project.accent,
      width: '100%',
    }} />

    {/* Image */}
    <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f8fafc' }}>
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Tag badge */}
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

    {/* Content */}
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

      {/* Tech pills */}
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
          <h2 className="section-title">Software <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            A curated selection of systems built from the ground up — spanning enterprise platforms, IoT, and real-time applications.
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
