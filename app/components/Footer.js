"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const footerLinks = {
  Services: [
    { label: "University Admissions", href: "/services/admission-application" },
    { label: "Visa Assistance", href: "/services/visa-assistance" },
    { label: "Scholarship Guidance", href: "/services/scholarship-guidance" },
    { label: "Career Counseling", href: "/services/career-counseling" },
    {
      label: "Pre-Departure Briefing",
      href: "/services/pre-departure-briefing",
    },
    { label: "Initial Consultation", href: "/services/initial-consultation" },
  ],
  Destinations: [
    { label: "United Kingdom", href: "/countries/united-kingdom" },
    { label: "United States", href: "/countries/united-states" },
    { label: "Canada", href: "/countries/canada" },
    { label: "Australia", href: "/countries/australia" },
    { label: "Germany", href: "/countries/germany" },
    { label: "Ireland", href: "/countries/ireland" },
    { label: "Türkiye", href: "/countries/Türkiye" },
    { label: "Malaysia", href: "/countries/malaysia" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/#why-us" },
    { label: "Student Stories", href: "/#success-stories" },
    { label: "Countries", href: "/countries" },
    // { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
};

// Custom SVG social icons
function FacebookIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function YoutubeIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon
        fill="#0a0a14"
        points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
      />
    </svg>
  );
}
function PinterestIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const socials = [
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/edxconsultants",
    label: "Instagram",
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=61569584940276",
    label: "Facebook",
  },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/edxconsultants/",
    label: "LinkedIn",
  },
  { Icon: PinterestIcon, href: "#", label: "Pinterest" },
];
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#ED4B00",
        border: "none",
        color: "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(237,75,0,0.45)",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#cc3f00";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#ED4B00";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <ArrowRight size={18} style={{ transform: "rotate(-90deg)" }} />
    </button>
  ) : null;
}
export default function Footer() {
  return (
    <footer style={{ background: "#0a0a14", color: "white" }}>
      {/* Main footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 32px 48px",
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
              src="/Edx-Logo-White.gif"
              alt="EdX Consultants"
              width={140}
              height={60}
              style={{
                height: "140px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                {links.map(({ label, href }) => (
                  <li key={label} style={{ marginBottom: "10px" }}>
                    <Link
                      href={href}
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
                      {label}
                    </Link>
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
              {
                icon: Phone,
                text: "+92 333 9989153",
                href: "tel:+923339989153",
              },
              {
                icon: Mail,
                text: "info@edxconsultants.com",
                href: "mailto:info@edxconsultants.com",
              },
              {
                icon: MapPin,
                text: "Building No. 55, First Floor, Johar Block B Phase 1, Lahore",
                href: null,
              },
            ].map(({ icon: Icon, text, href }) => (
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
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ED4B00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {text}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </span>
                )}
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
          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
            © 2025 EdX Consultants Pvt. Ltd. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Design & Developed By{" "}
            <span style={{ color: "#ED4B00" }}>EdX Tech Team</span>
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              // { label: "Terms of Service", href: "/terms-of-services" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: "11px",
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
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
