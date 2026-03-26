"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Pinterest SVG icon (lucide mein nahi hai)
const PinterestIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Countries", href: "/countries" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/edxconsultants",
    label: "Instagram",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/people/EdX-Consultants/61569584940276/",
    label: "Facebook",
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@EdxConsultants",
    label: "YouTube",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/edxconsultants/posts/?feedView=all",
    label: "LinkedIn",
  },
  {
    Icon: PinterestIcon,
    href: "https://www.pinterest.com/EdX_Consultants/",
    label: "Pinterest",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showTopBar = !isMobile && !scrolled;

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* ===== TOP INFO BAR ===== */}
      <div
        style={{
          background: "#2100B1",
          height: showTopBar ? "40px" : "0px",
          opacity: showTopBar ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Phone + Email + Timings */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <a
              href="tel:+923339989153"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                color: "rgba(255,255,255,0.80)",
                fontSize: "12px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
              }
            >
              <Phone size={11} strokeWidth={2} />
              <span>+92 333 9989153</span>
            </a>
            <a
              href="mailto:info@edxconsultants.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                color: "rgba(255,255,255,0.80)",
                fontSize: "12px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.80)")
              }
            >
              <Mail size={11} strokeWidth={2} />
              <span>info@edxconsultants.com</span>
            </a>
            {/* ✅ Timings — admissions email ki jagah */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                color: "rgba(255,255,255,0.80)",
                fontSize: "12px",
              }}
            >
              <Clock size={11} strokeWidth={2} />
              <span>
                Mon–Fri 10:00AM–06:00PM &nbsp;·&nbsp; Sat 12:00PM–04:00PM
              </span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "rgba(255,255,255,0.70)",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.70)")
                }
              >
                <Icon size={13} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #e8e8e8",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: isMobile ? "68px" : "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            transition: "height 0.3s",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src="/Edx-Logo.gif"
              alt="EdX Consultants"
              width={220}
              height={110}
              style={{
                height: isMobile ? "52px" : "130px",
                width: "auto",
                objectFit: "contain",
                transition: "height 0.3s",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      padding: "10px 22px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: isActive ? "#2100B1" : "#333",
                      textDecoration: "none",
                      borderRadius: "8px",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      background: isActive
                        ? "rgba(33,0,177,0.07)"
                        : "transparent",
                      borderBottom: isActive
                        ? "2px solid #2100B1"
                        : "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#2100B1";
                        e.currentTarget.style.background =
                          "rgba(33,0,177,0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#333";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <a
              href="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#ED4B00",
                color: "white",
                padding: "12px 28px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                flexShrink: 0,
                transition: "all 0.2s",
                boxShadow: "0 4px 15px rgba(237,75,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#cc3f00";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(237,75,0,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ED4B00";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(237,75,0,0.3)";
              }}
            >
              <Phone size={15} /> Free Consultation
            </a>
          )}

          {/* Mobile: call + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <a
                href="tel:+923339989153"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: "rgba(237,75,0,0.08)",
                  border: "1px solid rgba(237,75,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ED4B00",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: isOpen ? "#2100B1" : "rgba(33,0,177,0.06)",
                  border: "1px solid rgba(33,0,177,0.15)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isOpen ? "white" : "#2100B1",
                  transition: "all 0.2s",
                }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "white",
              borderTop: "3px solid #2100B1",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "13px 16px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: isActive ? "#2100B1" : "#333",
                      textDecoration: "none",
                      borderRadius: "8px",
                      background: isActive
                        ? "rgba(33,0,177,0.07)"
                        : "transparent",
                      transition: "all 0.2s",
                      borderLeft: isActive
                        ? "3px solid #2100B1"
                        : "3px solid transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#2100B1",
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "14px 24px",
                    background: "#ED4B00",
                    color: "white",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(237,75,0,0.3)",
                  }}
                >
                  <Phone size={15} /> Book Free Consultation
                </Link>

                {/* Social row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    padding: "6px 0 4px",
                  }}
                >
                  {socialLinks.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        color: "#aaa",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#2100B1")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#aaa")
                      }
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
