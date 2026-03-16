import About from "../components/About";
import OurProcess from "../components/OurProcess";
import { aboutContent } from "@/app/data/services";

export const metadata = {
  title: "About Us | EdX Consultants Pvt. Ltd.",
  description:
    "Learn about EdX Consultants — Pakistan's leading study abroad consultancy with 10+ years of experience helping 5,000+ students achieve their international education dreams.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)",
          paddingTop: "160px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(33,0,177,0.15)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(237,75,0,0.1)", filter: "blur(70px)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            <a href="/" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px" }}>›</span>
            <span style={{ fontSize: "13px", color: "#ED4B00", fontWeight: 600 }}>About Us</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: "white", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            Shaping Careers,<br />
            <span style={{ color: "#ED4B00" }}>Transforming Lives</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, maxWidth: "60vw", margin: "0 auto", textAlign: "center" }}>
            {aboutContent.ourStory.text}
          </p>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Our Process Section */}
      <OurProcess />

    </main>
  );
}