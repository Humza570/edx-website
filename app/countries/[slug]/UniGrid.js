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
import { useEffect, useState, useRef } from "react";

export default function UniGrid({ topUnis, color, countryName }) {
  const [logos, setLogos] = useState(null);
  const [imgErrors, setImgErrors] = useState({});
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

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

  // Duplicate enough times to fill screen + loop seamlessly
  const repeated = unis.length > 0 ? [...unis, ...unis, ...unis] : [];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || repeated.length === 0) return;

    const SPEED = 0.5; // px per frame

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Reset when we've scrolled one full set width
        const fullWidth = track.scrollWidth / 3;
        if (posRef.current >= fullWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [repeated.length]);

  const handleImgError = (i) =>
    setImgErrors((prev) => ({ ...prev, [i]: true }));

  if (unis.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        padding: "4px 0",
      }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {/* Left fade */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to right, white, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px",
        background: "linear-gradient(to left, white, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "12px",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {repeated.map((uni, i) => {
          const hasLogo = uni.logo && !imgErrors[i];

          const card = (
            <div
              style={{
                width: "140px",
                height: "88px",
                background: "white",
                borderRadius: "14px",
                border: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "12px 10px",
                flexShrink: 0,
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: uni.url ? "pointer" : "default",
                boxSizing: "border-box",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 20px ${color}30`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {hasLogo ? (
                <img
                  src={uni.logo}
                  alt={uni.name}
                  onError={() => handleImgError(i)}
                  style={{
                    width: "100%",
                    height: "48px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <div style={{
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}>
                  <span style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: color,
                    textAlign: "center",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}>
                    {uni.name.split(/[\s()]+/).filter(w => w.length > 2 && !["and","the","for","of","in"].includes(w.toLowerCase())).slice(0, 2).map(w => w[0]).join("") || "🎓"}
                  </span>
                </div>
              )}
              <span style={{
                fontSize: "9.5px",
                color: "#666",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: 1.3,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                width: "100%",
              }}>
                {uni.name}
              </span>
            </div>
          );

          return uni.url ? (
            <a
              key={i}
              href={uni.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", flexShrink: 0 }}
            >
              {card}
            </a>
          ) : (
            <div key={i} style={{ flexShrink: 0 }}>
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}