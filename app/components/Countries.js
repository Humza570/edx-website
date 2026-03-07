// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, MapPin, GraduationCap, Users } from "lucide-react";

// const countries = [
//   {
//     name: "United Kingdom",
//     flag: "🇬🇧",
//     lat: 51.5074,
//     lng: -0.1278,
//     universities: "150+",
//     students: "800+",
//     image:
//       "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=600&q=80",
//     highlight: "Oxford · Cambridge · Imperial",
//     color: "#ED4B00",
//   },
//   {
//     name: "United States",
//     flag: "🇺🇸",
//     lat: 38.9072,
//     lng: -77.0369,
//     universities: "200+",
//     students: "600+",
//     image:
//       "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&q=80",
//     highlight: "Harvard · MIT · Stanford",
//     color: "#2100B1",
//   },
//   {
//     name: "Canada",
//     flag: "🇨🇦",
//     lat: 45.4215,
//     lng: -75.6972,
//     universities: "80+",
//     students: "500+",
//     image:
//       "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=600&q=80",
//     highlight: "Toronto · UBC · McGill",
//     color: "#ED4B00",
//   },
//   {
//     name: "Australia",
//     flag: "🇦🇺",
//     lat: -33.8688,
//     lng: 151.2093,
//     universities: "40+",
//     students: "400+",
//     image:
//       "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80",
//     highlight: "Melbourne · Sydney · ANU",
//     color: "#2100B1",
//   },
//   {
//     name: "Ireland",
//     flag: "🇮🇪",
//     lat: 53.3498,
//     lng: -6.2603,
//     universities: "20+",
//     students: "150+",
//     image:
//       "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&q=80",
//     highlight: "Trinity · UCD · UCC",
//     color: "#ED4B00",
//   },
//   {
//     name: "Germany",
//     flag: "🇩🇪",
//     lat: 52.52,
//     lng: 13.405,
//     universities: "50+",
//     students: "200+",
//     image:
//       "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
//     highlight: "TU Munich · Heidelberg · LMU",
//     color: "#2100B1",
//   },
//   {
//     name: "Turkey",
//     flag: "🇹🇷",
//     lat: 39.9334,
//     lng: 32.8597,
//     universities: "30+",
//     students: "300+",
//     image:
//       "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
//     highlight: "Istanbul · Ankara · Bilkent",
//     color: "#ED4B00",
//   },
//   {
//     name: "Malaysia",
//     flag: "🇲🇾",
//     lat: 3.139,
//     lng: 101.6869,
//     universities: "25+",
//     students: "250+",
//     image:
//       "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80",
//     highlight: "UM · UPM · Monash Malaysia",
//     color: "#2100B1",
//   },
//   {
//     name: "New Zealand",
//     flag: "🇳🇿",
//     lat: -36.8485,
//     lng: 174.7633,
//     universities: "15+",
//     students: "100+",
//     image:
//       "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80",
//     highlight: "Auckland · Otago · Victoria",
//     color: "#ED4B00",
//   },
//   {
//     name: "UAE",
//     flag: "🇦🇪",
//     lat: 24.4539,
//     lng: 54.3773,
//     universities: "20+",
//     students: "180+",
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
//     highlight: "NYU Abu Dhabi · AUS · HBMeU",
//     color: "#2100B1",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
//   }),
// };

// export default function Countries() {
//   const globeRef = useRef(null);
//   const containerRef = useRef(null);
//   const [globeReady, setGlobeReady] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [GlobeComponent, setGlobeComponent] = useState(null);

//   // Dynamically import globe (SSR safe)
//   useEffect(() => {
//     import("react-globe.gl").then((mod) => {
//       setGlobeComponent(() => mod.default);
//     });
//   }, []);

//   // Init globe
//   useEffect(() => {
//     if (!globeReady || !globeRef.current) return;
//     const globe = globeRef.current;
//     globe.controls().autoRotate = true;
//     globe.controls().autoRotateSpeed = 0.6;
//     globe.controls().enableZoom = false;
//     globe.pointOfView({ lat: 30, lng: 30, altitude: 2.2 });

//     // Hover pe pause
//     const globeEl = containerRef.current;
//     if (globeEl) {
//       globeEl.addEventListener("mouseenter", () => {
//         globe.controls().autoRotate = false;
//       });
//       globeEl.addEventListener("mouseleave", () => {
//         globe.controls().autoRotate = true;
//       });
//     }
//   }, [globeReady]);

