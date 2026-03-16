"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Users,
  GraduationCap,
  Globe,
} from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Pakistan’s Trusted Partner for Global Education",
    heading: "Turn Your Study Abroad",
    highlight: "Dream into Reality",
    sub: "Start your international education journey with expert guidance for university admissions, scholarships, and student visas.",
    cta1: "Start Your Journey",
    cta2: "Our Services",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1920&q=85",
  },
  {
    id: 2,
    badge: "10+ Global Study Destinations",
    heading: "Study in Top",
    highlight: "Destinations Worldwide",
    sub: "Explore study opportunities in the UK, Canada, Australia, Europe, and more with guidance from experienced counselors.",
    cta1: "Explore Destinations",
    cta2: "Our Services",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1920&q=85",
  },
  {
    id: 3,
    badge: "1000+ Student Success Stories",
    heading: "Expert Support at",
    highlight: "Every Step",
    sub: "From choosing the right university to visa approval, our team supports you throughout your study abroad journey.",
    cta1: "Apply Now",
    cta2: "Our Services",
    image:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920&q=85",
  },
  // {
  //   id: 4,
  //   badge: "5000+ Students Successfully Placed",
  //   heading: "Australia",
  //   highlight: "Top Destinations",
  //   sub: "World-class education, post-study work rights, and a pathway to permanent residency — let us make it happen.",
  //   cta1: "Learn More",
  //   cta2: "Our Services",
  //   image:
  //     "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&q=85",
  // },
];

const stats = [
  { icon: Users, number: "1,000+", label: "Alumnis" },
  { icon: GraduationCap, number: "100+", label: "Partner Universities" },
  { icon: Globe, number: "10+", label: "Destinations" },
  { icon: Star, number: "98%", label: "Visa Success Ratio" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  const goTo = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [paused, goNext]);

  const slide = slides[current];

  /* slide variants */
  const bgVariants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%" }),
    center: { x: "0%" },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%" }),
  };

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── BACKGROUND SLIDES ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          {/* photo */}
          <img
            src={slide.image}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, rgba(10,5,40,0.82) 0%, rgba(33,0,177,0.55) 55%, rgba(10,5,40,0.75) 100%)",
            }}
          />
          {/* subtle grain / texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='white'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "140px 24px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "860px", width: "100%", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current + "-text"}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "999px",
                  marginBottom: "28px",
                  border: "1px solid rgba(237,75,0,0.45)",
                  background: "rgba(237,75,0,0.12)",
                }}
              >
                <Star size={13} color="#ED4B00" fill="#ED4B00" />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {slide.badge}
                </span>
              </div>

              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(40px, 7vw, 76px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.12,
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                {slide.heading}
                <br />
                <span style={{ color: "#ED4B00" }}>{slide.highlight}</span>
              </h1>

              {/* Divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{
                  height: "3px",
                  width: "80px",
                  background: "linear-gradient(90deg, #ED4B00, #2100B1)",
                  borderRadius: "2px",
                  margin: "0 auto 24px",
                  transformOrigin: "left",
                }}
              />

              {/* Subtext */}
              <p
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                  margin: "0 auto 40px",
                }}
              >
                {slide.sub}
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "15px 36px",
                    background: "#ED4B00",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    boxShadow: "0 6px 24px rgba(237,75,0,0.45)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#cc3f00";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ED4B00";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {slide.cta1}
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 36px",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    letterSpacing: "0.02em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {slide.cta2}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── SLIDER CONTROLS ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              marginTop: "52px",
            }}
          >
            {/* Prev Arrow */}
            <button
              onClick={goPrev}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <ArrowLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    height: "8px",
                    width: i === current ? "28px" : "8px",
                    borderRadius: "999px",
                    background:
                      i === current ? "#ED4B00" : "rgba(255,255,255,0.35)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.08em",
                minWidth: "36px",
                textAlign: "center",
              }}
            >
              {String(current + 1).padStart(2, "0")}/
              {String(slides.length).padStart(2, "0")}
            </span>

            {/* Next Arrow */}
            <button
              onClick={goNext}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.35)",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            gap: "0",
            display: "grid",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                padding: "20px 16px",
                borderRight: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <stat.icon size={32} color="#ED4B00" strokeWidth={1.6} />
              <div>
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.55)",
                    marginTop: "4px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
