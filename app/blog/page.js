"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag, Search } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    slug: "how-to-get-uk-student-visa",
    title: "How to Get a UK Student Visa in 2025 — Complete Guide",
    excerpt:
      "Everything Pakistani students need to know about the UK Student visa — documents, bank statements, CAS, and how to avoid the most common rejection reasons.",
    category: "Visa Guides",
    country: "United Kingdom",
    date: "February 15, 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    featured: true,
    color: "#ED4B00",
  },
  {
    slug: "canada-pgwp-guide",
    title: "Canada Post-Graduate Work Permit — Everything You Need to Know",
    excerpt:
      "The PGWP is one of Canada's biggest advantages for international students. Learn who qualifies, how long it lasts, and how it leads to PR.",
    category: "Work & PR",
    country: "Canada",
    date: "January 28, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&q=80",
    featured: false,
    color: "#2100B1",
  },
  {
    slug: "germany-free-education-guide",
    title:
      "Study in Germany for Almost Free — How Pakistani Students Can Do It",
    excerpt:
      "Germany's public universities charge little to no tuition. Here's a complete guide on how to apply, what the blocked account is, and which universities to target.",
    category: "Study Guides",
    country: "Germany",
    date: "January 10, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    featured: false,
    color: "#ED4B00",
  },
  {
    slug: "ielts-score-requirements",
    title: "IELTS Score Requirements for Top Universities in 2025",
    excerpt:
      "What IELTS score do you need for UK, Canada, Australia, and USA universities? We break down the requirements for 50+ top universities.",
    category: "IELTS & Tests",
    country: "All Countries",
    date: "December 20, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    featured: false,
    color: "#2100B1",
  },
  {
    slug: "australia-student-visa-2025",
    title: "Australia Student Visa (Subclass 500) — Step by Step Guide 2025",
    excerpt:
      "The complete guide to applying for the Australian student visa — GTE statement, health insurance, financial requirements, and processing times.",
    category: "Visa Guides",
    country: "Australia",
    date: "December 5, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    featured: false,
    color: "#ED4B00",
  },
  {
    slug: "turkish-government-scholarship",
    title:
      "Turkish Government Scholarship 2025 — Full Guide for Pakistani Students",
    excerpt:
      "The Türkiye Burslari scholarship covers full tuition, accommodation, and a monthly stipend. Here's how to apply and what to expect.",
    category: "Scholarships",
    country: "Türkiye",
    date: "November 18, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    featured: false,
    color: "#2100B1",
  },
  {
    slug: "sop-writing-guide",
    title: "How to Write a Statement of Purpose That Gets You Admitted",
    excerpt:
      "Your SOP can make or break your university application. Learn the exact structure, common mistakes to avoid, and what admissions committees actually look for.",
    category: "Applications",
    country: "All Countries",
    date: "November 2, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    featured: false,
    color: "#ED4B00",
  },
  {
    slug: "mbbs-in-malaysia",
    title: "MBBS in Malaysia — Cost, Universities, and PMC Recognition",
    excerpt:
      "Malaysia is the top destination for Pakistani MBBS students. Here's everything about costs, top medical universities, PMC recognition, and how to apply.",
    category: "Study Guides",
    country: "Malaysia",
    date: "October 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    featured: false,
    color: "#2100B1",
  },
];

const categories = [
  "All",
  "Visa Guides",
  "Study Guides",
  "Scholarships",
  "IELTS & Tests",
  "Work & PR",
  "Applications",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchCat =
      activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find((p) => p.featured);
  const regular = filtered.filter(
    (p) => !p.featured || activeCategory !== "All" || searchQuery,
  );

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)",
          paddingTop: "160px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(33,0,177,0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(237,75,0,0.1)",
            filter: "blur(70px)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, padding: "0 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Home
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span
              style={{ fontSize: "13px", color: "#ED4B00", fontWeight: 600 }}
            >
              Blog
            </span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              marginBottom: "20px",
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
              Study Abroad Insights
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Expert Guides &<br />
            <span style={{ color: "#ED4B00" }}>Study Abroad Tips</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Free guides, visa tips, scholarship info, and everything you need to
            plan your international education journey.
          </p>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Search
              size={18}
              color="rgba(255,255,255,0.4)"
              style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 16px 16px 50px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                color: "white",
                fontSize: "15px",
                outline: "none",
                fontFamily: "inherit",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div
        style={{
          background: "#f8f9ff",
          padding: "80px 24px",
          minHeight: "60vh",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Category Filters */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "56px",
              justifyContent: "center",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border:
                    activeCategory === cat
                      ? "none"
                      : "1.5px solid rgba(33,0,177,0.2)",
                  background: activeCategory === cat ? "#2100B1" : "white",
                  color: activeCategory === cat ? "white" : "#555",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featured && activeCategory === "All" && !searchQuery && (
            <Link
              href={`/blog/${featured.slug}`}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: "48px",
              }}
            >
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  background: "white",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.3s",
                }}
                className="featured-card"
              >
                <div style={{ position: "relative", minHeight: "320px" }}>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(33,0,177,0.3), transparent)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "#ED4B00",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "5px 14px",
                      borderRadius: "999px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ⭐ FEATURED
                  </div>
                </div>
                <div
                  style={{
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(237,75,0,0.1)",
                        color: "#ED4B00",
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span style={{ fontSize: "12px", color: "#888" }}>
                      🇬🇧 {featured.country}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: "clamp(22px, 3vw, 30px)",
                      fontWeight: 800,
                      color: "#0d0d1a",
                      lineHeight: 1.3,
                      marginBottom: "16px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#666",
                      lineHeight: 1.75,
                      marginBottom: "24px",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#888",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <Clock size={13} /> {featured.readTime}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#888",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <User size={13} /> EdX Team
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#2100B1",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      Read Article <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          {regular.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {regular.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none" }}
                  className="blog-card"
                >
                  <div
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                      height: "100%",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        height: "200px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.4s",
                        }}
                        className="blog-img"
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          left: "14px",
                          background: post.color,
                          color: "white",
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "4px 12px",
                          borderRadius: "999px",
                        }}
                      >
                        {post.category}
                      </div>
                    </div>
                    <div style={{ padding: "22px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginBottom: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#888",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span style={{ fontSize: "12px", color: "#bbb" }}>
                          ·
                        </span>
                        <span style={{ fontSize: "12px", color: "#888" }}>
                          {post.date}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0d0d1a",
                          lineHeight: 1.4,
                          marginBottom: "10px",
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#777",
                          lineHeight: 1.7,
                          marginBottom: "16px",
                        }}
                      >
                        {post.excerpt.slice(0, 110)}...
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          color: post.color,
                          fontSize: "13px",
                          fontWeight: 700,
                        }}
                      >
                        Read More <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                No articles found
              </h3>
              <p style={{ color: "#888" }}>
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #2100B1, #ED4B00)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "12px",
          }}
        >
          Never Miss an Update
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "480px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Get free study abroad tips, visa updates, and scholarship alerts
          straight to your inbox.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex: 1,
              minWidth: "220px",
              padding: "14px 20px",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <button
            style={{
              padding: "14px 28px",
              background: "#0d0d1a",
              color: "white",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe Free
          </button>
        </div>
      </div>
      <style>{`
        .featured-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important; }
        .blog-card:hover > div { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1) !important; }
        .blog-card:hover .blog-img { transform: scale(1.06); }
      `}</style>
    </main>
  );
}
