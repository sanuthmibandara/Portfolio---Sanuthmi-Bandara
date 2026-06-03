import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sanuthmibandara@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'var(--surface-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="section-title">Let's build something <span className="text-gradient">amazing</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:sanuthmibandara@gmail.com" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>sanuthmibandara@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Phone</p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600 }}>+94 76 085 7824</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600 }}>Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="card-light" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none' }} placeholder="John Doe" />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none' }} placeholder="john@example.com" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none', resize: 'none' }} placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


