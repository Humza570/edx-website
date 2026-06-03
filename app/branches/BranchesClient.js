"use client";

import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

const branches = [
  {
    type: "Head Office",
    city: "Lahore",
    badge: "Headquarters",
    address: "First Floor, Building No. 55, Johar Town, Block B Phase 1, Lahore, Pakistan",
    phone: "+92 333 9989153",
    email: "info@edxconsultants.com",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 06:00 PM" },
      { days: "Saturday", time: "12:00 PM – 04:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.163!2d74.32099!3d31.46958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c98c790b27%3A0x23de9eb554a9abe5!2sEdX%20Consultants!5e0!3m2!1sen!2spk!4v1",
    mapUrl: "https://maps.google.com/?q=EdX+Consultants+Johar+Town+Lahore",
    established: "Est. 2014",
    highlight: true,
  },
  {
    type: "Branch Office",
    city: "Islamabad",
    badge: "New Branch",
    address: "First Floor, Bukhari Plaza, Main G.T. Road, Islamabad, 10278, Pakistan",
    phone: "+92 333 9989153",
    email: "info@edxconsultants.com",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 06:00 PM" },
      { days: "Saturday", time: "12:00 PM – 04:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.841!2d73.04561!3d33.69265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6789f3d5ad5b5f2e!2sBukhari%20Plaza%2C%20G.T.%20Rd%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1",
    mapUrl: "https://maps.google.com/?q=Bukhari+Plaza+Main+GT+Road+Islamabad",
    established: "Now Open",
    highlight: false,
  },
];

// Accent colors matching live site exactly
const BLUE = "#2100B1";
const ORANGE = "#ED4B00";
const BLUE_BG = "rgba(33,0,177,0.07)";
const ORANGE_BG = "rgba(237,75,0,0.08)";

export default function BranchesClient() {
  return (
    <main style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif", color: "#1a1a2e" }}>

      {/* ── Hero ── */}
      <section style={{
        background: `linear-gradient(135deg, ${BLUE} 0%, #1a0090 100%)`,
        padding: "160px 24px 90px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(237,75,0,0.08)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(237,75,0,0.15)", border: `1px solid rgba(237,75,0,0.4)`,
            color: "#ff8a60", fontSize: "13px", fontWeight: 600,
            padding: "6px 16px", borderRadius: "50px", marginBottom: "20px",
          }}>
            <Building2 size={14} /> Our Offices
          </span>
          <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "14px" }}>
            Find Us <span style={{ color: "#ff6b35" }}>Across Pakistan</span>
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            With offices in Lahore and Islamabad, expert study abroad guidance is closer to you than ever.
          </p>
        </div>
        {/* wave */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "48px",
          background: "#f5f5f8", clipPath: "ellipse(55% 100% at 50% 100%)",
        }} />
      </section>

      {/* ── Branch Cards ── */}
      <section style={{ background: "#f5f5f8", padding: "60px 24px 72px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}>
            {branches.map((branch) => (
              <div key={branch.city} style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                border: `1.5px solid ${branch.highlight ? "rgba(237,75,0,0.2)" : "rgba(33,0,177,0.12)"}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}>
                {/* Card Header */}
                <div style={{
                  background: branch.highlight
                    ? `linear-gradient(135deg, ${ORANGE}, #c93a00)`
                    : `linear-gradient(135deg, ${BLUE}, #1a0090)`,
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "1.2px", display: "block", marginBottom: "4px" }}>
                        {branch.type}
                      </span>
                      <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                        {branch.city}
                      </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span style={{ background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "50px" }}>
                        {branch.badge}
                      </span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}>
                        {branch.established}
                      </span>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "-8px", right: "20px", opacity: 0.15 }}>
                    <Building2 size={56} color="#fff" />
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "24px 28px 28px" }}>

                  {/* Address */}
                  <div style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                    <div style={{ width: "34px", height: "34px", background: branch.highlight ? ORANGE_BG : BLUE_BG, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: branch.highlight ? ORANGE : BLUE }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "4px" }}>Address</p>
                      <p style={{ fontSize: "14px", color: "#333", lineHeight: 1.5 }}>{branch.address}</p>
                      <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", marginTop: "5px", fontSize: "12px", fontWeight: 700, color: branch.highlight ? ORANGE : BLUE, textDecoration: "none" }}>
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                    <div style={{ width: "34px", height: "34px", background: branch.highlight ? ORANGE_BG : BLUE_BG, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: branch.highlight ? ORANGE : BLUE }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "4px" }}>Phone</p>
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} style={{ fontSize: "14px", color: branch.highlight ? ORANGE : BLUE, fontWeight: 600, textDecoration: "none" }}>
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", gap: "14px", marginBottom: "20px" }}>
                    <div style={{ width: "34px", height: "34px", background: branch.highlight ? ORANGE_BG : BLUE_BG, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: branch.highlight ? ORANGE : BLUE }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "4px" }}>Email</p>
                      <a href={`mailto:${branch.email}`} style={{ fontSize: "14px", color: branch.highlight ? ORANGE : BLUE, fontWeight: 600, textDecoration: "none" }}>
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: "flex", gap: "14px", marginBottom: "24px" }}>
                    <div style={{ width: "34px", height: "34px", background: branch.highlight ? ORANGE_BG : BLUE_BG, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: branch.highlight ? ORANGE : BLUE, marginTop: "2px" }}>
                      <Clock size={16} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "8px" }}>Office Hours</p>
                      {branch.hours.map((h) => (
                        <div key={h.days} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "5px 0", borderBottom: "1px solid #f0f0f5" }}>
                          <span style={{ color: "#555" }}>{h.days}</span>
                          <span style={{ fontWeight: 600, color: h.time === "Closed" ? "#e74c3c" : "#1a1a2e" }}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a href="/contact" style={{
                    display: "block", textAlign: "center", padding: "13px",
                    borderRadius: "8px", fontSize: "14px", fontWeight: 700,
                    textDecoration: "none", letterSpacing: "0.3px",
                    background: branch.highlight ? ORANGE : BLUE,
                    color: "#fff",
                    boxShadow: branch.highlight
                      ? "0 4px 15px rgba(237,75,0,0.3)"
                      : "0 4px 15px rgba(33,0,177,0.25)",
                  }}>
                    Book Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maps ── */}
      <section style={{ padding: "60px 24px 72px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, textAlign: "center", marginBottom: "36px", color: "#1a1a2e" }}>
            Find Us on the <span style={{ color: BLUE }}>Map</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {branches.map((branch) => (
              <div key={branch.city} style={{ borderRadius: "12px", overflow: "hidden", border: `1.5px solid ${branch.highlight ? "rgba(237,75,0,0.2)" : "rgba(33,0,177,0.12)"}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "14px 18px", fontSize: "13px", fontWeight: 700, color: "#1a1a2e", background: "#f8f8fc", borderBottom: "1px solid #eee" }}>
                  <MapPin size={14} color={branch.highlight ? ORANGE : BLUE} />
                  {branch.city} — {branch.type}
                </div>
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Strip ── */}
      <section style={{ background: ORANGE, padding: "40px 24px", boxShadow: "0 4px 15px rgba(237,75,0,0.3)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "4px" }}>Not sure which office to visit?</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>Call us and we'll guide you to the nearest branch.</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="tel:+923339989153" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", color: ORANGE, fontWeight: 700, fontSize: "14px", padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}>
              <Phone size={15} /> +92 333 9989153
            </a>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.15)", border: "2px solid #fff", color: "#fff", fontWeight: 700, fontSize: "14px", padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}>
              Book Online
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}