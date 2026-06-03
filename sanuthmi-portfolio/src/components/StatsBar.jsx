import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 6, label: 'Projects Delivered', suffix: '+' },
  { value: 3, label: 'Team Collaborations', suffix: '+' },
  { value: 2, label: 'Years Building', suffix: '+' },
  { value: 15, label: 'K+ Lines of Code', suffix: 'K' },
];

const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ value, label, suffix, delay, started }) => {
  const count = useCountUp(value, 1600, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0 2.5rem',
      }}
    >
      <span style={{
        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
        fontWeight: 800,
        fontFamily: 'Outfit, sans-serif',
        background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
      }}>
        {count}{suffix !== 'K' ? suffix : 'K'}
      </span>
      <span style={{
        fontSize: '0.78rem',
        color: '#94a3b8',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </motion.div>
  );
};

const StatsBar = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      width: '100%',
      background: 'rgba(10,10,16,0.85)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '2.5rem 0',
      backdropFilter: 'blur(12px)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* subtle glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.06), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          {stats.map((s, i) => (
            <Fragment key={s.label}>
              <StatItem {...s} delay={i * 0.15} started={started} />
              {i < stats.length - 1 && (
                <div style={{
                  width: '1px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  flexShrink: 0,
                }} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
