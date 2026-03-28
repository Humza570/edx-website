// "use client";
// import { useEffect, useState, useRef } from "react";

// export default function UniGrid({ topUnis, color, countryName }) {
//   const [logos, setLogos] = useState(null);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     if (!countryName) return;

//     fetch(`/api/uni-logos?country=${encodeURIComponent(countryName)}`)
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.logos && data.logos.length > 0) {
//           setLogos(data.logos);
//         }
//       })
//       .catch(() => {});
//   }, [countryName]);

//   const unis = logos
//     ? logos
//     : (topUnis || []).map((uni) =>
//         typeof uni === "object"
//           ? uni
//           : { name: uni, logo: null, url: null }
//       );

//   // Auto-scroll
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track || unis.length === 0) return;

//     let animFrame;
//     let pos = 0;
//     const speed = 0.4;

//     const step = () => {
//       pos += speed;
//       const half = track.scrollWidth / 2;
//       if (pos >= half) pos = 0;
//       track.style.transform = `translateX(-${pos}px)`;
//       animFrame = requestAnimationFrame(step);
//     };

//     animFrame = requestAnimationFrame(step);

//     const pause = () => cancelAnimationFrame(animFrame);
//     const resume = () => { animFrame = requestAnimationFrame(step); };

//     track.addEventListener("mouseenter", pause);
//     track.addEventListener("mouseleave", resume);

//     return () => {
//       cancelAnimationFrame(animFrame);
//       track.removeEventListener("mouseenter", pause);
//       track.removeEventListener("mouseleave", resume);
//     };
//   }, [unis]);

//   // Duplicate for infinite loop
//   const doubled = [...unis, ...unis];

//   return (
//     <div
//       style={{
//         overflow: "hidden",
//         width: "100%",
//         padding: "8px 0",
//         position: "relative",
//       }}
//     >
//       {/* Fade edges */}
//       <div style={{
//         position: "absolute", left: 0, top: 0, bottom: 0, width: "48px",
//         background: `linear-gradient(to right, #f8f9ff, transparent)`,
//         zIndex: 2, pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute", right: 0, top: 0, bottom: 0, width: "48px",
//         background: `linear-gradient(to left, #f8f9ff, transparent)`,
//         zIndex: 2, pointerEvents: "none",
//       }} />

//       <div
//         ref={trackRef}
//         style={{
//           display: "flex",
//           gap: "12px",
//           width: "max-content",
//           willChange: "transform",
//         }}
//       >
//         {doubled.map((uni, i) => {
//           const card = (
//             <div
//               style={{
//                 width: "130px",
//                 height: "90px",
//                 background: "white",
//                 borderRadius: "12px",
//                 border: `1px solid ${color}22`,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "6px",
//                 padding: "10px",
//                 flexShrink: 0,
//                 transition: "box-shadow 0.2s, transform 0.2s",
//                 cursor: uni.url ? "pointer" : "default",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.boxShadow = `0 4px 18px ${color}33`;
//                 e.currentTarget.style.transform = "translateY(-3px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.boxShadow = "none";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               {uni.logo ? (
//                 <img
//                   src={uni.logo}
//                   alt={uni.name}
//                   style={{ width: "100%", height: "52px", objectFit: "contain" }}
//                 />
//               ) : (
//                 <span style={{ fontSize: "26px" }}>🎓</span>
//               )}
//               <span style={{
//                 fontSize: "10px",
//                 color: "#666",
//                 fontWeight: 600,
//                 textAlign: "center",
//                 lineHeight: 1.3,
//                 overflow: "hidden",
//                 display: "-webkit-box",
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: "vertical",
//                 width: "100%",
//               }}>
//                 {uni.name}
//               </span>
//             </div>
//           );

//           return uni.url ? (
//             <a
//               key={i}
//               href={uni.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ textDecoration: "none", flexShrink: 0 }}
//             >
//               {card}
//             </a>
//           ) : (
//             <div key={i} style={{ flexShrink: 0 }}>{card}</div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";

const INITIAL_SHOW = 12;

function getInitials(name) {
  return name
    .split(/[\s\-()]+/)
    .filter((w) => w.length > 2 && !["and", "the", "for", "of", "in"].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function getAccentColor(name) {
  const palette = [
    "#2100B1", "#ED4B00", "#0ea5e9", "#7c3aed",
    "#059669", "#dc2626", "#d97706", "#0891b2",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return palette[Math.abs(hash) % palette.length];
}

export default function UniGrid({ topUnis, color, countryName }) {
  const [logos, setLogos] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    if (!countryName) return;
    fetch(`/api/uni-logos?country=${encodeURIComponent(countryName)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.logos && data.logos.length > 0) setLogos(data.logos);
      })
      .catch(() => {});
  }, [countryName]);

  const unis = logos
    ? logos
    : (topUnis || []).map((uni) =>
        typeof uni === "object" ? uni : { name: uni, logo: null, url: null }
      );

  const visible = showAll ? unis : unis.slice(0, INITIAL_SHOW);
  const hasMore = unis.length > INITIAL_SHOW;

  const handleImgError = (i) => setImgErrors((prev) => ({ ...prev, [i]: true }));

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px" }}>
        {visible.map((uni, i) => {
          const hasLogo = uni.logo && !imgErrors[i];
          const accent = getAccentColor(uni.name);
          const initials = getInitials(uni.name);

          const cardInner = (
            <div
              style={{
                background: "white",
                borderRadius: "14px",
                border: "1px solid rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "16px 12px",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
                cursor: uni.url ? "pointer" : "default",
                width: "100%",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 24px ${color}28`;
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = `${color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
              }}
            >
              {/* Logo box — always colored background so white logos show up */}
              <div style={{
                width: "64px", height: "64px", borderRadius: "14px",
                background: `linear-gradient(135deg, ${accent}18, ${accent}08)`,
                border: `1.5px solid ${accent}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, overflow: "hidden",
                padding: hasLogo ? "6px" : "0",
              }}>
                {hasLogo ? (
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    onError={() => handleImgError(i)}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <span style={{
                    fontSize: "20px", fontWeight: 800,
                    color: accent, letterSpacing: "-0.03em", lineHeight: 1,
                  }}>
                    {initials || "🎓"}
                  </span>
                )}
              </div>

              {/* Name */}
              <span style={{
                fontSize: "11px", color: "#444", fontWeight: 600,
                textAlign: "center", lineHeight: 1.4,
                overflow: "hidden", display: "-webkit-box",
                WebkitLineClamp: 3, WebkitBoxOrient: "vertical", width: "100%",
              }}>
                {uni.name}
              </span>

              {/* URL pill */}
              {uni.url && (
                <span style={{
                  fontSize: "9px", color: accent, fontWeight: 600,
                  background: `${accent}10`, padding: "2px 8px",
                  borderRadius: "999px", letterSpacing: "0.02em",
                  maxWidth: "100%", overflow: "hidden",
                  textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>
                  {uni.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
                </span>
              )}
            </div>
          );

          return uni.url ? (
            <a key={i} href={uni.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex" }}>
              {cardInner}
            </a>
          ) : (
            <div key={i} style={{ display: "flex" }}>{cardInner}</div>
          );
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll((p) => !p)}
          style={{
            marginTop: "16px", width: "100%", padding: "11px",
            background: "white", border: `1.5px solid ${color}40`,
            borderRadius: "12px", color: color,
            fontSize: "13px", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = `${color}0a`; e.currentTarget.style.borderColor = color; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = `${color}40`; }}
        >
          {showAll ? "Show Less ↑" : `Show All ${unis.length} Universities ↓`}
        </button>
      )}
    </div>
  );
}