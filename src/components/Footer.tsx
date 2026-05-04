import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const SERVICES_LINKS = [
  'POS System', 'Delivery System', 'Web Development',
  'Mobile Apps', 'Desktop Apps', 'Custom Systems',
  'Graphics Design', 'CCTV Surveillance', 'Biometric Attendance',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Image src="/logo.png" alt="ByteGigs Labs" width={160} height={44} className={styles.logo} style={{ height: 44, width: 'auto' }} />
            <p className={styles.brandText}>
              Precision-engineered technology for businesses across East Africa.
              We build software that removes friction and drives growth.
            </p>
            <div className={styles.brandContact}>
              <a href="mailto:info@bytegigslabs.com" className={styles.brandContactItem}>
                <Mail size={13} /> info@bytegigslabs.com
              </a>
              <a href="tel:+254716738500" className={styles.brandContactItem}>
                <Phone size={13} /> +254 716 738 500
              </a>
              <span className={styles.brandContactItem}>
                <MapPin size={13} /> Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className={styles.colTitle}>Services</h5>
            <ul className={styles.list}>
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services" className={styles.listLink}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className={styles.colTitle}>Company</h5>
            <ul className={styles.list}>
              {['Home', 'Why Us', 'Reviews', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ', '-')}`} className={styles.listLink}>{l}</a>
                </li>
              ))}
              <li>
                <a
                  href="https://g.page/r/CfTN0iFRgMalEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listLink}
                >
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} ByteGigs Labs. All rights reserved.</p>
          <p className={styles.bottomRight}>Built with precision. Delivered with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
