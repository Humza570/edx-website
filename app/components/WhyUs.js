"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  Clock,
  Users,
  Trophy,
  HeartHandshake,
  Globe,
  BadgeCheck,
  Lightbulb,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "End-to-End Support",
    desc: "Every step of your study abroad journey is supported by our team, from the initial consultation to the time you settle in your new country.",
    color: "#ED4B00",
  },
  {
    icon: Trophy,
    title: "10+ Years of Experience",
    desc: "With more than ten years of experience in international admissions, we are familiar with every stage of the procedure and know how to professionally handle each case.",
    color: "#2100B1",
  },
  {
    icon: Globe,
    title: "100+ Partner Universities",
    desc: "Students have access to a vast array of programs and opportunities worldwide thanks to our partnerships with universities in ten different countries.",
    color: "#ED4B00",
  },
  {
    icon: HeartHandshake,
    title: "Sincere and Open Advice",
    desc: "Based on your profile, we offer frank advice. We point you in the direction of better options if a program or university isn't the right fit.",
    color: "#2100B1",
  },
  {
    icon: BadgeCheck,
    title: "Certified Counselors",
    desc: "Our counsellors have received professional training and are kept up to date on visa regulations and admission requirements.",
    color: "#ED4B00",
  },
  {
    icon: Users,
    title: "1,000+ Student Success Stories",
    desc: "More than 1,000 Pakistani students have achieved their study abroad goals with our guidance and support.",
    color: "#2100B1",
  },
  {
    icon: Lightbulb,
    title: "Personalized Study Plan",
    desc: "Every student is unique. We create a customized roadmap based on your academic background, career goals, and budget.",
    color: "#ED4B00",
  },
  {
    icon: ShieldCheck,
    title: "98% Visa Success Rate",
    desc: "Our hard-working visa team has an exceptional history. We prepare your file in accordance with the specific requirements that embassies have.",
    color: "#2100B1",
  },
];

const countryList = [
  "United Kingdom",
  "United States",
  "Australia",
  "Canada",
  "Malaysia",
  "Germany",
  "France",
  "Netherlands",
  "New Zealand",
  "Ireland",
  "Türkiye",
  "UAE",
  "Northern Cyprus",
];