//   const globePoints = countries.map((c) => ({
//     lat: c.lat,
//     lng: c.lng,
//     size: 0.6,
//     color: "#ED4B00",
//     label: c.name,
//     country: c,
//   }));

//   return (
//     <section
//       id="countries"
//       style={{
//         background: "#0d0d1a",
//         padding: "100px 24px",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
//         {/* Header */}
//         <div style={{ textAlign: "center", marginBottom: "64px" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               padding: "6px 18px",
//               borderRadius: "999px",
//               marginBottom: "20px",
//               background: "rgba(237,75,0,0.12)",
//               border: "1px solid rgba(237,75,0,0.25)",
//             }}
//           >
//             <span
//               style={{
//                 width: "6px",
//                 height: "6px",
//                 borderRadius: "50%",
//                 background: "#ED4B00",
//                 display: "inline-block",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: "13px",
//                 fontWeight: 600,
//                 color: "#ED4B00",
//                 letterSpacing: "0.06em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Study Destinations
//             </span>
//           </div>

//           <h2
//             style={{
//               fontSize: "clamp(32px, 5vw, 52px)",
//               fontWeight: 800,
//               color: "white",
//               lineHeight: 1.15,
//               marginBottom: "16px",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Your World, <span style={{ color: "#ED4B00" }}>Your Choice</span>
//           </h2>

//           <p
//             style={{
//               fontSize: "17px",
//               color: "rgba(255,255,255,0.55)",
//               maxWidth: "520px",
//               margin: "0 auto",
//               lineHeight: 1.7,
//             }}
//           >
//             We have active panels in 10 countries with 200+ partner
//             universities. Pick your destination and we'll take care of the rest.
//           </p>

//           <div
//             style={{
//               width: "60px",
//               height: "3px",
//               borderRadius: "2px",
//               background: "linear-gradient(90deg, #2100B1, #ED4B00)",
//               margin: "24px auto 0",
//             }}
//           />
//         </div>

//         {/* Globe */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginBottom: "72px",
//             position: "relative",
//           }}
//         >
//           <div
//             ref={containerRef}
//             style={{
//               width: "100%",
//               maxWidth: "680px",
//               aspectRatio: "1",
//               borderRadius: "50%",
//               boxShadow:
//                 "0 0 80px rgba(33,0,177,0.35), 0 0 160px rgba(237,75,0,0.12)",
//               overflow: "hidden",
//               background: "#0a0a18",
//             }}
//           >
//             {GlobeComponent && (
//               <GlobeComponent
//                 ref={globeRef}
//                 onGlobeReady={() => setGlobeReady(true)}
//                 width={680}
//                 height={680}
//                 backgroundColor="rgba(0,0,0,0)"
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 pointsData={globePoints}
//                 pointLat="lat"
//                 pointLng="lng"
//                 pointColor="color"
//                 pointRadius="size"
//                 pointAltitude={0.02}
//                 pointResolution={12}
//                 onPointClick={(point) => setSelected(point.country)}
//                 pointLabel={(p) =>
//                   `<div style="background:#ED4B00;color:white;padding:6px 12px;border-radius:6px;font-size:13px;font-weight:600">${p.label}</div>`
//                 }
//                 atmosphereColor="#2100B1"
//                 atmosphereAltitude={0.18}
//               />
//             )}
//             {!GlobeComponent && (
//               <div
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}
//                 >
//                   Loading globe...
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Globe hint */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-28px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               fontSize: "12px",
//               color: "rgba(255,255,255,0.35)",
//               letterSpacing: "0.06em",
//               whiteSpace: "nowrap",
//             }}
//           >
//             🌍 Click on a dot to explore
//           </div>
//         </div>

