import { CONTACT_EMAIL } from '../config/contact';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border-light)', background: 'var(--surface-color)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Playfair Display', color: 'var(--text-primary)' }}>
          SANUTHMI<span className="text-gradient">.</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Hello from your portfolio`}
            style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-color)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            Email
          </a>
          <a href="https://github.com/sanuthmibandara" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>GitHub</a>
          <a href="https://www.linkedin.com/in/sanuthmi-bandara-435057335/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>LinkedIn</a>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
        &copy; {new Date().getFullYear()} Sanuthmi Dulanma Bandara. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
