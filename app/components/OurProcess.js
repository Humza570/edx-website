"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BookOpen,
  FileText,
  CreditCard,
  Plane,
} from "lucide-react";

// ─── SVG ViewBox: 1100 × 500 ───────────────────────────────────────────────
// Circle positions: odd = top row (cy=170), even = bottom row (cy=330)
const VB_W = 1100;
const VB_H = 500;
const R = 52; // circle radius

const CIRCLES = [
  { cx: 110, cy: 280, color: "#ED4B00", row: "top" },
  { cx: 290, cy: 180, color: "#2100B1", row: "bottom" },
  { cx: 480, cy: 280, color: "#ED4B00", row: "top" },
  { cx: 670, cy: 180, color: "#2100B1", row: "bottom" },
  { cx: 860, cy: 280, color: "#ED4B00", row: "top" },
];

// S-curve path through all 5 circle centers
const PATH = `
  M ${CIRCLES[0].cx} ${CIRCLES[0].cy}
  C ${CIRCLES[0].cx + 90} ${CIRCLES[0].cy},
    ${CIRCLES[1].cx - 90} ${CIRCLES[1].cy},
    ${CIRCLES[1].cx} ${CIRCLES[1].cy}
  C ${CIRCLES[1].cx + 90} ${CIRCLES[1].cy},
    ${CIRCLES[2].cx - 90} ${CIRCLES[2].cy},
    ${CIRCLES[2].cx} ${CIRCLES[2].cy}
  C ${CIRCLES[2].cx + 90} ${CIRCLES[2].cy},
    ${CIRCLES[3].cx - 90} ${CIRCLES[3].cy},
    ${CIRCLES[3].cx} ${CIRCLES[3].cy}
  C ${CIRCLES[3].cx + 90} ${CIRCLES[3].cy},
    ${CIRCLES[4].cx - 90} ${CIRCLES[4].cy},
    ${CIRCLES[4].cx} ${CIRCLES[4].cy}
`;

const STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We begin with an in-depth consultation to understand the student's academic background, career goals, financial capacity, and preferred study destinations. This allows us to evaluate eligibility and design a personalized roadmap.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Course & University Selection",
    desc: "Our counselors align the student's interests and strengths with suitable career pathways. Based on this, we recommend the most relevant countries, universities, and programs for long-term success.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Application & Documentation",
    desc: "We prepare and submit strong, well-structured applications, including SOPs, CVs, reference letters, and all required academic documents to maximize acceptance chances.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Visa Assistance",
    desc: "Our visa experts handle documentation, financial statements, and compliance. We conduct mock interviews and provide personalized coaching to ensure visa success.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Pre-Departure Support",
    desc: "Before departure, students receive guidance on accommodation, travel, insurance, part-time work rights, cultural adaptation, and settling abroad.",
    icon: Plane,
  },
];

// Label box positions (lx = left-x, ly = top-y, w = width, align)
// top-row circles → label ABOVE; bottom-row → label BELOW
const LABELS = [
  { lx: 10, ly: 20, w: 195, align: "center" }, // step 1 — above
  { lx: 195, ly: 295, w: 195, align: "center" }, // step 2 — below
  { lx: 385, ly: 20, w: 195, align: "center" }, // step 3 — above
  { lx: 575, ly: 295, w: 195, align: "center" }, // step 4 — below
  { lx: 765, ly: 20, w: 200, align: "center" }, // step 5 — above
];

function wrapSvgText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((w) => {
    if ((line + w).length > maxChars) {
      if (line) lines.push(line.trim());
      line = w + " ";
    } else {
      line += w + " ";
    }
  });
  if (line) lines.push(line.trim());
  return lines;
}