//         {/* Selected country popup */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               style={{
//                 maxWidth: "480px",
//                 margin: "0 auto 48px",
//                 background: "rgba(255,255,255,0.05)",
//                 border: "1px solid rgba(237,75,0,0.3)",
//                 borderRadius: "16px",
//                 padding: "24px",
//                 display: "flex",
//                 gap: "16px",
//                 alignItems: "center",
//                 backdropFilter: "blur(12px)",
//               }}
//             >
//               <span style={{ fontSize: "48px" }}>{selected.flag}</span>
//               <div style={{ flex: 1 }}>
//                 <div
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: 700,
//                     color: "white",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   {selected.name}
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "13px",
//                     color: "rgba(255,255,255,0.5)",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   {selected.highlight}
//                 </div>
//                 <div style={{ display: "flex", gap: "16px" }}>
//                   <span
//                     style={{
//                       fontSize: "12px",
//                       color: "#ED4B00",
//                       fontWeight: 600,
//                     }}
//                   >
//                     🎓 {selected.universities} Universities
//                   </span>
//                   <span
//                     style={{
//                       fontSize: "12px",
//                       color: "rgba(255,255,255,0.5)",
//                       fontWeight: 600,
//                     }}
//                   >
//                     👨‍🎓 {selected.students} Students
//                   </span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelected(null)}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   color: "rgba(255,255,255,0.3)",
//                   cursor: "pointer",
//                   fontSize: "18px",
//                 }}
//               >
//                 ✕
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Country Cards */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {countries.map((country, i) => (
//             <motion.div
//               key={country.name}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-40px" }}
//               variants={cardVariants}
//               whileHover={{ y: -6, transition: { duration: 0.2 } }}
//               onClick={() => setSelected(country)}
//               style={{
//                 borderRadius: "14px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 position: "relative",
//                 border: "1px solid rgba(255,255,255,0.06)",
//               }}
//             >
//               {/* Image */}
//               <div
//                 style={{
//                   position: "relative",
//                   height: "160px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={country.image}
//                   alt={country.name}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.4s ease",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.transform = "scale(1.08)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.transform = "scale(1)")
//                   }
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)",
//                   }}
//                 />
//                 {/* Flag */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "12px",
//                     right: "12px",
//                     fontSize: "28px",
//                     lineHeight: 1,
//                     filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
//                   }}
//                 >
//                   {country.flag}
//                 </div>
//               </div>

//               {/* Info */}
//               <div
//                 style={{
//                   background: "rgba(255,255,255,0.04)",
//                   backdropFilter: "blur(10px)",
//                   padding: "16px 18px",
//                   borderTop: `2px solid ${country.color}`,
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <h3
//                     style={{
//                       fontSize: "15px",
//                       fontWeight: 700,
//                       color: "white",
//                     }}
//                   >
//                     {country.name}
//                   </h3>
//                   <ArrowRight size={14} color={country.color} />
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "11px",
//                     color: "rgba(255,255,255,0.45)",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   {country.highlight}
//                 </div>
//                 <div style={{ display: "flex", gap: "12px" }}>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <GraduationCap size={11} color={country.color} />
//                     <span
//                       style={{
//                         fontSize: "11px",
//                         color: "rgba(255,255,255,0.6)",
//                         fontWeight: 600,
//                       }}
//                     >
//                       {country.universities} Unis
//                     </span>
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                     }}
//                   >
//                     <Users size={11} color="rgba(255,255,255,0.4)" />
//                     <span
//                       style={{
//                         fontSize: "11px",
//                         color: "rgba(255,255,255,0.4)",
//                         fontWeight: 600,
//                       }}
//                     >
//                       {country.students} Students
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div style={{ textAlign: "center", marginTop: "64px" }}>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "rgba(255,255,255,0.5)",
//               marginBottom: "20px",
//             }}
//           >
//             Can't find your destination? We might still be able to help.
//           </p>
//           <a
//             href="#contact"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               padding: "14px 36px",
//               background: "#ED4B00",
//               color: "white",
//               borderRadius: "8px",
//               fontSize: "15px",
//               fontWeight: 700,
//               textDecoration: "none",
//               boxShadow: "0 6px 24px rgba(237,75,0,0.35)",
//               transition: "all 0.2s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "#cc3f00";
//               e.currentTarget.style.transform = "translateY(-2px)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "#ED4B00";
//               e.currentTarget.style.transform = "translateY(0)";
//             }}
//           >
//             Talk to a Counselor
//             <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Users, MapPin, ChevronRight, Clock } from "lucide-react";

