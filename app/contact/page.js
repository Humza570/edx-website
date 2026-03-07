"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const offices = [
  {
    city: "Lahore",
    address: "Main Boulevard, Gulberg III, Lahore",
    phone: "+92 42 0000000",
    email: "lahore@edxconsultants.com",
    hours: "Mon–Sat: 9am – 7pm",
    mapUrl: "https://maps.google.com",
    flag: "🏙️",
  },
  {
    city: "Islamabad",
    address: "Blue Area, F-7 Markaz, Islamabad",
    phone: "+92 51 0000000",
    email: "islamabad@edxconsultants.com",
    hours: "Mon–Sat: 9am – 7pm",
    mapUrl: "https://maps.google.com",
    flag: "🏛️",
  },
  {
    city: "Karachi",
    address: "Clifton Block 5, Karachi",
    phone: "+92 21 0000000",
    email: "karachi@edxconsultants.com",
    hours: "Mon–Sat: 9am – 7pm",
    mapUrl: "https://maps.google.com",
    flag: "🌊",
  },
];

const faqs = [
  {
    q: "Is the initial consultation really free?",
    a: "Yes, 100% free with no obligations. Our first session is purely to understand your goals and give you an honest assessment of your options.",
  },
  {
    q: "How long does the entire process take?",
    a: "From initial consultation to visa approval typically takes 3–6 months depending on the country, university, and intake. We guide you through every step.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "While no consultant can legally guarantee a visa, our 98% success rate speaks for itself. We prepare your file to the highest standard to maximize your chances.",
  },
  {
    q: "What documents do I need to bring to my first meeting?",
    a: "Just your academic transcripts and a clear idea of your goals. Our counselors will guide you on what else is needed after understanding your profile.",
  },
  {
    q: "Can you help with IELTS preparation too?",
    a: "Yes! We offer dedicated IELTS and PTE preparation coaching alongside our consultancy services.",
  },
];

