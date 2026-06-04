import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? 'var(--card-shadow)' : 'none',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Playfair Display', color: 'var(--text-primary)' }}
        >
          SANUTHMI<span className="text-gradient">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-row items-center gap-4 ml-4"
          >
            <a href="https://github.com/sanuthmibandara" target="_blank" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/sanuthmi-bandara-435057335/" target="_blank" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}><FaLinkedin size={20} /></a>
          </motion.div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