const countries = [
  {
    name: "United Kingdom", flag: "🇬🇧", lat: 51.5074, lng: -0.1278,
    universities: "150+", students: "800+",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    highlight: "Oxford · Cambridge · Imperial", color: "#ED4B00",
    desc: "The UK is home to some of the world's most prestigious universities. A UK degree is globally recognized and opens doors across every industry worldwide.",
    duration: "1–3 Years", intake: "September / January",
  },
  {
    name: "United States", flag: "🇺🇸", lat: 38.9072, lng: -77.0369,
    universities: "200+", students: "600+",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80",
    highlight: "Harvard · MIT · Stanford", color: "#2100B1",
    desc: "The USA offers world-class education with unmatched research opportunities, campus diversity, and a vibrant student life that prepares you for a global career.",
    duration: "2–4 Years", intake: "August / January",
  },
  {
    name: "Canada", flag: "🇨🇦", lat: 45.4215, lng: -75.6972,
    universities: "80+", students: "500+",
    image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&q=80",
    highlight: "Toronto · UBC · McGill", color: "#ED4B00",
    desc: "Canada offers excellent education, affordable tuition, post-study work permits, and a clear pathway to permanent residency — ideal for long-term settlement.",
    duration: "1–4 Years", intake: "September / January",
  },
  {
    name: "Australia", flag: "🇦🇺", lat: -33.8688, lng: 151.2093,
    universities: "40+", students: "400+",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    highlight: "Melbourne · Sydney · ANU", color: "#2100B1",
    desc: "Australia is a top destination with world-ranked universities, a safe environment, and generous post-study work rights up to 4 years.",
    duration: "1–3 Years", intake: "February / July",
  },
  {
    name: "Ireland", flag: "🇮🇪", lat: 53.3498, lng: -6.2603,
    universities: "20+", students: "150+",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80",
    highlight: "Trinity · UCD · UCC", color: "#ED4B00",
    desc: "Ireland is an English-speaking EU country with top universities and a booming tech industry. Home to Google, Meta, and Apple's European HQs.",
    duration: "1–2 Years", intake: "September",
  },
  {
    name: "Germany", flag: "🇩🇪", lat: 52.52, lng: 13.405,
    universities: "50+", students: "200+",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    highlight: "TU Munich · Heidelberg · LMU", color: "#2100B1",
    desc: "Germany is famous for tuition-free or low-cost education at world-class universities. Engineering, technology, and business programs are especially renowned.",
    duration: "1–3 Years", intake: "October / April",
  },
  {
    name: "Turkey", flag: "🇹🇷", lat: 39.9334, lng: 32.8597,
    universities: "30+", students: "300+",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    highlight: "Istanbul · Ankara · Bilkent", color: "#ED4B00",
    desc: "Turkey offers affordable quality education with generous Turkish government scholarships for international students across a wide range of programs.",
    duration: "1–4 Years", intake: "October / February",
  },
  {
    name: "Malaysia", flag: "🇲🇾", lat: 3.139, lng: 101.6869,
    universities: "25+", students: "250+",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    highlight: "UM · UPM · Monash Malaysia", color: "#2100B1",
    desc: "Malaysia is a cost-effective destination offering internationally recognized degrees, especially MBBS programs, in a multicultural and student-friendly environment.",
    duration: "1–5 Years", intake: "March / September",
  },
  {
    name: "New Zealand", flag: "🇳🇿", lat: -36.8485, lng: 174.7633,
    universities: "15+", students: "100+",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    highlight: "Auckland · Otago · Victoria", color: "#ED4B00",
    desc: "New Zealand offers a safe, welcoming environment with globally recognized qualifications and a post-study work visa allowing up to 3 years of work experience.",
    duration: "1–3 Years", intake: "February / July",
  },
  {
    name: "UAE", flag: "🇦🇪", lat: 24.4539, lng: 54.3773,
    universities: "20+", students: "180+",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    highlight: "NYU Abu Dhabi · AUS · HBMeU", color: "#2100B1",
    desc: "The UAE is a rapidly growing education hub with global university campuses, a tax-free lifestyle, and strong networking in a world-class business environment.",
    duration: "1–4 Years", intake: "September / January",
  },
];

