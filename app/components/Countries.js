"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Users, MapPin, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    slug: "united-kingdom",
    lat: 51.5074,
    lng: -0.1278,
    universities: "25+",
    students: "500+",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    highlight: "UAE · ARU · RGU",
    color: "#ED4B00",
    desc: "The UK is one of the most popular study destinations, famous for its top-ranked universities and education system. A degree from the UK is recognized by employers all over the globe.",
    duration: "1–3 Years",
    intake: "January / May / September",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    slug: "united-states",
    lat: 38.9072,
    lng: -77.0369,
    universities: "20+",
    students: "100+",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80",
    highlight: "Harvard · MIT · Stanford",
    color: "#2100B1",
    desc: "The USA offers a variety of academic programs, research facilities, and globally acclaimed degrees. The country is also home to some of the world's top-ranked universities as well as innovative learning environments.",
    duration: "2–4 Years",
    intake: "August / January",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    slug: "australia",
    lat: -33.8688,
    lng: 151.2093,
    universities: "10+",
    students: "80+",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    highlight: "Melbourne · ANU · Sydney",
    color: "#2100B1",
    desc: "Australia is famous for its high-standard education system, cultural diversity, and strong post-study work prospects. International students can experience a safe lifestyle, modern campuses, and globally recognized qualifications.",
    duration: "2–3 Years",
    intake: "February / July",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    slug: "canada",
    lat: 45.4215,
    lng: -75.6972,
    universities: "10+",
    students: "50+",
    image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&q=80",
    highlight: "UCW · TRU",
    color: "#ED4B00",
    desc: "Canada promises affordable education, a conducive environment, and great career opportunities after completing studies. It provides post-study work permits and permanent residence opportunities.",
    duration: "2–4 Years",
    intake: "September / January",
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    slug: "malaysia",
    lat: 3.139,
    lng: 101.6869,
    universities: "30+",
    students: "300+",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    highlight: "APU · UCSI · Raffles",
    color: "#2100B1",
    desc: "Malaysia provides an international education at an affordable price with modern educational campuses and globally recognized qualifications. A popular destination for international students seeking quality education at lower tuition fees.",
    duration: "2–3 Years",
    intake: "February / May / September",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    slug: "germany",
    lat: 52.52,
    lng: 13.405,
    universities: "10+",
    students: "100+",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    highlight: "GISMA · UE · BSBI",
    color: "#2100B1",
    desc: "Germany is a popular country for quality education, especially in the field of engineering and technology, with affordable options for students. Students have access to quality research facilities and good job opportunities in Europe.",
    duration: "2–3 Years",
    intake: "October / April",
  },
  {
    name: "France",
    flag: "🇫🇷",
    slug: "france",
    lat: 48.8566,
    lng: 2.3522,
    universities: "10+",
    students: "30+",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    highlight: "Sorbonne · HEC Paris · École Polytechnique",
    color: "#ED4B00",
    desc: "France offers academic excellence with a rich cultural experience and good international career prospects. It is known for its excellent business schools and creative programs of study.",
    duration: "1–2 Years",
    intake: "September / January",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    slug: "netherlands",
    lat: 52.3676,
    lng: 4.9041,
    universities: "10+",
    students: "50+",
    image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=800&q=80",
    highlight: "UE Amsterdam",
    color: "#2100B1",
    desc: "The Netherlands is famous for its innovative educational system, English-taught courses, and open environment for international students. Students benefit from a modern educational system that emphasizes research and practical knowledge.",
    duration: "1–3 Years",
    intake: "September / February",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    slug: "new-zealand",
    lat: -36.8485,
    lng: 174.7633,
    universities: "10+",
    students: "20+",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    highlight: "Auckland · Otago · Victoria University of Wellington",
    color: "#ED4B00",
    desc: "New Zealand provides good quality education, a secure environment, and great prospects for international students. New Zealand is also famous for providing good student communities and a picturesque environment.",
    duration: "2–3 Years",
    intake: "February / July",
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    slug: "ireland",
    lat: 53.3498,
    lng: -6.2603,
    universities: "25+",
    students: "10+",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80",
    highlight: "Trinity College Dublin · UCD · University of Galway",
    color: "#ED4B00",
    desc: "Ireland is becoming a popular destination for international students owing to its connectivity to global industries. Many global technology companies are located in Ireland, creating great opportunities for students to work after graduating.",
    duration: "1–2 Years",
    intake: "September / January",
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    slug: "turkey",
    lat: 39.9334,
    lng: 32.8597,
    universities: "10+",
    students: "30+",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    highlight: "BAU · Bilkent University",
    color: "#ED4B00",
    desc: "Turkey has affordable education, modern universities, and a unique cultural experience for international students. Turkey is a bridge between Europe and Asia and has many academic and cultural opportunities to offer.",
    duration: "2–4 Years",
    intake: "September / February",
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    slug: "uae",
    lat: 24.4539,
    lng: 54.3773,
    universities: "10+",
    students: "20+",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    highlight: "UE · American University in Dubai",
    color: "#2100B1",
    desc: "The UAE offers international quality education with modern campus facilities and industry ties with the rest of the world. Students have the opportunity to study in international branch campuses in Dubai and Abu Dhabi.",
    duration: "2–3 Years",
    intake: "September / January",
  },
  {
    name: "Northern Cyprus",
    flag: "🇨🇾",
    slug: "northern-cyprus",
    lat: 35.1856,
    lng: 33.3823,
    universities: "1",
    students: "10+",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    highlight: "Eastern Mediterranean University",
    color: "#2100B1",
    desc: "Northern Cyprus offers affordable tuition fees, internationally recognized degrees, and a welcoming student environment. Students enjoy modern campuses, small class sizes, and a multicultural learning experience.",
    duration: "2–4 Years",
    intake: "September / February",
  },
];

