import { Fragment, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 5, label: 'Full-Stack Projects', suffix: '+' },
  { value: 3, label: 'Team Collaborations', suffix: '+' },
  { value: 3.7, label: 'CGPA at SLIIT', suffix: '', isDecimal: true },
  { value: 2, label: 'Years Building', suffix: '+' },
];

const useCountUp = (target, duration = 1800, start = false, isDecimal = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start, isDecimal]);
  return count;
};

const StatItem = ({ value, label, suffix, delay, started, isDecimal }) => {
  const count = useCountUp(value, 1600, started, isDecimal);
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
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        background: 'linear-gradient(135deg, #e11d48, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </span>
      <span style={{
        fontSize: '0.78rem',
        color: 'var(--text-secondary)',
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
      background: 'var(--surface-color)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      padding: '2.5rem 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
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
                  background: 'var(--border-light)',
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
