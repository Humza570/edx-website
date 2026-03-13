"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/app/data/services";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#f8f9ff", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
              background: "rgba(33,0,177,0.08)",
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
              What We Offer
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
            Our <span style={{ color: "#2100B1" }}>Services</span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#666",
              maxWidth: "60vw",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From that first spark of an idea to the moment you step onto your new campus, we manage every detail of your study abroad journey. You focus on your future; we’ll handle the logistics.
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
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>
            Not sure where to start? Let our experts guide you.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 36px",
              background: "#ED4B00",
              color: "white",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(237,75,0,0.35)",
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
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const isBlue = service.color === "#2100B1";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "36px 28px",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s, border-color 0.3s",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(${isBlue ? "33,0,177" : "237,75,0"},0.15)`;
        e.currentTarget.style.borderColor = isBlue
          ? "rgba(33,0,177,0.2)"
          : "rgba(237,75,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
        e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: isBlue
            ? "linear-gradient(90deg, #2100B1, #0ea5e9)"
            : "linear-gradient(90deg, #ED4B00, #ff9a00)",
        }}
      />

      {service.badge && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: service.color,
            color: "white",
            fontSize: "10px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "999px",
            letterSpacing: "0.04em",
          }}
        >
          {service.badge}
        </div>
      )}

      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "14px",
          background: isBlue ? "rgba(33,0,177,0.08)" : "rgba(237,75,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Icon size={26} color={service.color} strokeWidth={1.8} />
      </div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#0d0d1a",
          marginBottom: "12px",
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#666",
          lineHeight: 1.75,
          marginBottom: "20px",
          flex: 1,
        }}
      >
        {service.desc}
      </p>

      <Link
        href={`/services/${service.slug}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: 700,
          color: service.color,
          letterSpacing: "0.02em",
          textDecoration: "none",
          width: "fit-content",
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.gap = "10px";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.gap = "6px";
        }}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
