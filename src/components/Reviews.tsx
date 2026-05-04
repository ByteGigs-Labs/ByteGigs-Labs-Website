'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, ExternalLink } from 'lucide-react';
import type { GoogleReview, ReviewsResponse } from '@/app/api/reviews/route';
import styles from './Reviews.module.css';

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={i <= rating ? styles.starFilled : styles.starEmpty}
          fill={i <= rating ? '#38BDF8' : 'none'}
        />
      ))}
    </div>
  );
}

const AVATAR_COLORS = [
  { bg: 'rgba(56,189,248,.14)', color: '#38BDF8' },
  { bg: 'rgba(37,99,235,.16)',  color: '#60A5FA' },
  { bg: 'rgba(147,197,253,.14)', color: '#BFDBFE' },
  { bg: 'rgba(14,165,233,.14)', color: '#7DD3FC' },
  { bg: 'rgba(30,64,175,.18)', color: '#93C5FD' },
  { bg: 'rgba(59,130,246,.14)', color: '#60A5FA' },
];

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
}

function ReviewCard({ review, idx }: { review: GoogleReview; idx: number }) {
  const c = AVATAR_COLORS[idx % AVATAR_COLORS.length];
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div
          className={styles.avatar}
          style={{ background: c.bg, color: c.color }}
        >
          {initials(review.author)}
        </div>
        <div>
          <p className={styles.author}>{review.author}</p>
          <p className={styles.time}>{review.time}</p>
        </div>
      </div>
      <Stars rating={review.rating} />
      <p className={styles.text}>{review.text}</p>
      <div className={styles.badge}>
        <svg width="12" height="12" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span>Google Review</span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d: ReviewsResponse) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Pause on hover / touch
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => track.classList.add(styles.paused);
    const resume = () => track.classList.remove(styles.paused);
    const touchResume = () => setTimeout(resume, 1200);
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);
    track.addEventListener('touchstart', pause, { passive: true });
    track.addEventListener('touchend', touchResume, { passive: true });
    return () => {
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
      track.removeEventListener('touchstart', pause);
      track.removeEventListener('touchend', touchResume);
    };
  }, [data]);

  // Fade-up for header
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.fade-up');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  const reviews = data?.reviews ?? [];
  const doubled = [...reviews, ...reviews];
  const speed = Math.max(35, reviews.length * 6);

  return (
    <section id="reviews" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`fade-up ${styles.header}`}>
          <h2 className={styles.title}>Trusted by Businesses Across Kenya</h2>

          {data && (
            <div className={styles.overall}>
              <span className={styles.bigRating}>{data.averageRating.toFixed(1)}</span>
              <div>
                <Stars rating={Math.round(data.averageRating)} />
                <p className={styles.ratingCount}>{data.totalRatings} Google Reviews</p>
              </div>
            </div>
          )}

          <a
            href="https://g.page/r/CfTN0iFRgMalEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.leaveReview}
          >
            <ExternalLink size={14} />
            Leave Us a Review on Google
          </a>
        </div>
      </div>

      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <span>Loading reviews...</span>
        </div>
      )}

      {!loading && reviews.length > 0 && (
        <div className={styles.marqueeOuter}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />
          <div
            ref={trackRef}
            className={styles.track}
            style={{ animationDuration: `${speed}s` }}
          >
            {doubled.map((r, i) => (
              <ReviewCard key={i} review={r} idx={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
