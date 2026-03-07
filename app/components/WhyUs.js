'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  Users,
  Trophy,
  HeartHandshake,
  Globe,
  BadgeCheck,
  Lightbulb,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: '98% Visa Success Rate',
    desc: 'Our dedicated visa team has an outstanding track record. We know exactly what embassies look for and prepare your file accordingly.',
    color: '#2100B1',
  },
  {
    icon: Clock,
    title: 'End-to-End Support',
    desc: 'From the first consultation to post-arrival settling — we are with you at every single step. You are never alone in this journey.',
    color: '#ED4B00',
  },
  {
    icon: Trophy,
    title: '10+ Years of Experience',
    desc: 'Over a decade of expertise in international admissions means we have seen every scenario and know exactly how to handle your case.',
    color: '#2100B1',
  },
  {
    icon: Globe,
    title: '200+ Partner Universities',
    desc: 'Our direct partnerships with universities across 10 countries give your application a significant edge over self-applicants.',
    color: '#ED4B00',
  },
  {
    icon: HeartHandshake,
    title: 'Honest & Transparent',
    desc: 'We give you real advice — not just what you want to hear. If a university is not right for you, we will tell you upfront.',
    color: '#2100B1',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Counselors',
    desc: 'Our counselors are trained, certified, and regularly updated on the latest admission requirements and immigration policies.',
    color: '#ED4B00',
  },
  {
    icon: Users,
    title: '5,000+ Success Stories',
    desc: 'Over 5,000 Pakistani students have achieved their study abroad dreams with our guidance. Your success story is next.',
    color: '#2100B1',
  },
  {
    icon: Lightbulb,
    title: 'Personalized Roadmap',
    desc: 'No two students are the same. We create a custom plan for each student based on their academic background, budget, and goals.',
    color: '#ED4B00',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        background: 'linear-gradient(160deg, #0d0d1a 0%, #160040 50%, #0d0d1a 100%)',
        padding: '100px 24px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(33,0,177,0.15)', filter: 'blur(80px)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(237,75,0,0.1)', filter: 'blur(80px)', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px', borderRadius: '999px', marginBottom: '20px',
              background: 'rgba(237,75,0,0.12)',
              border: '1px solid rgba(237,75,0,0.25)',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ED4B00', display: 'inline-block' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#ED4B00', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Why Choose Us
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, color: 'white',
              lineHeight: 1.15, marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Why Students{' '}
              <span style={{ color: '#ED4B00' }}>Trust</span>{' '}EdX
            </h2>

            <p style={{
              fontSize: '17px', color: 'rgba(255,255,255,0.55)',
              maxWidth: '520px', margin: '0 auto', lineHeight: 1.7,
            }}>
              Thousands of students choose us every year — not by accident, but because of the results we deliver and the trust we build.
            </p>

            <div style={{
              width: '60px', height: '3px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #2100B1, #ED4B00)',
              margin: '24px auto 0',
            }} />
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '80px',
        }}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                padding: '32px 28px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.borderColor = reason.color === '#2100B1'
                  ? 'rgba(33,0,177,0.4)' : 'rgba(237,75,0,0.4)';
                e.currentTarget.style.boxShadow = reason.color === '#2100B1'
                  ? '0 12px 40px rgba(33,0,177,0.2)' : '0 12px 40px rgba(237,75,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: reason.color === '#2100B1'
                  ? 'linear-gradient(90deg, #2100B1, #0ea5e9)'
                  : 'linear-gradient(90deg, #ED4B00, #ff9a00)',
              }} />

              {/* Icon */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: reason.color === '#2100B1'
                  ? 'rgba(33,0,177,0.15)' : 'rgba(237,75,0,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '18px',
              }}>
                <reason.icon size={24} color={reason.color} strokeWidth={1.8} />
              </div>

              <h3 style={{
                fontSize: '17px', fontWeight: 700,
                color: 'white', marginBottom: '10px', lineHeight: 1.3,
              }}>
                {reason.title}
              </h3>

              <p style={{
                fontSize: '14px', color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
              }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: '20px',
            padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 64px)',
            background: 'linear-gradient(135deg, #2100B1 0%, #3d00cc 50%, #ED4B00 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decoration */}
          <div style={{
            position: 'absolute', top: '-40px', right: '10%',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', right: '25%',
            width: '160px', height: '160px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          }} />

          <div style={{ position: 'relative' }}>
            <h3 style={{
              fontSize: 'clamp(22px, 3.5vw, 34px)',
              fontWeight: 800, color: 'white',
              marginBottom: '8px', letterSpacing: '-0.01em',
            }}>
              Ready to Start Your Journey?
            </h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>
              Book a free consultation today — no commitment, just clarity.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 36px',
              background: 'white',
              color: '#2100B1',
              borderRadius: '8px',
              fontSize: '15px', fontWeight: 800,
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'all 0.2s',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)'; }}
          >
            Book Free Consultation
          </a>
        </motion.div>

      </div>
    </section>
  );
}