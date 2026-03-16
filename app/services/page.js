'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Compass, GraduationCap, BookOpen, FileText, Award,
  Stamp, Plane, Home, MessageCircle, ArrowRight
} from 'lucide-react';

const services = [
  {
    slug: 'career-counseling',
    icon: Compass,
    title: 'Career Counseling',
    short: 'Identify your strengths, interests, and the right academic path to build a successful global career.',
    color: '#2100B1',
    tag: 'Most Popular',
  },
  {
    slug: 'university-selection',
    icon: GraduationCap,
    title: 'University Selection',
    short: 'We match you with the best universities worldwide based on your profile, budget, and career goals.',
    color: '#ED4B00',
    tag: null,
  },
  {
    slug: 'course-selection',
    icon: BookOpen,
    title: 'Course Selection',
    short: 'Choose the right program that aligns with your academic background and future career aspirations.',
    color: '#2100B1',
    tag: null,
  },
  {
    slug: 'admission-application',
    icon: FileText,
    title: 'Admission Application',
    short: 'We handle your entire application process — SOPs, LORs, documents — to maximize your chances.',
    color: '#ED4B00',
    tag: null,
  },
  {
    slug: 'scholarship-guidance',
    icon: Award,
    title: 'Scholarship Guidance',
    short: 'Discover and apply for scholarships that can significantly reduce your cost of studying abroad.',
    color: '#2100B1',
    tag: 'Save Money',
  },
  {
    slug: 'visa-assistance',
    icon: Stamp,
    title: 'Visa Assistance',
    short: 'Our dedicated visa team prepares your complete file for a 98% success rate across all major destinations.',
    color: '#2100B1',
    tag: '98% Success',
  },
  {
    slug: 'pre-departure-briefing',
    icon: Plane,
    title: 'Pre-Departure Briefing',
    short: 'Know exactly what to expect before you fly — packing, airport, arrival procedures, and cultural tips.',
    color: '#2100B1',
    tag: null,
  },
  {
    slug: 'accommodation-support',
    icon: Home,
    title: 'Accommodation Support',
    short: 'We help you find safe, affordable, and convenient housing options near your university.',
    color: '#ED4B00',
    tag: null,
  },
  {
    slug: 'initial-consultation',
    icon: MessageCircle,
    title: 'Initial Consultation',
    short: 'Your first step — a free, no-commitment session where we understand your goals and build your roadmap.',
    color: '#ED4B00',
    tag: 'Free',
  },
];

export default function ServicesPage() {
  const [cols, setCols] = useState('repeat(3, 1fr)');

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCols('1fr');
      else if (w < 1024) setCols('repeat(2, 1fr)');
      else setCols('repeat(3, 1fr)');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <main>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)',
        paddingTop: '160px', paddingBottom: '80px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(33,0,177,0.15)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(237,75,0,0.1)', filter: 'blur(70px)' }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            <a href="/" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>›</span>
            <span style={{ fontSize: '13px', color: '#ED4B00', fontWeight: 600 }}>Services</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '999px', marginBottom: '20px', background: 'rgba(237,75,0,0.12)', border: '1px solid rgba(237,75,0,0.25)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ED4B00', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#ED4B00', letterSpacing: '0.06em', textTransform: 'uppercase' }}>What We Offer</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Everything You Need,<br />
            <span style={{ color: '#ED4B00' }}>All in One Place</span>
          </h1>

          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            From your first consultation to the day you land at your dream university — we handle every step of your study abroad journey.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {[['09', 'Services'], ['13', 'Countries'], ['1,000+', 'Students'], ['98%', 'Visa Success']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ED4B00' }}>{num}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ background: '#f8f9ff', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0d0d1a', letterSpacing: '-0.02em', marginBottom: '12px' }}>
              Our <span style={{ color: '#2100B1' }}>Complete</span> Services
            </h2>
            <p style={{ fontSize: '16px', color: '#888', maxWidth: '480px', margin: '0 auto' }}>
              Click on any service to learn more about how we can help you.
            </p>
            <div style={{ width: '60px', height: '3px', borderRadius: '2px', background: 'linear-gradient(90deg, #2100B1, #ED4B00)', margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '24px' }}>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    background: 'white', borderRadius: '16px', padding: '32px 28px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s', cursor: 'pointer',
                    position: 'relative', overflow: 'hidden', height: '100%',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = service.color === '#2100B1'
                      ? '0 20px 50px rgba(33,0,177,0.12)' : '0 20px 50px rgba(237,75,0,0.12)';
                    e.currentTarget.style.borderColor = service.color === '#2100B1'
                      ? 'rgba(33,0,177,0.2)' : 'rgba(237,75,0,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                  }}
                >
                  {/* Top accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: service.color === '#2100B1' ? 'linear-gradient(90deg, #2100B1, #0ea5e9)' : 'linear-gradient(90deg, #ED4B00, #ff9a00)' }} />

                  {/* Tag */}
                  {service.tag && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: service.color, color: 'white', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', letterSpacing: '0.05em' }}>
                      {service.tag}
                    </div>
                  )}

                  {/* Icon */}
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: service.color === '#2100B1' ? 'rgba(33,0,177,0.08)' : 'rgba(237,75,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <service.icon size={24} color={service.color} strokeWidth={1.8} />
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0d0d1a', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.75, marginBottom: '20px' }}>{service.short}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: service.color, fontSize: '13px', fontWeight: 700 }}>
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ background: 'linear-gradient(135deg, #2100B1, #ED4B00)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'white', marginBottom: '16px', letterSpacing: '-0.01em' }}>
          Not Sure Where to Start?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Book a free consultation and our expert counselors will guide you through everything.
        </p>
        <Link
          href="/contact"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 40px', background: 'white', color: '#2100B1', borderRadius: '8px', fontSize: '15px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
        >
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}