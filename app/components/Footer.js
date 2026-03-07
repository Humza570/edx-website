"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  ArrowRight,
  Heart,
} from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
    "University Admissions",
    "Visa Assistance",
    "Scholarship Guidance",
    "IELTS / PTE Preparation",
    "Career Counseling",
    "Pre-Departure Briefing",
  ],
  Destinations: [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "Ireland",
    "Turkey",
    "Malaysia",
  ],
  Company: [
    "About Us",
    "Why Choose Us",
    "Student Stories",
    "Our Team",
    "Careers",
    "Contact Us",
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a14", color: "white" }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 32px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Image
              src="/Edx_Logo.png"
              alt="EdX Consultants"
              width={140}
              height={60}
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "20px",
                filter: "brightness(0) invert(1)",
              }}
            />
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "24px",
                maxWidth: "260px",
              }}
            >
              Pakistan's leading study abroad consultancy. We have helped 5,000+
              students achieve their dream of international education.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ED4B00";
                    e.currentTarget.style.borderColor = "#ED4B00";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "10px" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ED4B00";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                      }}
                    >
                      <ArrowRight size={12} />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "white",
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Contact
            </h4>
            {[
              { icon: Phone, text: "+92 300 0000000" },
              { icon: Mail, text: "info@edxconsultants.com" },
              { icon: MapPin, text: "Gulberg III, Lahore, Pakistan" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <Icon
                  size={15}
                  color="#ED4B00"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}

            {/* Newsletter */}
            <div style={{ marginTop: "28px" }}>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "12px",
                }}
              >
                Get free study abroad tips:
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "13px",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  style={{
                    padding: "10px 16px",
                    background: "#ED4B00",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: 600,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#cc3f00")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#ED4B00")
                  }
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Bottom bar */}
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px 32px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 EdX Consultants Pvt. Ltd. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Made with <Heart size={12} color="#ED4B00" fill="#ED4B00" /> in
            Pakistan
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-services" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
