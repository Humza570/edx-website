"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Shield,
  Star,
} from "lucide-react";

const achievements = [
  { number: "10+", label: "Years Experience" },
  { number: "5,000+", label: "Students Placed" },
  { number: "200+", label: "Partner Universities" },
  { number: "98%", label: "Visa Success Rate" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide personalized support, career counseling, and professional yet reliable educational consultancy services that empower students to explore top-notch educational opportunities worldwide and help them achieve their academic and career goals.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    desc: "To be the most trusted study abroad consultancy in Pakistan, known for integrity, results, and lifelong student relationships — helping every deserving student shape their career and transform their life.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    desc: "Ensuring transparency in our processes for transforming your ambitions into achievements. Your success is our No. 1 priority and our processes are designed around your success.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "white", padding: "100px 24px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ── SPLIT LAYOUT ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(33,0,177,0.15)",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=85"
                alt="EdX Consultants Team"
                style={{
                  width: "100%",
                  height: "480px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(33,0,177,0.2) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-24px",
                right: "-24px",
                background: "white",
                borderRadius: "16px",
                padding: "20px 24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                border: "1px solid rgba(237,75,0,0.15)",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <Star size={16} color="#ED4B00" fill="#ED4B00" />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#ED4B00",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Trusted Since
                </span>
              </div>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  lineHeight: 1,
                }}
              >
                2014
              </div>
              <div
                style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}
              >
                10+ Years of Excellence
              </div>
            </motion.div>

            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                zIndex: -1,
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(33,0,177,0.06)",
              }}
            />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "20px",
                background: "rgba(33,0,177,0.07)",
                border: "1px solid rgba(33,0,177,0.15)",
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
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2100B1",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                About Us
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 800,
                color: "#0d0d1a",
                lineHeight: 1.15,
                marginBottom: "20px",
                letterSpacing: "-0.02em",
              }}
            >
              Nurturing Your{" "}
              <span style={{ color: "#2100B1" }}>Study Abroad</span>
              <br />
              Dreams into <span style={{ color: "#ED4B00" }}>Reality</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              At EdX Consultants, we aim to nurture your study abroad dreams
              into reality. With extensive expertise in international student
              recruitment & mobilization, transnational education, career
              counseling, and visa processing — we specialize in connecting
              aspiring students with top-ranked universities across the globe,
              including the UK, USA, Canada, Australia, Ireland, Germany,
              Turkey, Malaysia, and UAE.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              We don't just facilitate students — we help them in shaping their
              careers and transforming their lives. We strive to guide our
              students in making informed decisions by understanding their
              academic aspirations and synchronizing them with the best
              available educational opportunities worldwide.
            </p>

            {[
              "Free one-on-one consultation to design your personalized plan",
              "Dedicated visa counselor assigned to your case",
              "Direct partnerships with 200+ universities worldwide",
              "Pre-departure briefings and post-arrival support",
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <CheckCircle
                  size={18}
                  color="#ED4B00"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span
                  style={{ fontSize: "15px", color: "#444", lineHeight: 1.5 }}
                >
                  {point}
                </span>
              </div>
            ))}

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "32px",
                padding: "14px 32px",
                background: "#2100B1",
                color: "white",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(33,0,177,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1a0090";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2100B1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Free Consultation <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* ── ACHIEVEMENTS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "100px",
            boxShadow: "0 20px 60px rgba(33,0,177,0.12)",
          }}
        >
          {achievements.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "40px 24px",
                textAlign: "center",
                background: i % 2 === 0 ? "#2100B1" : "#ED4B00",
                borderRight:
                  i < achievements.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.75)",
                  marginTop: "8px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── CEO MESSAGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #0d0d1a 0%, #1a0050 100%)",
            borderRadius: "24px",
            padding: "clamp(40px, 6vw, 72px)",
            marginBottom: "100px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow blobs */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "rgba(237,75,0,0.08)",
              filter: "blur(70px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "15%",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "rgba(33,0,177,0.12)",
              filter: "blur(60px)",
            }}
          />

          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 10px",
              borderRadius: "999px",
              marginBottom: "15px",
              background: "rgba(237,75,0,0.12)",
              border: "1px solid rgba(237,75,0,0.25)",
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
                fontSize: "13px",
                fontWeight: 600,
                color: "#ED4B00",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Message from our CEO
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "56px",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* CEO Photo + Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <div
                style={{
                  width: "210px",
                  height: "210px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(237,75,0,0.5)",
                  boxShadow:
                    "0 0 0 8px rgba(237,75,0,0.08), 0 20px 60px rgba(0,0,0,0.4)",
                  background: "linear-gradient(135deg, #2100B1, #ED4B00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <img
                  src="/Dr.-Syed-Shujaat-Ali-Shah.jpg"
                  alt="Dr. Syed Shujaat Ali Shah"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML =
                      '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%">' +
                      '<span style="font-size:80px;font-weight:800;color:white;font-family:sans-serif">S</span>' +
                      "</div>";
                  }}
                />
              </div>

              {/* Name Card */}
              <div
                style={{
                  textAlign: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "18px 24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Dr. Syed Shujaat Ali Shah
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#ED4B00",
                    fontWeight: 600,
                    marginBottom: "3px",
                  }}
                >
                  Ph.D Marketing
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.04em",
                  }}
                >
                  CEO · EdX Consultants Pvt. Ltd.
                </div>
              </div>
            </div>

            {/* Message Text */}
            <div style={{ position: "relative" }}>
              {/* Big quote mark */}
              <div
                style={{
                  fontSize: "100px",
                  lineHeight: 0.7,
                  color: "#ED4B00",
                  opacity: 0.2,
                  fontFamily: "Georgia, serif",
                  marginBottom: "20px",
                  userSelect: "none",
                }}
              >
                "
              </div>

              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.9,
                  marginBottom: "16px",
                }}
              >
                Dear Students, I would like to take a moment to remind you that
                you are embarking on a journey that is full of possibilities and
                opportunities. Education is about more than simply learning;
                it's about influencing your future, unlocking doors to your
                aspirations, and empowering yourself to make an impact on the
                world.
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.9,
                  marginBottom: "16px",
                }}
              >
                The path may not always be easy, but it is filled with growth,
                learning, and opportunities. Remember, every challenge you
                encounter is an opportunity to grow, every setback teaches you
                to be resilient, and every success shows how committed you are.
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.9,
                  marginBottom: "16px",
                }}
              >
                At EdX Consultants, we are committed to support and mentor you
                at every stage of your academic journey. We believe in your
                potential and we are dedicated to providing you with the
                resources, counselling and guidance, and encouragement you
                require to make informed decisions about your future. Remember,
                you are capable of achieving greatness, and we are thrilled to
                accompany you on your journey to greatness.
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.9,
                  marginBottom: "28px",
                }}
              >
                Stay focused, stay positive, keep pushing your limits and never
                stop learning.{" "}
                <span style={{ color: "#ED4B00", fontWeight: 700 }}>
                  Believe in yourself — because we believe in you.
                </span>
              </p>

              {/* Signature line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "2px",
                    background: "#ED4B00",
                    borderRadius: "2px",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.45)",
                    fontStyle: "italic",
                  }}
                >
                  Warm Regards, Dr. Syed Shujaat Ali Shah
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── VALUES ── */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h3
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#0d0d1a",
              letterSpacing: "-0.02em",
            }}
          >
            What Drives <span style={{ color: "#2100B1" }}>Us</span>
          </h3>
          <div
            style={{
              width: "60px",
              height: "3px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #2100B1, #ED4B00)",
              margin: "16px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                padding: "36px 28px",
                borderRadius: "16px",
                background: "#f8f9ff",
                border: "1px solid rgba(33,0,177,0.08)",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(33,0,177,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background:
                    i === 1 ? "rgba(237,75,0,0.08)" : "rgba(33,0,177,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <val.icon
                  size={24}
                  color={i === 1 ? "#ED4B00" : "#2100B1"}
                  strokeWidth={1.8}
                />
              </div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0d0d1a",
                  marginBottom: "12px",
                }}
              >
                {val.title}
              </h4>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.75 }}>
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
