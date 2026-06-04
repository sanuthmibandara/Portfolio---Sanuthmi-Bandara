import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24" style={{ background: 'var(--bg-color)' }}>
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, maxWidth: '600px' }}
        >
          <span 
            className="inline-block mb-4 font-bold tracking-wider uppercase text-primary-color"
            style={{ color: 'var(--primary-color)', fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'inline-block' }}
          >
            Software Engineering Undergraduate
          </span>
          
          <h1 
            className="font-extrabold mb-6 leading-tight" 
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}
          >
            Hello, I'm <br/><span className="text-gradient">Sanuthmi Bandara.</span>
          </h1>
          
          <p 
            className="text-xl mb-10 leading-relaxed" 
            style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2.5rem' }}
          >
            A passionate 3rd-year Information Technology student at SLIIT specializing in Software Engineering. I am passionate about leveraging technology to solve real-world problems and create meaningful digital solutions.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects">
              <button className="btn-primary">
                View Projects <ArrowRight size={20} />
              </button>
            </a>
            <a href="/CV.pdf" download="Sanuthmi_Bandara_CV.pdf">
              <button className="btn-secondary">
                Download Resume <Download size={20} />
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <div
            className="hero-photo-frame"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '1',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))',
              boxShadow: 'var(--card-shadow-hover)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '1.25rem 1.25rem 0',
            }}
          >
            <img
              src="/profile.png"
              alt="Sanuthmi Bandara"
              style={{
                width: '92%',
                height: '92%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                display: 'block',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12))',
              }}
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
