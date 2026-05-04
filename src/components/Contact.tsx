'use client';

import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
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
    <section id="contact" className={styles.section} ref={ref}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.inner}>
          <div className={`fade-up ${styles.left}`}>
            <h2 className={styles.title}>Ready to Eliminate Your Tech Pain?</h2>
            <p className={styles.sub}>
              Tell us about your project. We will respond within 24 hours with
              a clear plan and a transparent quote.
            </p>

            <div className={styles.links}>
              <a href="mailto:info@bytegigslabs.com" className={styles.contactLink}>
                <div className={styles.linkIcon}><Mail size={17} strokeWidth={1.7} /></div>
                <div>
                  <p className={styles.linkLabel}>Email</p>
                  <p className={styles.linkValue}>info@bytegigslabs.com</p>
                </div>
              </a>
              <a href="tel:+254716738500" className={styles.contactLink}>
                <div className={styles.linkIcon}><Phone size={17} strokeWidth={1.7} /></div>
                <div>
                  <p className={styles.linkLabel}>Phone</p>
                  <p className={styles.linkValue}>+254 716 738 500</p>
                </div>
              </a>
              <div className={styles.contactLink}>
                <div className={styles.linkIcon}><MapPin size={17} strokeWidth={1.7} /></div>
                <div>
                  <p className={styles.linkLabel}>Location</p>
                  <p className={styles.linkValue}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`fade-up ${styles.right}`}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Start a Conversation</h3>
              <p className={styles.cardSub}>
                The fastest way to reach us is via WhatsApp or email. We will
                schedule a free discovery call within 24 hours.
              </p>

              <div className={styles.cardActions}>
                <a
                  href="https://api.whatsapp.com/send?phone=254716738500&text=Hello%20ByteGigs%20Labs%2C%20I%20would%20like%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnWa}
                >
                  <MessageCircle size={18} strokeWidth={1.7} />
                  Chat on WhatsApp
                </a>
                <a href="mailto:info@bytegigslabs.com" className={styles.btnEmail}>
                  <Mail size={18} strokeWidth={1.7} />
                  Send an Email
                </a>
              </div>

              <div className={styles.divider} />

              <p className={styles.note}>
                Prefer a call? Dial <a href="tel:+254716738500" className={styles.noteLink}>+254 716 738 500</a> directly — available Mon–Sat, 8am–8pm EAT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
