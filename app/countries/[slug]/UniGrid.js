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

const INITIAL_SHOW = 10;

export default function UniGrid({ topUnis, color, countryName }) {
  const [logos, setLogos] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "10px",
        }}
      >
        {visible.map((uni, i) => {
          const card = (
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                border: `1px solid rgba(0,0,0,0.08)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 8px",
                height: "100px",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: uni.url ? "pointer" : "default",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 18px ${color}33`;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {uni.logo ? (
                /* Checkerboard background container — makes white logos visible */
                <div
                  style={{
                    width: "100%",
                    height: "52px",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage:
                      "linear-gradient(45deg, #e8e8e8 25%, transparent 25%), linear-gradient(-45deg, #e8e8e8 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e8e8e8 75%), linear-gradient(-45deg, transparent 75%, #e8e8e8 75%)",
                    backgroundSize: "8px 8px",
                    backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px",
                    backgroundColor: "#f4f4f4",
                    padding: "4px",
                  }}
                >
                  <img
                    src={uni.logo}
                    alt={uni.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "44px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "52px",
                    borderRadius: "6px",
                    background: `linear-gradient(135deg, ${color}15, ${color}08)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  🎓
                </div>
              )}
              <span
                style={{
                  fontSize: "10px",
                  color: "#555",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  width: "100%",
                }}
              >
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
              style={{ textDecoration: "none" }}
            >
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          );
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setShowAll((p) => !p)}
          style={{
            marginTop: "14px",
            width: "100%",
            padding: "10px",
            background: "white",
            border: `1.5px solid ${color}44`,
            borderRadius: "10px",
            color: color,
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = `${color}0f`)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          {showAll ? "Show Less ↑" : `Show All ${unis.length} Universities ↓`}
        </button>
      )}
    </div>
  );
}