import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION } from '../config/contact';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailClient = () => {
    const subject = encodeURIComponent(`Contact from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Send failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      openMailClient();
    }
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
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>{CONTACT_EMAIL}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Phone</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>{CONTACT_PHONE}</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{CONTACT_LOCATION}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600, letterSpacing: '0.02em' }}>
                    Open to remote work
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="card-light" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none' }} placeholder="What should I call you?" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none' }} placeholder="human@email.com" />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', background: 'var(--bg-color)', fontSize: '1rem', color: 'var(--text-primary)', outline: 'none', resize: 'none' }} placeholder="I want to chat about a project, a job role, or the meaning of life..." />
              </div>

              {status === 'success' && (
                <p style={{ fontSize: '0.9rem', color: '#16a34a', fontWeight: 600, margin: 0 }}>
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Could not send automatically — your email app should open with the message ready to send.
                </p>
              )}

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
