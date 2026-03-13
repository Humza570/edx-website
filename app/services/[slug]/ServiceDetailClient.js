"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { services } from "@/app/data/services";

export default function ServiceDetailClient({ slug }) {
  // ✅ Client component khud data fetch karta hai
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = service.icon;
  const isBlue = service.color === "#2100B1";
  const { detail } = service;

  // ✅ Related services — 3 other services
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main style={{ background: "#f8f9ff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 100%)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `${service.color}15`,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(33,0,177,0.12)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}
        >
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              marginBottom: "32px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              marginBottom: "24px",
              background: `${service.color}20`,
              border: `1px solid ${service.color}40`,
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: service.color,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: service.color,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Our Services
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "18px",
                background: `${service.color}20`,
                border: `1px solid ${service.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={34} color={service.color} strokeWidth={1.6} />
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h1
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.1,
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {service.title}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.6)",
                  fontStyle: "italic",
                }}
              >
                {detail.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section
        style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}
        >
          {/* Intro */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "3px",
                background: `linear-gradient(90deg, ${service.color}, ${isBlue ? "#0ea5e9" : "#ff9a00"})`,
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            />
            {detail.intro.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "16px",
                  color: "#444",
                  lineHeight: 1.85,
                  marginBottom:
                    i < detail.intro.split("\n\n").length - 1 ? "20px" : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* What We Offer */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#0d0d1a",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              What We Offer
            </h2>
            <p
              style={{ fontSize: "14px", color: "#888", marginBottom: "28px" }}
            >
              Here is what you can expect from our {service.title.toLowerCase()}{" "}
              service:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "12px",
              }}
            >
              {detail.whatWeOffer.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 16px",
                    background: "#f8f9ff",
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <CheckCircle
                    size={16}
                    color={service.color}
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <span
                    style={{ fontSize: "14px", color: "#444", lineHeight: 1.5 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                fontWeight: 800,
                color: "#0d0d1a",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}
            >
              How It Works
            </h2>
            <p
              style={{ fontSize: "14px", color: "#888", marginBottom: "36px" }}
            >
              Our process is simple, transparent, and student-focused.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {detail.howItWorks.map((step, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px 20px",
                    borderRadius: "16px",
                    background: i % 2 === 0 ? `${service.color}08` : "#f8f9ff",
                    border: `1px solid ${i % 2 === 0 ? service.color + "20" : "rgba(0,0,0,0.05)"}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: service.color,
                      opacity: 0.3,
                      lineHeight: 1,
                      marginBottom: "10px",
                      fontFamily: "monospace",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0d0d1a",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div
            style={{
              background: `linear-gradient(135deg, ${service.color} 0%, ${isBlue ? "#0ea5e9" : "#ff6b00"} 100%)`,
              borderRadius: "20px",
              padding: "48px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "white",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "480px",
                margin: "0 auto 32px",
              }}
            >
              Book a free consultation and let our experts guide you through
              every step of your {service.title.toLowerCase()} journey.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "white",
                  color: service.color,
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+923001234567"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }}
              >
                <Phone size={15} /> Call Us Now
              </a>
            </div>
          </div>

          {/* Related Services */}
          <div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#0d0d1a",
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              Explore More Services
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {related.map((s) => {
                const RelIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "18px 20px",
                      background: "white",
                      borderRadius: "14px",
                      border: "1px solid rgba(0,0,0,0.06)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = `0 8px 30px rgba(${s.color === "#2100B1" ? "33,0,177" : "237,75,0"},0.12)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background:
                          s.color === "#2100B1"
                            ? "rgba(33,0,177,0.08)"
                            : "rgba(237,75,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <RelIcon size={20} color={s.color} strokeWidth={1.8} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#0d0d1a",
                          marginBottom: "2px",
                        }}
                      >
                        {s.title}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.desc.substring(0, 50)}...
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      color={s.color}
                      style={{ flexShrink: 0 }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