export default function Countries() {
  const globeRef = useRef(null);
  const containerRef = useRef(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const [GlobeComponent, setGlobeComponent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [globeSize, setGlobeSize] = useState(420);

  useEffect(() => {
    const checkSize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      if (w < 480) setGlobeSize(300);
      else if (w < 768) setGlobeSize(340);
      else setGlobeSize(420);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    import("react-globe.gl").then((mod) => setGlobeComponent(() => mod.default));
  }, []);

  useEffect(() => {
    if (!globeReady || !globeRef.current) return;
    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
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
    lat: c.lat, lng: c.lng,
    size: selected?.name === c.name ? 1.1 : 0.5,
    color: selected?.name === c.name ? "#ffffff" : "#ED4B00",
    label: c.name, country: c,
  }));

  return (
    <section id="countries" style={{ background: "#0d0d1a", padding: "100px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 18px", borderRadius: "999px", marginBottom: "20px", background: "rgba(237,75,0,0.12)", border: "1px solid rgba(237,75,0,0.25)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ED4B00", display: "inline-block" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#ED4B00", letterSpacing: "0.06em", textTransform: "uppercase" }}>Study Destinations</span>
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Your World,{" "}<span style={{ color: "#ED4B00" }}>Your Choice</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              We have active panels in 10 countries with 200+ partner universities. Pick your destination and we'll take care of the rest.
            </p>
            <div style={{ width: "60px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #2100B1, #ED4B00)", margin: "24px auto 0" }} />
          </motion.div>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "420px 1fr 340px",
          gap: "28px",
          alignItems: "start",
        }}>

          {/* ── COL 1: Globe ── */}
          <div style={{ position: isMobile ? "relative" : "sticky", top: "100px" }}>
            <div
              ref={containerRef}
              style={{
                width: isMobile ? `${globeSize}px` : "100%",
                height: isMobile ? `${globeSize}px` : undefined,
                aspectRatio: isMobile ? undefined : "1",
                borderRadius: "50%",
                boxShadow: "0 0 80px rgba(33,0,177,0.4), 0 0 160px rgba(237,75,0,0.12)",
                overflow: "hidden", background: "#0a0a18",
                margin: isMobile ? "0 auto" : undefined,
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
                  atmosphereColor="#2100B1" atmosphereAltitude={0.18}
                />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>Loading globe...</div>
                </div>
              )}
            </div>
            <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "16px", letterSpacing: "0.05em" }}>
              🌍 Click a dot or select from the list
            </p>
          </div>

          {/* ── COL 2: Country List ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px", paddingLeft: "4px" }}>
              Select a Destination
            </div>
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
                    background: isActive
                      ? `linear-gradient(135deg, ${country.color === "#ED4B00" ? "rgba(237,75,0,0.12)" : "rgba(33,0,177,0.12)"}, rgba(255,255,255,0.03))`
                      : "rgba(255,255,255,0.02)",
                    transition: "all 0.2s",
                    position: "relative", overflow: "hidden",
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}}
                >
                  {/* Active bar */}
                  {isActive && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: country.color, borderRadius: "0 2px 2px 0" }} />}

                  {/* Thumbnail */}
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, position: "relative", border: isActive ? `1.5px solid ${country.color}` : "1.5px solid rgba(255,255,255,0.08)" }}>
                    <img src={country.image} alt={country.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                      {country.flag}
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: isActive ? "white" : "rgba(255,255,255,0.75)", marginBottom: "2px" }}>{country.name}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{country.highlight}</div>
                  </div>

                  {/* Stats */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: isActive ? country.color : "rgba(255,255,255,0.4)" }}>{country.universities}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Universities</div>
                  </div>

                  <ChevronRight size={14} color={isActive ? country.color : "rgba(255,255,255,0.2)"} style={{ flexShrink: 0 }} />
                </motion.div>
              );
            })}
          </div>

          {/* ── COL 3: Detail Panel ── */}
          <div style={{ position: isMobile ? "relative" : "sticky", top: "100px" }}>
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                >
                  {/* Image hero */}
                  <div style={{ position: "relative", height: "180px" }}>
                    <img src={selected.image} alt={selected.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(13,13,26,0.98) 100%)" }} />
                    <div style={{ position: "absolute", bottom: "16px", left: "18px" }}>
                      <div style={{ fontSize: "28px", marginBottom: "4px" }}>{selected.flag}</div>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "white", lineHeight: 1.1 }}>{selected.name}</div>
                    </div>
                    <div style={{ position: "absolute", top: "12px", right: "12px", background: selected.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "999px", letterSpacing: "0.05em" }}>
                      {selected.universities} UNIS
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "18px 20px" }}>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "18px" }}>
                      {selected.desc}
                    </p>

                    {/* Stats grid */}
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

                    {/* Top unis */}
                    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "12px 14px", marginBottom: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Top Universities</div>
                      <div style={{ fontSize: "13px", color: selected.color, fontWeight: 600 }}>{selected.highlight}</div>
                    </div>

                    <a
                      href="#contact"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: selected.color, color: "white", borderRadius: "10px", fontSize: "13px", fontWeight: 700, textDecoration: "none", transition: "all 0.2s", boxShadow: `0 6px 20px ${selected.color}40` }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      Apply for {selected.name} <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", marginBottom: "20px" }}>
            Can't find your destination? We might still be able to help.
          </p>
          <a
            href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 36px", background: "#ED4B00", color: "white", borderRadius: "8px", fontSize: "15px", fontWeight: 700, textDecoration: "none", boxShadow: "0 6px 24px rgba(237,75,0,0.35)", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#cc3f00"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#ED4B00"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Talk to a Counselor <ArrowRight size={16} />
          </a>
        </div>

      </div>


    </section>
  );
}