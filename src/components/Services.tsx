'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  ShoppingCart, Truck, Globe, Smartphone, Monitor,
  Settings, Palette, Camera, Fingerprint,
  Mail, MessageCircle,
} from 'lucide-react';
import { SERVICES } from '@/lib/services';
import styles from './Services.module.css';

const ICONS: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart size={22} strokeWidth={1.6} />,
  Truck:        <Truck size={22} strokeWidth={1.6} />,
  Globe:        <Globe size={22} strokeWidth={1.6} />,
  Smartphone:   <Smartphone size={22} strokeWidth={1.6} />,
  Monitor:      <Monitor size={22} strokeWidth={1.6} />,
  Settings:     <Settings size={22} strokeWidth={1.6} />,
  Palette:      <Palette size={22} strokeWidth={1.6} />,
  Camera:       <Camera size={22} strokeWidth={1.6} />,
  Fingerprint:  <Fingerprint size={22} strokeWidth={1.6} />,
};

export default function Services() {
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
    <section id="services" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`fade-up ${styles.header}`}>
          <h2 className={styles.title}>Solutions Built to Solve Real Problems</h2>
          <p className={styles.sub}>
            Every service we offer is engineered to remove a specific business
            bottleneck — with the performance, security, and support you deserve.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article key={s.id} className={`fade-up ${styles.card}`}>
              <div className={styles.media}>
                <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardHead}>
                  <div className={styles.iconWrap}>{ICONS[s.icon]}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                </div>
                <p className={styles.cardText}>{s.description}</p>
              </div>
              <div className={styles.cardActions}>
                <a
                  href={`mailto:info@bytegigslabs.com?subject=${encodeURIComponent(s.emailSubject)}`}
                  className={`${styles.action} ${styles.actionEmail}`}
                >
                  <Mail size={13} />
                  Email Us
                </a>
                <a
                  href={`https://api.whatsapp.com/send?phone=254716738500&text=${encodeURIComponent(s.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.action} ${styles.actionWa}`}
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
