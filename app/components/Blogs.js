"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const blogs = [
  {
    slug: "how-to-apply-uk-university",
    title:
      "How to Apply to a UK University: Step-by-Step Guide for Pakistani Students",
    excerpt:
      "Applying to a UK university can seem overwhelming, but with the right guidance it becomes straightforward. From choosing your course to submitting your UCAS application — here is everything you need to know.",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    category: "United Kingdom",
    author: "EdX Consultants",
    date: "March 10, 2025",
    readTime: "5 min read",
    color: "#ED4B00",
  },
  {
    slug: "scholarship-guide-2025",
    title: "Top Scholarships for Pakistani Students Studying Abroad in 2025",
    excerpt:
      "From the Chevening Scholarship in the UK to the Turkish Government Scholarship — we have compiled the best fully-funded opportunities available for Pakistani students this year.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    category: "Scholarships",
    author: "EdX Consultants",
    date: "February 22, 2025",
    readTime: "7 min read",
    color: "#2100B1",
  },
  {
    slug: "ielts-vs-pte-which-is-better",
    title: "IELTS vs PTE: Which English Test Should You Take in 2025?",
    excerpt:
      "Both IELTS and PTE are accepted by universities worldwide, but which one is right for you? We break down the key differences, difficulty levels, costs, and which countries prefer which test.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    category: "Test Preparation",
    author: "EdX Consultants",
    date: "January 15, 2025",
    readTime: "6 min read",
    color: "#ED4B00",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Blogs() {
  return (
    <section
      id="blogs"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle bg accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #2100B1, #ED4B00)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(33,0,177,0.04)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(237,75,0,0.04)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "16px",
                background: "rgba(237,75,0,0.08)",
                border: "1px solid rgba(237,75,0,0.2)",
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
                Latest Insights
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: "#0d0d1a",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              From Our <span style={{ color: "#ED4B00" }}>Blog</span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#777",
                maxWidth: "460px",
                lineHeight: 1.7,
              }}
            >
              Expert advice, guides, and tips to help you navigate your study
              abroad journey.
            </p>
          </div>

          {/* View all button — desktop */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              border: "2px solid #0d0d1a",
              color: "#0d0d1a",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0d0d1a";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0d0d1a";
            }}
          >
            View All Blogs <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={cardVariants}
            >
              <Link
                href={`/blog/${blog.slug}`}
                style={{
                  textDecoration: "none",
                  display: "block",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.07)",
                    background: "white",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                    transition: "all 0.3s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(0,0,0,0.12)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 20px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "210px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 50%, rgba(13,13,26,0.5) 100%)",
                      }}
                    />

                    {/* Category badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        background: blog.color,
                        color: "white",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "999px",
                        letterSpacing: "0.04em",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Tag size={10} />
                      {blog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "14px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#999",
                        }}
                      >
                        <User size={11} />
                        <span style={{ fontSize: "12px", fontWeight: 500 }}>
                          {blog.author}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#999",
                        }}
                      >
                        <Clock size={11} />
                        <span style={{ fontSize: "12px", fontWeight: 500 }}>
                          {blog.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 800,
                        color: "#0d0d1a",
                        lineHeight: 1.4,
                        marginBottom: "12px",
                        letterSpacing: "-0.01em",
                        flex: 1,
                      }}
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#777",
                        lineHeight: 1.75,
                        marginBottom: "20px",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.excerpt}
                    </p>

                    {/* Read more */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: blog.color,
                        fontSize: "13px",
                        fontWeight: 700,
                        borderTop: "1px solid rgba(0,0,0,0.07)",
                        paddingTop: "16px",
                        marginTop: "auto",
                      }}
                    >
                      Read More <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all — mobile */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 36px",
              background: "linear-gradient(135deg, #2100B1, #ED4B00)",
              color: "white",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(33,0,177,0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 32px rgba(33,0,177,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(33,0,177,0.25)";
            }}
          >
            Explore All Blogs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
