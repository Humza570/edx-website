'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Fayaz Ur Rehman',
    time: '2 months ago',
    rating: 5,
    text: 'EdX Consultant Pvt.Ltd was a great help in my journey. The CEO is super supportive and acts like a mentor, guiding you at every step. Thanks to their help, I\'m now living in Scotland with a good degree and a great job. Highly recommend them!',
    color: '#4285F4',
  },
  {
    name: 'Farhan Ullah',
    time: '3 months ago',
    rating: 5,
    text: 'When I started thinking to move abroad, I approached many consultants across Pakistan but none of them could satisfy me. Then someone told me about EdX Consultants PVT Ltd. They guided me very well and explained everything very professionally. Especially Syed Aurangzeb — he is the most professional guy I have ever met. Now I\'m very well settled in the UK!',
    color: '#EA4335',
  },
  {
    name: 'Zobia',
    time: '1 month ago',
    rating: 5,
    text: 'I\'m deeply grateful to EdX Consultants for their invaluable guidance throughout my foreign study journey. Their expertise and support helped me navigate the complex application process, securing admission to my dream university.',
    color: '#34A853',
  },
  {
    name: 'Farhan Ullah',
    time: '4 months ago',
    rating: 5,
    text: 'A special thanks to Aurangzeb, who went above and beyond in handling my case. His dedication and expertise made the entire process seamless and stress-free. I highly recommend EdX Consultants to all students aspiring to achieve their dream study destination.',
    color: '#FBBC05',
  },
  {
    name: 'Ahmed Raza',
    time: '5 months ago',
    rating: 5,
    text: 'EdX Consultants made my dream of studying in the UK a reality. Their visa team was exceptional — they handled every document perfectly and I got my visa approved quickly. I could not have done this without them. Truly a life-changing experience.',
    color: '#4285F4',
  },
  {
    name: 'Sara Hussain',
    time: '6 months ago',
    rating: 5,
    text: 'Germany was not even on my radar until EdX showed me the opportunities there — top universities with affordable tuition. They helped me with everything including all documentation. Very professional and supportive team throughout the entire process.',
    color: '#EA4335',
  },
  {
    name: 'Bilal Khan',
    time: '2 months ago',
    rating: 5,
    text: 'The team at EdX is genuinely passionate about helping students. My counselor was always available, even on weekends. Got into my first-choice university with a partial scholarship. Cannot thank them enough for their guidance and support.',
    color: '#34A853',
  },
  {
    name: 'Ayesha Noor',
    time: '7 months ago',
    rating: 5,
    text: 'As a medical student, the admission process was very complex. EdX guided me through every requirement with patience and expertise. Now I am in my 3rd year of MBBS — best decision of my life. Highly recommend EdX Consultants!',
    color: '#AA46BC',
  },
];

function GoogleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ rating, size = 14 }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={size} fill={s <= rating ? '#FBBC05' : 'transparent'} color={s <= rating ? '#FBBC05' : 'rgba(255,255,255,0.2)'} strokeWidth={1.5} />
      ))}
    </div>
  );
}

function Avatar({ name, color }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div style={{
      width: 46, height: 46, borderRadius: '50%', background: color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '15px', fontWeight: 700, color: 'white',
      border: '2px solid rgba(255,255,255,0.1)', flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

const VISIBLE = 3;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const getVisible = () =>
    Array.from({ length: Math.min(VISIBLE, total) }, (_, i) =>
      reviews[(current + i) % total]
    );

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  return (
    <section id="reviews" style={{ background: '#080810', padding: '110px 24px', overflow: 'hidden', position: 'relative' }}>

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(33,0,177,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,75,0,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '72px' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '28px', backdropFilter: 'blur(10px)' }}>
            <GoogleIcon size={18} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Verified Google Reviews</span>
          </div>

          <h2 style={{ fontSize: 'clamp(34px, 5vw, 58px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.03em', fontFamily: "'Playfair Display', Georgia, serif" }}>
            What Our{' '}
            <span style={{ background: 'linear-gradient(135deg, #4285F4, #2100B1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Students</span>
            {' '}Say
            <br />
            <span style={{ fontSize: '0.7em', fontStyle: 'italic', background: 'linear-gradient(135deg, #EA4335, #FBBC05, #34A853, #4285F4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>on Google</span>
          </h2>

          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.8 }}>
            Real reviews from real students — unfiltered, unedited, straight from Google.
          </p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginTop: '32px', padding: '14px 28px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <GoogleIcon size={22} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>4.9</span>
                <StarRating rating={5} size={16} />
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Based on 55 Google reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          <AnimatePresence mode="wait">
            {getVisible().map((review, i) => (
              <motion.div
                key={review.name + review.time + current + i}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4, borderColor: 'rgba(66,133,244,0.3)' }}
                style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '28px', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', position: 'relative', overflow: 'hidden', cursor: 'default', transition: 'border-color 0.3s' }}
              >
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(66,133,244,0.5), transparent)' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar name={review.name} color={review.color} />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{review.name}</div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>{review.time}</div>
                    </div>
                  </div>
                  <GoogleIcon size={18} />
                </div>

                <div style={{ marginBottom: '14px' }}><StarRating rating={review.rating} size={15} /></div>

                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {review.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button onClick={prev} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(66,133,244,0.2)'; e.currentTarget.style.borderColor = 'rgba(66,133,244,0.4)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
            <ChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '999px', background: i === current ? 'linear-gradient(90deg, #4285F4, #EA4335)' : 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} />
            ))}
          </div>

          <button onClick={next} style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(66,133,244,0.2)'; e.currentTarget.style.borderColor = 'rgba(66,133,244,0.4)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Google link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://search.google.com/local/reviews?placeid=ChIJt0ek-dlBGTkR6UupVMO1niM" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '10px 20px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
            <GoogleIcon size={14} />
            View all reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}