export default function OurProcess() {
  return (
    <section
      style={{ background: "#fff", padding: "90px 0 0", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px" }}>
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 16px",
              borderRadius: "999px",
              background: "rgba(237,75,0,0.08)",
              border: "1px solid rgba(237,75,0,0.25)",
              marginBottom: "16px",
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
                fontWeight: 700,
                color: "#ED4B00",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              How We Work
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0d0d1a",
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}
          >
            Our <span style={{ color: "#2100B1" }}>Process</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            At EdX Consultants, we follow a structured and transparent approach
            to guide students from initial consultation to successful enrollment
            abroad.
          </p>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#ED4B00",
              borderRadius: "2px",
              margin: "18px auto 0",
            }}
          />
        </motion.div>

        {/* ══ DESKTOP — single SVG ══ */}
        <div className="process-desktop">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              overflow: "visible",
            }}
          >
            <defs>
              {CIRCLES.map((c, i) => (
                <radialGradient key={i} id={`cg${i}`} cx="38%" cy="32%" r="68%">
                  <stop
                    offset="0%"
                    stopColor={c.color === "#ED4B00" ? "#ff7a3d" : "#4d2bff"}
                  />
                  <stop offset="100%" stopColor={c.color} />
                </radialGradient>
              ))}
              <filter id="glow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── S-curve dashed path ── */}
            {/* Shadow/glow under path */}
            <path
              d={PATH}
              fill="none"
              stroke="rgba(33,0,177,0.08)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Main dashed line */}
            <path
              d={PATH}
              fill="none"
              stroke="rgba(33,0,177,0.18)"
              strokeWidth="2"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />
            {/* Orange dashed overlay */}
            <path
              d={PATH}
              fill="none"
              stroke="rgba(237,75,0,0.18)"
              strokeWidth="2"
              strokeDasharray="7 6"
              strokeDashoffset="13"
              strokeLinecap="round"
            />

            {/* ── Circles ── */}
            {CIRCLES.map((c, i) => {
              const Icon = STEPS[i].icon;
              return (
                <g key={i}>
                  {/* Outer glow ring */}
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={R + 10}
                    fill={c.color}
                    opacity="0.08"
                  />
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={R + 5}
                    fill={c.color}
                    opacity="0.12"
                  />
                  {/* Main circle */}
                  <circle cx={c.cx} cy={c.cy} r={R} fill={`url(#cg${i})`} />
                  {/* Lucide icon rendered as foreignObject */}
                  <foreignObject
                    x={c.cx - 22}
                    y={c.cy - 22}
                    width="44"
                    height="44"
                    style={{ overflow: "visible" }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={30} color="white" strokeWidth={1.5} />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* ── Labels (SVG text) ── */}
            {STEPS.map((s, i) => {
              const { lx, ly, w } = LABELS[i];
              const c = CIRCLES[i];
              const isTop = c.row === "top";
              const titleLines = wrapSvgText(s.title, Math.floor(w / 7.5));
              const descLines = wrapSvgText(s.desc, Math.floor(w / 6));

              // For top labels: text starts at ly, grows down; max label box = circle.cy - R - 20
              // For bottom labels: text starts at cy + R + 18
              const textStartY = isTop ? ly : c.cy + R + 18;
              const titleLineH = 17;
              const descLineH = 14;
              const titleH = titleLines.length * titleLineH;

              return (
                <g key={i}>
                  {/* STEP number */}
                  <text
                    x={lx + w / 2}
                    y={textStartY}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="700"
                    fill={c.color}
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="1.5"
                  >
                    STEP {s.number}
                  </text>

                  {/* Title */}
                  {titleLines.map((ln, j) => (
                    <text
                      key={j}
                      x={lx + w / 2}
                      y={textStartY + 16 + j * titleLineH}
                      textAnchor="middle"
                      fontSize="13.5"
                      fontWeight="800"
                      fill="#0d0d1a"
                      fontFamily="system-ui, sans-serif"
                    >
                      {ln}
                    </text>
                  ))}

                  {/* Desc */}
                  {descLines.map((ln, j) => (
                    <text
                      key={j}
                      x={lx + w / 2}
                      y={textStartY + 16 + titleH + 8 + j * descLineH}
                      textAnchor="middle"
                      fontSize="10.5"
                      fill="#777"
                      fontFamily="system-ui, sans-serif"
                    >
                      {ln}
                    </text>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>

        {/* ══ MOBILE ══ */}
        <div
          className="process-mobile"
          style={{ display: "none", flexDirection: "column" }}
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const c = CIRCLES[i];
            const isLast = i === STEPS.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: c.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 6px 20px ${c.color}44`,
                    }}
                  >
                    <Icon size={26} color="white" strokeWidth={1.5} />
                  </div>
                  {!isLast && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "28px",
                        background: `linear-gradient(to bottom, ${c.color}, ${CIRCLES[i + 1]?.color || c.color})`,
                        margin: "5px 0",
                        opacity: 0.25,
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    paddingBottom: isLast ? 0 : "20px",
                    paddingTop: "6px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: c.color,
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  >
                    STEP {s.number}
                  </div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "#0d0d1a",
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{ fontSize: "13px", color: "#666", lineHeight: 1.7 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Bottom dark stats banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: "0px", padding: "0 24px 80px" }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #0d0d1a 0%, #160040 100%)",
            borderRadius: "20px",
            padding: "44px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
            boxShadow: "0 20px 60px rgba(33,0,177,0.18)",
          }}
        >
          <p
            style={{
              flex: 1,
              minWidth: "240px",
              fontSize: "clamp(13px, 1.5vw, 16px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.85,
              fontStyle: "italic",
              maxWidth: "520px",
            }}
          >
            "At EdX Consultants, we follow a structured and transparent approach
            to guide students from initial consultation to successful enrollment
            abroad. Our step-by-step process ensures clarity, efficiency, and
            complete support at every stage of the journey."
          </p>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[
              ["1,000+", "Students Placed"],
              ["98%", "Visa Success"],
              ["10+", "Years Experience"],
            ].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 800,
                    color: "#ED4B00",
                    lineHeight: 1,
                  }}
                >
                  {val}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "6px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .process-desktop { display: none !important; }
          .process-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
