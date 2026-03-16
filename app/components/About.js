"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Shield,
  Star,
} from "lucide-react";
import { aboutContent } from "@/app/data/services";
import Link from "next/link";

const achievements = [
  { number: "10+", label: "Years Experience" },
  { number: "5,000+", label: "Students Placed" },
  { number: "200+", label: "Partner Universities" },
  { number: "98%", label: "Visa Success Rate" },
];

const valueIcons = [Target, Heart, Shield];

export default function About() {
  const { split, ceo, values } = aboutContent;

  return (
    <section
      id="about"
      style={{ background: "white", padding: "80px 24px 0px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ── SPLIT LAYOUT ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(33,0,177,0.15)",
                position: "relative",
              }}
            >
              <img
                src="/consultants.jpeg"
                alt="EdX Consultants Team"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(33,0,177,0.2) 0%, transparent 60%)",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "white",
                borderRadius: "16px",
                padding: "16px 20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                border: "1px solid rgba(237,75,0,0.15)",
                minWidth: "160px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <Star size={14} color="#ED4B00" fill="#ED4B00" />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#ED4B00",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Trusted Since
                </span>
              </div>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}
              >
                Years of Excellence
              </div>
            </motion.div>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                zIndex: -1,
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(33,0,177,0.06)",
              }}
            />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "16px",
                background: "rgba(33,0,177,0.07)",
                border: "1px solid rgba(33,0,177,0.15)",
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
                  color: "#2100B1",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                About Us
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "#0d0d1a",
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              {split.heading.split("Study Abroad")[0]}
              <span style={{ color: "#2100B1" }}>Study Abroad</span>
              <br />
              {split.heading.split("Reality")[0].split("into ")[1]
                ? "Dreams into "
                : ""}
              <span style={{ color: "#ED4B00" }}>Reality</span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#555",
                lineHeight: 1.75,
                marginBottom: "20px",
              }}
            >
              {split.text}
            </p>

            {split.points.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <CheckCircle
                  size={17}
                  color="#ED4B00"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span
                  style={{ fontSize: "14px", color: "#444", lineHeight: 1.5 }}
                >
                  <strong>{point.title}:</strong> {point.desc}
                </span>
              </div>
            ))}

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "24px",
                padding: "13px 28px",
                background: "#2100B1",
                color: "white",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(33,0,177,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1a0090";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2100B1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Free Consultation <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* ── ACHIEVEMENTS BAR ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "80px",
            boxShadow: "0 20px 60px rgba(33,0,177,0.12)",
          }}
        >
          {achievements.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "32px 20px",
                textAlign: "center",
                background: i % 2 === 0 ? "#2100B1" : "#ED4B00",
                borderRight:
                  i < achievements.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "6px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div> */}

        {/* ── CEO MESSAGE ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 100%)",
            borderRadius: "24px",
            padding: "clamp(28px, 5vw, 52px)",
            marginBottom: "80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(237,75,0,0.08)",
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "15%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(33,0,177,0.12)",
              filter: "blur(60px)",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "999px",
              marginBottom: "24px",
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
                fontSize: "12px",
                fontWeight: 600,
                color: "#ED4B00",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Message from our CEO
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "48px",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "relative", order: 1 }}>
              <div
                style={{
                  fontSize: "80px",
                  color: "#ED4B00",
                  opacity: 0.25,
                  fontFamily: "Georgia, serif",
                  lineHeight: "0.75",
                  height: "44px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  userSelect: "none",
                }}
              >
                "
              </div>
              {ceo.quote.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "clamp(13px, 1.6vw, 15px)",
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.8,
                    marginBottom: "12px",
                  }}
                >
                  {para}
                </p>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#ED4B00",
                    borderRadius: "2px",
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    fontStyle: "italic",
                  }}
                >
                  Warm Regards, {ceo.name}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                order: 2,
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(237,75,0,0.5)",
                  boxShadow:
                    "0 0 0 8px rgba(237,75,0,0.08), 0 20px 60px rgba(0,0,0,0.4)",
                  background: "linear-gradient(135deg, #2100B1, #ED4B00)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/Dr.-Syed-Shujaat-Ali-Shah.jpg"
                  alt={ceo.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML =
                      '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%"><span style="font-size:70px;font-weight:800;color:white;font-family:sans-serif">S</span></div>';
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "16px 24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "3px",
                  }}
                >
                  {ceo.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#ED4B00",
                    fontWeight: 600,
                    marginBottom: "3px",
                  }}
                >
                  Ph.D Marketing
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.04em",
                  }}
                >
                  CEO · EdX Consultants Pvt. Ltd.
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* ── VALUES ── */}
        {/* <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h3
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              color: "#0d0d1a",
              letterSpacing: "-0.02em",
            }}
          >
            What Drives <span style={{ color: "#2100B1" }}>Us</span>
          </h3>
          <div
            style={{
              width: "60px",
              height: "3px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #2100B1, #ED4B00)",
              margin: "14px auto 0",
            }}
          />
        </div> */}

        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
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
                style={{
                  padding: "28px 24px",
                  borderRadius: "16px",
                  background: "#f8f9ff",
                  border: "1px solid rgba(33,0,177,0.08)",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(33,0,177,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      i === 1 ? "rgba(237,75,0,0.08)" : "rgba(33,0,177,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon
                    size={22}
                    color={i === 1 ? "#ED4B00" : "#2100B1"}
                    strokeWidth={1.8}
                  />
                </div>
                <h4
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0d0d1a",
                    marginBottom: "10px",
                  }}
                >
                  {val.title}
                </h4>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
