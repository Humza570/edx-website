"use client";

export default function BlogImage({ src, fallback, alt, style, caption }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        style={style}
        onError={(e) => {
          if (fallback) e.currentTarget.src = fallback;
        }}
      />
      {caption && (
        <div style={{ background: "white", padding: "12px 20px", fontSize: "13px", color: "#888", textAlign: "center", fontStyle: "italic" }}>
          {caption}
        </div>
      )}
    </div>
  );
}