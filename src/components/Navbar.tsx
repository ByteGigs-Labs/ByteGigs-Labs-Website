'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <Image src="/logo.png" alt="ByteGigs Labs" width={160} height={44} priority style={{ height: 44, width: 'auto' }} />
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button className={styles.link} onClick={() => handleNav(l.href)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href="https://api.whatsapp.com/send?phone=254716738500&text=Hello%20ByteGigs%20Labs%2C%20I%20need%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Get Started
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mobile}>
          {NAV_LINKS.map((l) => (
            <button key={l.href} className={styles.mobileLink} onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=254716738500&text=Hello%20ByteGigs%20Labs%2C%20I%20need%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
