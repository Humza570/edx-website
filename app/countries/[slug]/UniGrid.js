"use client";

export default function UniGrid({ topUnis, color }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
      }}
    >
      {topUnis.map((uni, i) => {
        const isObj = typeof uni === "object";
        const name = isObj ? uni.name : uni;
        const logo = isObj ? uni.logo : null;
        const url = isObj ? uni.url : null;

        const cardContent = (
          <div
            style={{
              padding: "12px 14px",
              background: "white",
              borderRadius: "10px",
              border: `1px solid ${color}22`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              textAlign: "center",
              height: "100%",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 16px ${color}33`;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {logo ? (
              <img
                src={logo}
                alt={`${name} logo`}
                style={{
                  width: "100%",
                  height: "52px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <span style={{ fontSize: "22px" }}>🎓</span>
            )}
            <span
              style={{
                fontSize: "12px",
                color: "#444",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              {name}
            </span>
          </div>
        );

        return url ? (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${name}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            {cardContent}
          </a>
        ) : (
          <div key={i}>{cardContent}</div>
        );
      })}
    </div>
  );
}