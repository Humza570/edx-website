"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = Array.from(
  { length: 26 },
  (_, i) => `/success-stories/SuccessStory (${i + 1}).jpeg`,
);

const VISIBLE = 4;
const AUTO_INTERVAL = 3000;

export default function SuccessStories() {
  const [start, setStart] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState({});
  const [paused, setPaused] = useState(false);

  const open = (i) => setLightbox(i);
  const close = () => setLightbox(null);

  const lbPrev = useCallback(
    () => setLightbox((i) => (i - 1 + images.length) % images.length),
    [],
  );
  const lbNext = useCallback(
    () => setLightbox((i) => (i + 1) % images.length),
    [],
  );

  const carPrev = () => {
    setPaused(true);
    setStart((s) => (s - 1 + images.length) % images.length);
    setTimeout(() => setPaused(false), 5000);
  };

  const carNext = () => {
    setPaused(true);
    setStart((s) => (s + 1) % images.length);
    setTimeout(() => setPaused(false), 5000);
  };

  const visibleImages = Array.from({ length: VISIBLE }, (_, i) => ({
    src: images[(start + i) % images.length],
    idx: (start + i) % images.length,
  }));

  // ── Preload ALL images on mount ──
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new window.Image();
      img.onload = () => setLoaded((p) => ({ ...p, [i]: true }));
      img.onerror = () => setLoaded((p) => ({ ...p, [i]: true }));
      img.src = src;
    });
  }, []);

  // ── Auto slider ──
  useEffect(() => {
    if (paused || lightbox !== null) return;
    const timer = setInterval(() => {
      setStart((s) => (s + 1) % images.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, lightbox]);

  // ── Keyboard for lightbox ──
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, lbPrev, lbNext]);

  // ── Lock scroll when lightbox open ──
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="success-stories"
      style={{
        background:
          "linear-gradient(160deg, #0d0d1a 0%, #160040 50%, #0d0d1a 100%)",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(33,0,177,0.12)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(237,75,0,0.08)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
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
              Student Achievements
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Our <span style={{ color: "#ED4B00" }}>Success</span> Stories
          </h2>

          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every visa granted, every scholarship won, every university
            admission — a new life transformed. Here are some of our proud
            students.
          </p>

          <div
            style={{
              width: "60px",
              height: "3px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #2100B1, #ED4B00)",
              margin: "24px auto 0",
            }}
          />
        </motion.div>

        {/* Carousel */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev button */}
          <button
            onClick={carPrev}
            style={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              zIndex: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ED4B00";
              e.currentTarget.style.borderColor = "#ED4B00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="popLayout">
              {visibleImages.map(({ src, idx }, i) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => open(idx)}
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    aspectRatio: "1 / 1",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(237,75,0,0.4)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(237,75,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Always render img — show when loaded */}
                  <img
                    src={src}
                    alt={`Success Story ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: loaded[idx] ? 1 : 0,
                      transition: "opacity 0.4s",
                      position: "absolute",
                      inset: 0,
                    }}
                  />

                  {/* Skeleton shown while not loaded */}
                  {!loaded[idx] && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
                          animation: "shimmer 1.5s infinite",
                        }}
                      />
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="card-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(13,13,26,0)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.3s",
                    }}
                  >
                    <div
                      className="card-zoom"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.3s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "#ED4B00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 20px rgba(237,75,0,0.5)",
                        }}
                      >
                        <ZoomIn size={20} color="white" />
                      </div>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "white",
                          letterSpacing: "0.05em",
                        }}
                      >
                        VIEW
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={carNext}
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              zIndex: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ED4B00";
              e.currentTarget.style.borderColor = "#ED4B00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: "28px",
            }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPaused(true);
                  setStart(i);
                  setTimeout(() => setPaused(false), 5000);
                }}
                style={{
                  width: i === start ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "999px",
                  background: i === start ? "#ED4B00" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {[
            { num: "1,000+", label: "Students Placed" },
            { num: "98%", label: "Visa Success Rate" },
            { num: "13", label: "Countries" },
            { num: "100+", label: "Partner Universities" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              style={{
                flex: "1 1 150px",
                padding: "28px 20px",
                textAlign: "center",
                background:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.05)",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 900,
                  color: "#ED4B00",
                  letterSpacing: "-0.02em",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: "4px",
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "560px",
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              }}
            >
              <img
                src={images[lightbox]}
                alt={`Success Story ${lightbox + 1}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "999px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {lightbox + 1} / {images.length}
              </div>
            </motion.div>

            {/* Close */}
            <button
              onClick={close}
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s",
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ED4B00";
                e.currentTarget.style.borderColor = "#ED4B00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              <X size={18} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lbPrev();
              }}
              style={{
                position: "fixed",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s",
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                lbNext();
              }}
              style={{
                position: "fixed",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s",
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .card-overlay:hover { background: rgba(13,13,26,0.55) !important; }
        .card-overlay:hover .card-zoom { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
