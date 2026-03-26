'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const offices = [
  { city: 'Lahore', address: 'Main Boulevard, Gulberg III, Lahore', phone: '+92 42 0000000' },
  { city: 'Karachi', address: 'Clifton Block 5, Karachi', phone: '+92 21 0000000' },
  { city: 'Islamabad', address: 'Blue Area, F-7 Markaz, Islamabad', phone: '+92 51 0000000' },
];

const destinations = [
  'United Kingdom', 'United States', 'Canada', 'Australia',
  'Ireland', 'Germany', 'Türkiye', 'Malaysia', 'New Zealand', 'UAE', 'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', destination: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ background: 'white', padding: '100px 24px', overflow: 'hidden' }}
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
                Get In Touch
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, color: '#0d0d1a',
              lineHeight: 1.15, marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Start Your{' '}
              <span style={{ color: '#2100B1' }}>Journey</span>{' '}Today
            </h2>

            <p style={{
              fontSize: '17px', color: '#666',
              maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
            }}>
              Book a free consultation and take the first step towards your dream university.
            </p>

            <div style={{
              width: '60px', height: '3px', borderRadius: '2px',
              background: 'linear-gradient(90deg, #2100B1, #ED4B00)',
              margin: '24px auto 0',
            }} />
          </motion.div>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick info cards */}
            {[
              { icon: Phone, title: 'Call Us', info: '+92 300 0000000', sub: 'Mon–Sat, 9am–7pm', color: '#2100B1' },
              { icon: Mail, title: 'Email Us', info: 'info@edxconsultants.com', sub: 'We reply within 2 hours', color: '#ED4B00' },
              { icon: Clock, title: 'Office Hours', info: 'Mon – Saturday', sub: '9:00 AM – 7:00 PM', color: '#2100B1' },
              { icon: MessageSquare, title: 'WhatsApp', info: '+92 300 0000000', sub: 'Quick responses', color: '#ED4B00' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  marginBottom: '12px',
                  background: '#fafafa',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.background = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#fafafa'; }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                  background: item.color === '#2100B1' ? 'rgba(33,0,177,0.08)' : 'rgba(237,75,0,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon size={20} color={item.color} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#999', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.title}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0d0d1a' }}>{item.info}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{item.sub}</div>
                </div>
              </motion.div>
            ))}

            {/* Offices */}
            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0d0d1a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#ED4B00" /> Our Offices
              </h3>
              {offices.map((office, i) => (
                <div key={office.city} style={{
                  padding: '14px 0',
                  borderBottom: i < offices.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2100B1' }}>{office.city}</div>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>{office.address}</div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '2px' }}>{office.phone}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px 36px',
              boxShadow: '0 20px 60px rgba(33,0,177,0.1)',
              border: '1px solid rgba(33,0,177,0.08)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={64} color="#22c55e" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0d0d1a', marginBottom: '12px' }}>
                  Request Received!
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7 }}>
                  Thank you! Our team will contact you within 2 hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', destination: '', service: '', message: '' }); }}
                  style={{
                    marginTop: '24px', padding: '12px 28px',
                    background: '#2100B1', color: 'white',
                    borderRadius: '8px', border: 'none', cursor: 'pointer',
                    fontSize: '14px', fontWeight: 700,
                  }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0d0d1a', marginBottom: '8px' }}>
                  Book Free Consultation
                </h3>
                <p style={{ fontSize: '14px', color: '#888', marginBottom: '28px' }}>
                  Fill the form and we'll get back to you within 2 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Name + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        required placeholder="Your full name"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#2100B1'}
                        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        required placeholder="+92 300 0000000"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#2100B1'}
                        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      required type="email" placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#2100B1'}
                      onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  {/* Destination + Service */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle}>Destination *</label>
                      <select
                        name="destination" value={form.destination} onChange={handleChange}
                        required style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = '#2100B1'}
                        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                      >
                        <option value="">Select country</option>
                        {destinations.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Service Needed</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = '#2100B1'}
                        onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                      >
                        <option value="">Select service</option>
                        <option>University Admissions</option>
                        <option>Visa Assistance</option>
                        <option>Scholarship Guidance</option>
                        <option>IELTS / PTE Prep</option>
                        <option>Career Counseling</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Message (Optional)</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us about your academic background and goals..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                      onFocus={e => e.target.style.borderColor = '#2100B1'}
                      onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%', padding: '15px',
                      background: loading ? '#999' : '#ED4B00',
                      color: 'white', border: 'none',
                      borderRadius: '8px', fontSize: '15px', fontWeight: 700,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      transition: 'all 0.2s',
                      boxShadow: '0 6px 20px rgba(237,75,0,0.3)',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#cc3f00'; }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#ED4B00'; }}
                  >
                    {loading ? 'Sending...' : (
                      <>
                        Send Request
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block', fontSize: '12px', fontWeight: 600,
  color: '#555', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em',
};

const inputStyle = {
  width: '100%', padding: '11px 14px',
  borderRadius: '8px', border: '1.5px solid #e5e7eb',
  fontSize: '14px', color: '#333',
  outline: 'none', background: '#fafafa',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};