const serviceList = [
  "University Admissions",
  "Visa Assistance",
  "Scholarship Guidance",
  "IELTS / PTE Prep",
  "Career Counseling",
  "General Inquiry",
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

const inputStyle = {
  padding: "14px 18px",
  borderRadius: "10px",
  border: "1.5px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.12)",
  color: "white",
  fontSize: "14px",
  outline: "none",
  fontFamily: "inherit",
  backdropFilter: "blur(10px)",
  transition: "all 0.2s",
  width: "100%",
  boxSizing: "border-box",
};

const onFocusStyle = (e) => {
  e.target.style.background = "rgba(255,255,255,0.2)";
  e.target.style.borderColor = "rgba(255,255,255,0.4)";
};
const onBlurStyle = (e) => {
  e.target.style.background = "rgba(255,255,255,0.12)";
  e.target.style.borderColor = "rgba(255,255,255,0.15)";
};

export default function WhyUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="why-us"
      style={{
        background: "#f8f9ff",
        padding: "100px 0 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background accents */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(33,0,177,0.06)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          right: "-80px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(237,75,0,0.06)",
          filter: "blur(80px)",
          zIndex: 0,
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
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "20px",
                background: "rgba(237,75,0,0.08)",
                border: "1px solid rgba(237,75,0,0.2)",
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
                Why Choose Us
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: "#0d0d1a",
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Why Students <span style={{ color: "#ED4B00" }}>Trust</span> EdX
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#666",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Thousands of students choose EdX Consultants every year — not by
              chance, but by the results we deliver and the trust we establish
              with every student.
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
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                padding: "32px 28px",
                borderRadius: "16px",
                background: "white",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                transition: "all 0.3s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  reason.color === "#2100B1"
                    ? "rgba(33,0,177,0.25)"
                    : "rgba(237,75,0,0.25)";
                e.currentTarget.style.boxShadow =
                  reason.color === "#2100B1"
                    ? "0 12px 40px rgba(33,0,177,0.12)"
                    : "0 12px 40px rgba(237,75,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    reason.color === "#2100B1"
                      ? "linear-gradient(90deg, #2100B1, #0ea5e9)"
                      : "linear-gradient(90deg, #ED4B00, #ff9a00)",
                }}
              />
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background:
                    reason.color === "#2100B1"
                      ? "rgba(33,0,177,0.08)"
                      : "rgba(237,75,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                }}
              >
                <reason.icon size={24} color={reason.color} strokeWidth={1.8} />
              </div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0d0d1a",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {reason.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.75 }}>
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BANNER FORM ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Background image with overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(33,0,177,0.92) 0%, rgba(13,13,26,0.88) 60%, rgba(237,75,0,0.85) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          {/* Heading */}
          <div style={{ marginBottom: "32px" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#ED4B00",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Need Advice?
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              APPLY NOW
            </h2>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: "rgba(255,255,255,0.12)",
                borderRadius: "14px",
                padding: "20px 32px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ fontSize: "24px" }}>🎉</span>
              <span
                style={{ fontSize: "16px", fontWeight: 700, color: "white" }}
              >
                Thank you! We'll contact you within 24 hours.
              </span>
            </motion.div>
          ) : (
            <>
              {/* Row 1 — Name + Phone */}
              {/* Row 1 — Name + Email + Phone */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                {[
                  { name: "name", placeholder: "Full Name", type: "text" },
                  {
                    name: "email",
                    placeholder: "Email Address",
                    type: "email",
                  },
                  { name: "phone", placeholder: "Phone", type: "tel" },
                ].map(({ name, placeholder, type }) => (
                  <input
                    key={name}
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={inputStyle}
                    onFocus={onFocusStyle}
                    onBlur={onBlurStyle}
                  />
                ))}
              </div>

              {/* Row 2 — Destination + Service */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                {/* Destination */}
                <div style={{ position: "relative" }}>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      padding: "14px 40px 14px 18px",
                      color: form.country ? "white" : "rgba(255,255,255,0.6)",
                      appearance: "none",
                      WebkitAppearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={onFocusStyle}
                    onBlur={onBlurStyle}
                  >
                    <option
                      value=""
                      style={{ background: "#0d0d1a", color: "white" }}
                    >
                      Select Destination
                    </option>
                    {countryList.map((c) => (
                      <option
                        key={c}
                        value={c}
                        style={{ background: "#0d0d1a", color: "white" }}
                      >
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    color="rgba(255,255,255,0.6)"
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* Service */}
                <div style={{ position: "relative" }}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      padding: "14px 40px 14px 18px",
                      color: form.service ? "white" : "rgba(255,255,255,0.6)",
                      appearance: "none",
                      WebkitAppearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={onFocusStyle}
                    onBlur={onBlurStyle}
                  >
                    <option
                      value=""
                      style={{ background: "#0d0d1a", color: "white" }}
                    >
                      Select Service
                    </option>
                    {serviceList.map((s) => (
                      <option
                        key={s}
                        value={s}
                        style={{ background: "#0d0d1a", color: "white" }}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    color="rgba(255,255,255,0.6)"
                    style={{
                      position: "absolute",
                      right: "14px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Row 4 — Message + Submit */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "12px",
                  alignItems: "flex-end",
                }}
              >
                

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "14px 28px",
                    background: "#ED4B00",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                    boxShadow: "0 6px 24px rgba(237,75,0,0.4)",
                    whiteSpace: "nowrap",
                    height: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#cc3f00";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 32px rgba(237,75,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ED4B00";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 24px rgba(237,75,0,0.4)";
                  }}
                >
                  APPLY NOW <ArrowRight size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>

      <style>{`
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.55) !important; }
      `}</style>
    </section>
  );
}
