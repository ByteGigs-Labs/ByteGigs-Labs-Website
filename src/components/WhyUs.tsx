'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyUs.module.css';

const FEATURES = [
  {
    title: 'Proven Work, Not Empty Claims',
    desc: 'We point to installed systems, delivered websites, working apps, and real client feedback. You should not have to guess whether your technology partner can finish the work.',
  },
  {
    title: 'Built Around the Business Problem',
    desc: 'We do not start with a template or a fashionable tool. We first understand your workflow, the bottleneck, and the result you need, then build the right system around that.',
  },
  {
    title: 'Clear Scope and Milestones',
    desc: 'You know what is being built, what it will cost, and how delivery will happen. Clear milestones keep the project practical, trackable, and easier to manage.',
  },
  {
    title: 'Secure and Maintainable Systems',
    desc: 'From business software to CCTV and biometrics, we build with security, access control, backups, and long-term maintenance in mind from the beginning.',
  },
  {
    title: 'No Vendor Lock-In Games',
    desc: 'Your system should serve your business, not trap it. We keep ownership, handover, and support expectations clear so you can operate with confidence.',
  },
  {
    title: 'Support After Launch',
    desc: 'The launch is not the end of the relationship. We stay available for improvements, fixes, training, monitoring, and support as your business grows.',
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <div className={`fade-up ${styles.intro}`}>
            <h2 className={styles.title}>We do not just build. We solve.</h2>
            <p className={styles.lead}>Simply put, we care about your business.</p>
            <p className={styles.sub}>
              Choosing a technology partner should not be about who sounds the
              most technical. It should be about who understands the business
              problem, communicates clearly, delivers dependable work, and
              stays accountable after launch.
            </p>
          </div>

          <div className={styles.features}>
            {FEATURES.map((f) => (
              <article key={f.title} className={`fade-up ${styles.feature}`}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
