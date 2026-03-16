"use client";

import { motion } from "framer-motion";
import { Target, Heart, Shield, Star } from "lucide-react";
import About from "../components/About";
import OurProcess from "../components/OurProcess";
import { aboutContent } from "@/app/data/services";

const valueIcons = [Target, Heart, Shield];

export default function AboutPage() {
  const { ceo, values } = aboutContent;

  return (
    <main>

      {/* ── Page Hero Banner ── */}
      <div style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)", paddingTop: "160px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(33,0,177,0.15)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(237,75,0,0.1)", filter: "blur(70px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            <a href="/" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>›</span>
            <span style={{ fontSize: "13px", color: "#ED4B00", fontWeight: 600 }}>About Us</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            Shaping Careers,<br />
            <span style={{ color: "#ED4B00" }}>Transforming Lives</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, maxWidth: "60vw", margin: "0 auto", textAlign: "center" }}>
            {aboutContent.ourStory.text}
          </p>
        </div>
      </div>

      {/* ── About Split Section ── */}
      <About />

      {/* ── CEO MESSAGE ── */}
      <div style={{ background: "white", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 100%)", borderRadius: "24px", padding: "clamp(28px, 5vw, 52px)", marginBottom: "80px", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(237,75,0,0.08)", filter: "blur(70px)" }} />
            <div style={{ position: "absolute", bottom: "-40px", left: "15%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(33,0,177,0.12)", filter: "blur(60px)" }} />

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "999px", marginBottom: "24px", background: "rgba(237,75,0,0.12)", border: "1px solid rgba(237,75,0,0.25)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ED4B00", display: "inline-block" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#ED4B00", letterSpacing: "0.06em", textTransform: "uppercase" }}>Message from our CEO</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px", alignItems: "center", position: "relative" }}>
              {/* Quote */}
              <div style={{ position: "relative", order: 1 }}>
                <div style={{ fontSize: "80px", color: "#ED4B00", opacity: 0.25, fontFamily: "Georgia, serif", lineHeight: "0.75", height: "44px", overflow: "hidden", marginBottom: "16px", userSelect: "none" }}>"</div>
                {ceo.quote.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "12px" }}>{para}</p>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ width: "32px", height: "2px", background: "#ED4B00", borderRadius: "2px" }} />
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>Warm Regards, {ceo.name}</span>
                </div>
              </div>

              {/* Photo */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", order: 2 }}>
                <div style={{ width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(237,75,0,0.5)", boxShadow: "0 0 0 8px rgba(237,75,0,0.08), 0 20px 60px rgba(0,0,0,0.4)", background: "linear-gradient(135deg, #2100B1, #ED4B00)", flexShrink: 0 }}>
                  <img
                    src="/Dr.-Syed-Shujaat-Ali-Shah.jpg"
                    alt={ceo.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><span style="font-size:70px;font-weight:800;color:white;font-family:sans-serif">S</span></div>';
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "16px 24px", backdropFilter: "blur(10px)" }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "white", marginBottom: "3px" }}>{ceo.name}</div>
                  <div style={{ fontSize: "12px", color: "#ED4B00", fontWeight: 600, marginBottom: "3px" }}>Ph.D Marketing</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>CEO · EdX Consultants Pvt. Ltd.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── VALUES ── */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h3 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#0d0d1a", letterSpacing: "-0.02em" }}>
              What Drives <span style={{ color: "#2100B1" }}>Us</span>
            </h3>
            <div style={{ width: "60px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #2100B1, #ED4B00)", margin: "14px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {values.map((val, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  style={{ padding: "28px 24px", borderRadius: "16px", background: "#f8f9ff", border: "1px solid rgba(33,0,177,0.08)", transition: "box-shadow 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(33,0,177,0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: i === 1 ? "rgba(237,75,0,0.08)" : "rgba(33,0,177,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    <Icon size={22} color={i === 1 ? "#ED4B00" : "#2100B1"} strokeWidth={1.8} />
                  </div>
                  <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#0d0d1a", marginBottom: "10px" }}>{val.title}</h4>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Our Process ── */}
      <OurProcess />

    </main>
  );
}