const destinations = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "Ireland",
  "Germany",
  "Turkey",
  "Malaysia",
  "New Zealand",
  "UAE",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)",
          paddingTop: "160px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(33,0,177,0.15)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(237,75,0,0.1)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
              justifyContent: "center",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Home
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span
              style={{ fontSize: "13px", color: "#ED4B00", fontWeight: 600 }}
            >
              Contact
            </span>
          </div>

          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "20px",
                background: "rgba(237,75,0,0.12)",
                border: "1px solid rgba(237,75,0,0.25)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ED4B00",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ED4B00",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Get in Touch
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Let's Build Your
              <br />
              <span style={{ color: "#ED4B00" }}>Future Together</span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Reach out to our team. Whether you have a question or are ready to
              apply — we are here and happy to help.
            </p>
          </div>

          {/* Quick contact cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: Phone,
                label: "Call Us",
                val: "+92 300 0000000",
                sub: "Mon–Sat, 9am–7pm",
                color: "#2100B1",
                href: "tel:+923000000000",
              },
              {
                icon: MessageSquare,
                label: "WhatsApp",
                val: "+92 300 0000000",
                sub: "Quick responses",
                color: "#25D366",
                href: "https://wa.me/923000000000",
              },
              {
                icon: Mail,
                label: "Email Us",
                val: "info@edxconsultants.com",
                sub: "Reply within 2 hours",
                color: "#ED4B00",
                href: "mailto:info@edxconsultants.com",
              },
              {
                icon: Clock,
                label: "Working Hours",
                val: "Mon – Saturday",
                sub: "9:00 AM – 7:00 PM",
                color: "#2100B1",
                href: null,
              },
            ].map(({ icon: Icon, label, val, sub, color, href }) => (
              <a
                key={label}
                href={href || "#"}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "16px",
                    padding: "20px",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.2s",
                    cursor: href ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => {
                    if (href) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: `${color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.4)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "2px",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}
                  >
                    {sub}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Map Section */}
      <div style={{ background: "white", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div>
              <div style={{ marginBottom: "32px" }}>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    color: "#0d0d1a",
                    letterSpacing: "-0.02em",
                    marginBottom: "8px",
                  }}
                >
                  Book a <span style={{ color: "#2100B1" }}>Free</span>{" "}
                  Consultation
                </h2>
                <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.7 }}>
                  Fill the form and a counselor will contact you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "60px 40px",
                    background: "#f8f9ff",
                    borderRadius: "20px",
                    border: "1px solid rgba(33,0,177,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(34,197,94,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <CheckCircle size={36} color="#22c55e" />
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#0d0d1a",
                      marginBottom: "10px",
                    }}
                  >
                    You're All Set!
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#666",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    Thank you! One of our counselors will call or WhatsApp you
                    within 2 hours to schedule your free session.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        destination: "",
                        service: "",
                        message: "",
                      });
                    }}
                    style={{
                      padding: "12px 28px",
                      background: "#2100B1",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2100B1")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 300 0000000"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2100B1")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#2100B1")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Destination *</label>
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        required
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2100B1")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                      >
                        <option value="">Select country</option>
                        {destinations.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Service</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2100B1")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
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

                  <div>
                    <label style={labelStyle}>Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your academic background and goals..."
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: "100px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#2100B1")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "16px",
                      background: loading ? "#999" : "#ED4B00",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxShadow: "0 6px 24px rgba(237,75,0,0.3)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "#cc3f00";
                    }}
                    onMouseLeave={(e) => {
                      if (!loading)
                        e.currentTarget.style.background = "#ED4B00";
                    }}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} /> Send Request
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "#aaa",
                      textAlign: "center",
                    }}
                  >
                    🔒 Your info is safe. We never share your data with third
                    parties.
                  </p>
                </form>
              )}
            </div>

            {/* Right — Offices + Social */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  letterSpacing: "-0.02em",
                  marginBottom: "32px",
                }}
              >
                Visit Our <span style={{ color: "#ED4B00" }}>Offices</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "40px",
                }}
              >
                {offices.map((office, i) => (
                  <div
                    key={office.city}
                    style={{
                      padding: "24px",
                      borderRadius: "16px",
                      background: "#f8f9ff",
                      border: "1px solid rgba(33,0,177,0.08)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(33,0,177,0.1)";
                      e.currentTarget.style.background = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background = "#f8f9ff";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background:
                            i % 2 === 0
                              ? "rgba(33,0,177,0.1)"
                              : "rgba(237,75,0,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          flexShrink: 0,
                        }}
                      >
                        {office.flag}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#0d0d1a",
                            marginBottom: "4px",
                          }}
                        >
                          {office.city} Office
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#666",
                            marginBottom: "8px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "6px",
                          }}
                        >
                          <MapPin
                            size={13}
                            color="#888"
                            style={{ flexShrink: 0, marginTop: "2px" }}
                          />
                          {office.address}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                          }}
                        >
                          <a
                            href={`tel:${office.phone}`}
                            style={{
                              fontSize: "13px",
                              color: "#2100B1",
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Phone size={12} /> {office.phone}
                          </a>
                          <span
                            style={{
                              fontSize: "13px",
                              color: "#888",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <Clock size={12} /> {office.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div
                style={{
                  padding: "28px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #0d0d1a, #1a0050)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  Follow Us
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "20px",
                  }}
                >
                  Stay updated with the latest news, tips, and student stories.
                </p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[
                    { icon: Instagram, href: "#", color: "#E1306C" },
                    { icon: Facebook, href: "#", color: "#1877F2" },
                    { icon: Youtube, href: "#", color: "#FF0000" },
                    { icon: Linkedin, href: "#", color: "#0A66C2" },
                    { icon: Twitter, href: "#", color: "#1DA1F2" },
                  ].map(({ icon: Icon, href, color }) => (
                    <a
                      key={color}
                      href={href}
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = color;
                        e.currentTarget.style.borderColor = color;
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.06)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ background: "#f8f9ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "#0d0d1a",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#2100B1" }}>Questions</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#888" }}>
              Quick answers to the questions we get most often.
            </p>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #2100B1, #ED4B00)",
                borderRadius: "2px",
                margin: "20px auto 0",
              }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0d0d1a",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#2100B1"
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.3s",
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.8,
                      borderTop: "1px solid #f0f0f0",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #2100B1, #ED4B00)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}
        >
          Still Have Questions?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "480px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Our team is online and ready to help. Call, WhatsApp, or email us
          right now.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+923000000000"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "white",
              color: "#2100B1",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="https://wa.me/923000000000"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <MessageSquare size={16} /> WhatsApp Us
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  color: "#555",
  marginBottom: "6px",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1.5px solid #e5e7eb",
  fontSize: "14px",
  color: "#333",
  outline: "none",
  background: "#fafafa",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
  fontFamily: "inherit",
};