const ROW_HEIGHT = 70;
const LIST_HEIGHT = 6 * ROW_HEIGHT + 40;

export default function Countries() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [GlobeComponent, setGlobeComponent] = useState(null);
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = screenWidth < 768;
  const globeSize = screenWidth < 400 ? 220 : screenWidth < 768 ? 260 : 420;

  useEffect(() => {
    import("react-globe.gl").then((mod) => setGlobeComponent(() => mod.default));
  }, []);

  useEffect(() => {
    if (!globeReady || !globeRef.current) return;
    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.6;
    globe.controls().enableZoom = false;
    globe.pointOfView({ lat: 30, lng: 30, altitude: 2.0 });
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mouseenter", () => { globe.controls().autoRotate = false; });
      el.addEventListener("mouseleave", () => { globe.controls().autoRotate = true; });
    }
  }, [globeReady]);

  useEffect(() => {
    if (!globeReady || !globeRef.current || !selected) return;
    globeRef.current.pointOfView({ lat: selected.lat, lng: selected.lng, altitude: 2.0 }, 900);
  }, [selected, globeReady]);

  const globePoints = countries.map((c) => ({
    lat: c.lat,
    lng: c.lng,
    size: selected?.name === c.name ? 1.1 : 0.5,
    color: selected?.name === c.name ? "#ffffff" : "#ED4B00",
    label: c.name,
    country: c,
  }));

  const GlobeEl = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        ref={containerRef}
        style={{
          width: `${globeSize}px`, height: `${globeSize}px`,
          borderRadius: "50%",
          boxShadow: "0 0 60px rgba(33,0,177,0.45), 0 0 120px rgba(237,75,0,0.1)",
          overflow: "hidden", background: "#0a0a18",
        }}
      >
        {GlobeComponent ? (
          <GlobeComponent
            ref={globeRef}
            onGlobeReady={() => setGlobeReady(true)}
            width={globeSize} height={globeSize}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            pointsData={globePoints}
            pointLat="lat" pointLng="lng"
            pointColor="color" pointRadius="size"
            pointAltitude={0.03} pointResolution={12}
            onPointClick={(point) => setSelected(point.country)}
            pointLabel={(p) => `<div style="background:#ED4B00;color:white;padding:6px 12px;border-radius:6px;font-size:13px;font-weight:600">${p.label}</div>`}
            atmosphereColor="#2100B1"
            atmosphereAltitude={0.18}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>Loading globe...</span>
          </div>
        )}
      </div>
      <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "10px", letterSpacing: "0.05em" }}>
        🌍 Tap a dot or pick from the list
      </p>
    </div>
  );

  return (
    <section id="countries" style={{ background: "#0d0d1a", padding: "50px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 18px", borderRadius: "999px", marginBottom: "20px", background: "rgba(237,75,0,0.12)", border: "1px solid rgba(237,75,0,0.25)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ED4B00", display: "inline-block" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#ED4B00", letterSpacing: "0.06em", textTransform: "uppercase" }}>Study Destinations</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Your Global Education,{" "}<span style={{ color: "#ED4B00" }}>Starts Here</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              With 200+ partner universities in 10 countries, we help you choose the best destination for your academic journey.
            </p>
            <div style={{ width: "60px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #2100B1, #ED4B00)", margin: "24px auto 0" }} />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        {isMobile && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%" }}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flexShrink: 0 }}>
                {GlobeEl}
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.div key={selected.name} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ fontSize: "28px" }}>{selected.flag}</div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "white", lineHeight: 1.2 }}>{selected.name}</div>
                  <div style={{ fontSize: "12px", color: selected.color, fontWeight: 700 }}>{selected.universities} Universities</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{selected.highlight}</div>
                  <div style={{ marginTop: "4px", padding: "6px 12px", background: `${selected.color}22`, border: `1px solid ${selected.color}44`, borderRadius: "6px", fontSize: "11px", color: selected.color, fontWeight: 600, width: "fit-content" }}>
                    {selected.intake}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div style={{ width: "100%" }}><DetailPanel selected={selected} /></div>
            <div style={{ width: "100%" }}>
              <CountryList countries={countries} selected={selected} setSelected={setSelected} listHeight={LIST_HEIGHT} />
            </div>
          </div>
        )}

        {/* Desktop Layout */}
        {!isMobile && (
          <div style={{ display: "grid", gridTemplateColumns: "420px 1fr 340px", gap: "28px", alignItems: "start" }}>
            <div style={{ position: "sticky", top: "100px" }}>{GlobeEl}</div>
            <CountryList countries={countries} selected={selected} setSelected={setSelected} listHeight={LIST_HEIGHT} />
            <div style={{ position: "sticky", top: "100px" }}><DetailPanel selected={selected} /></div>
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
            Can't find your destination? We might still be able to help.
          </p>
          <Link
            href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 36px", background: "#ED4B00", color: "white", borderRadius: "8px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 6px 24px rgba(237,75,0,0.35)", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#cc3f00"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#ED4B00"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Talk to a Counselor <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CountryList({ countries, selected, setSelected, listHeight }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px", paddingLeft: "4px" }}>
        Select a Destination
      </div>
      <div style={{ height: `${listHeight}px`, overflowY: "auto", paddingRight: "4px", scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.12) transparent" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {countries.map((country, i) => {
            const isActive = selected?.name === country.name;
            return (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                onClick={() => setSelected(country)}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  padding: "13px 16px", borderRadius: "12px", cursor: "pointer",
                  border: isActive ? `1px solid ${country.color}40` : "1px solid rgba(255,255,255,0.05)",
                  background: isActive ? `linear-gradient(135deg, ${country.color === "#ED4B00" ? "rgba(237,75,0,0.12)" : "rgba(33,0,177,0.12)"}, rgba(255,255,255,0.03))` : "rgba(255,255,255,0.02)",
                  transition: "all 0.2s", position: "relative", overflow: "hidden",
                  minHeight: `${ROW_HEIGHT - 8}px`,
                }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; } }}
              >
                {isActive && (
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: country.color, borderRadius: "0 2px 2px 0" }} />
                )}
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, position: "relative", border: isActive ? `1.5px solid ${country.color}` : "1.5px solid rgba(255,255,255,0.08)" }}>
                  <img src={country.image} alt={country.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                    {country.flag}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: isActive ? "white" : "rgba(255,255,255,0.75)", marginBottom: "2px" }}>{country.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{country.highlight}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: isActive ? country.color : "rgba(255,255,255,0.4)" }}>{country.universities}</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Universities</div>
                </div>
                <ChevronRight size={14} color={isActive ? country.color : "rgba(255,255,255,0.2)"} style={{ flexShrink: 0 }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DetailPanel({ selected }) {
  return (
    <AnimatePresence mode="wait">
      {selected && (
        <motion.div
          key={selected.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
        >
          <div style={{ position: "relative", height: "180px" }}>
            <img src={selected.image} alt={selected.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(13,13,26,0.98) 100%)" }} />
            <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
              <div style={{ fontSize: "28px", marginBottom: "4px" }}>{selected.flag}</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "white", lineHeight: 1.1 }}>{selected.name}</div>
            </div>
            <div style={{ position: "absolute", top: "12px", right: "12px", background: selected.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px" }}>
              {selected.universities} UNIS
            </div>
          </div>
          <div style={{ padding: "18px 20px" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "18px" }}>
              {selected.desc}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "18px" }}>
              {[
                { icon: GraduationCap, label: "Partner Unis", val: selected.universities },
                { icon: Users, label: "Our Students", val: selected.students },
                { icon: Clock, label: "Duration", val: selected.duration },
                { icon: MapPin, label: "Intake", val: selected.intake },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "11px 12px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
                    <Icon size={11} color={selected.color} />
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "12px 14px", marginBottom: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Top Universities</div>
              <div style={{ fontSize: "13px", color: selected.color, fontWeight: 600 }}>{selected.highlight}</div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Link
                href={`/countries/${selected.slug}`}
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px 12px", background: "rgba(255,255,255,0.06)", color: "white", borderRadius: "10px", fontSize: "13px", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              >
                Learn More
              </Link>
              <Link
                href={`/countries/${selected.slug}#apply`}
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "11px 12px", background: selected.color, color: "white", borderRadius: "10px", fontSize: "13px", fontWeight: 700, textDecoration: "none", transition: "all 0.2s", boxShadow: `0 6px 20px ${selected.color}40` }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Apply Now <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}