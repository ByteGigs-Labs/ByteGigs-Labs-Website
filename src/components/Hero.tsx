'use client';

import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
} from 'lucide-react';
import styles from './Hero.module.css';

const CAPABILITIES = [
  'Custom software',
  'Mobile and web apps',
  'POS, CCTV and biometrics',
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={ref} id="home">
      <div className={styles.bg} />

      <div className={`container ${styles.inner}`}>
        <h1 className={`fade-up ${styles.heading}`}>
          Software, systems, and support for businesses that need{' '}
          <span className={styles.accentOrange}>technology to work.</span>
        </h1>

        <p className={`fade-up ${styles.sub}`}>
          We design, build, and support custom business systems, mobile apps,
          POS platforms, surveillance, and biometric solutions for teams that
          need dependable technology without the noise.
        </p>

        <div className={`fade-up ${styles.capabilities}`}>
          {CAPABILITIES.map((item) => (
            <span key={item} className={styles.capability}>
              <CheckCircle2 size={16} />
              {item}
            </span>
          ))}
        </div>

        <div className={`fade-up ${styles.actions}`}>
          <a
            href="https://api.whatsapp.com/send?phone=254716738500&text=Hello%20ByteGigs%20Labs%2C%20I%20need%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Free Consultation
            <ArrowRight size={16} />
          </a>
          <a href="#services" className={styles.btnSecondary}>
            Explore Services
          </a>
        </div>

        <div className={`fade-up ${styles.contact}`}>
          <a href="tel:+254716738500" className={styles.contactItem}>
            <Phone size={14} />
            +254 716 738 500
          </a>
          <span className={styles.divider} />
          <a href="mailto:info@bytegigslabs.com" className={styles.contactItem}>
            <Mail size={14} />
            info@bytegigslabs.com
          </a>
        </div>
      </div>
    </section>
  );
}
