'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    university: 'University of Manchester, UK',
    program: 'MSc Computer Science',
    year: '2023',
    rating: 5,
    text: 'EdX Consultants made my dream of studying in the UK a reality. Their visa team was exceptional — they handled every document perfectly and I got my visa in just 3 weeks. I could not have done this without them.',
    avatar: 'AR',
    color: '#2100B1',
  },
  {
    name: 'Fatima Malik',
    university: 'University of Toronto, Canada',
    program: 'MBA Finance',
    year: '2023',
    rating: 5,
    text: 'I was confused about which university to choose and which program suited me. The counselors at EdX sat with me for hours, understood my goals, and suggested the perfect match. Got a scholarship too!',
    avatar: 'FM',
    color: '#ED4B00',
  },
  {
    name: 'Usman Tariq',
    university: 'Deakin University, Australia',
    program: 'Bachelor of Engineering',
    year: '2022',
    rating: 5,
    text: 'From application to landing in Melbourne — EdX was with me every step. Their pre-departure briefing was incredibly helpful. I knew exactly what to expect when I arrived. Highly recommended!',
    avatar: 'UT',
    color: '#2100B1',
  },
  {
    name: 'Sara Hussain',
    university: 'Technical University of Munich, Germany',
    program: 'MSc Data Science',
    year: '2023',
    rating: 5,
    text: 'Germany was not even on my radar until EdX showed me the opportunities there — top universities with low tuition. They helped me with everything including the blocked account and language requirements.',
    avatar: 'SH',
    color: '#ED4B00',
  },
  {
    name: 'Bilal Khan',
    university: 'University College Dublin, Ireland',
    program: 'MSc Cybersecurity',
    year: '2024',
    rating: 5,
    text: 'The team at EdX is genuinely passionate about helping students. My counselor was always available — even on weekends. Got into my first-choice university with a partial scholarship. Cannot thank them enough.',
    avatar: 'BK',
    color: '#2100B1',
  },
  {
    name: 'Ayesha Noor',
    university: 'Monash University, Malaysia',
    program: 'MBBS',
    year: '2022',
    rating: 5,
    text: 'As a medical student, the admission process was very complex. EdX guided me through every requirement with patience and expertise. Now I am in my 3rd year of MBBS — best decision of my life.',
    avatar: 'AN',
    color: '#ED4B00',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleCount = 3;

  const next = () => {
    setDirection(1);
    setCurrent(p => (p + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
  };

  const getVisible = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section
      id="testimonials"
      style={{ background: '#f8f9ff', padding: '100px 24px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px', borderRadius: '999px', marginBottom: '20px',
              background: 'rgba(33,0,177,0.07)',
              border: '1px solid rgba(33,0,177,0.15)',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ED4B00', display: 'inline-block' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#2100B1', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Student Stories
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, color: '#0d0d1a',
              lineHeight: 1.15, marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              What Our{' '}
              <span style={{ color: '#2100B1' }}>Students</span>{' '}Say
            </h2>

            <p style={{
              fontSize: '17px', color: '#666',
              maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
            }}>
              Real stories from real students who trusted us with their future.
            </p>

            <div style={{
              width: '60px', height: '3px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #2100B1, #ED4B00)',
              margin: '24px auto 0',
            }} />
          </motion.div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {getVisible().map((t, i) => (
            <motion.div
              key={t.name + current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 28px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top border */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: t.color === '#2100B1'
                  ? 'linear-gradient(90deg, #2100B1, #0ea5e9)'
                  : 'linear-gradient(90deg, #ED4B00, #ff9a00)',
              }} />

              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: '20px', right: '24px',
                opacity: 0.08,
              }}>
                <Quote size={48} color={t.color} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} color="#ED4B00" fill="#ED4B00" />
                ))}
              </div>

              {/* Text */}
              <p style={{
                fontSize: '14px', color: '#444',
                lineHeight: 1.8, marginBottom: '24px',
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>

              {/* Student info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color}, ${t.color === '#2100B1' ? '#0ea5e9' : '#ff9a00'})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: 'white', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0d0d1a' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: t.color, fontWeight: 600 }}>{t.university}</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{t.program} · {t.year}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <button
            onClick={prev}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1.5px solid rgba(33,0,177,0.2)',
              background: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2100B1', transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2100B1'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2100B1'; }}
          >
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', gap: '6px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px', borderRadius: '999px',
                  background: i === current ? '#ED4B00' : 'rgba(33,0,177,0.2)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1.5px solid rgba(33,0,177,0.2)',
              background: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2100B1', transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2100B1'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#2100B1'; }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
