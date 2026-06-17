import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, ArrowRight, CheckCircle, AlertCircle, Tag } from "lucide-react";
import posts from "../posts/index";
import BlogImage from "../BlogImage";

// Build a map for quick lookup
const postsMap = Object.fromEntries(posts.map((p) => [p.slug, p]));

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postsMap[slug];
  if (!post) return {};
  return {
    title: `${post.title} | EdX Consultants Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.heroImageFallback],
    },
  };
}

// ── Section Renderers ────────────────────────────────────────
function SectionText({ section, color }) {
  return (
    <div>
      {section.content.split("\n\n").map((para, i) => (
        <p
          key={i}
          style={{ fontSize: "15px", color: "#555", lineHeight: 1.85, marginBottom: "14px" }}
          dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, "<br/>") }}
        />
      ))}
    </div>
  );
}

function SectionChecklist({ section, color }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {section.items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <CheckCircle size={18} color={color} style={{ flexShrink: 0, marginTop: "2px" }} />
          <span style={{ fontSize: "15px", color: "#444", lineHeight: 1.65 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function SectionSteps({ section, color }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {section.steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div
            style={{
              minWidth: "56px",
              height: "44px",
              borderRadius: "12px",
              background: color,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 800,
              flexShrink: 0,
              padding: "0 8px",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {step.num}
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#0d0d1a", marginBottom: "4px" }}>{step.title}</div>
            <div style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{step.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionWarning({ section }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", padding: "10px 16px", background: "rgba(239,68,68,0.07)", borderRadius: "8px", border: "1px solid rgba(239,68,68,0.15)" }}>
        <AlertCircle size={16} color="#ef4444" />
        <span style={{ fontSize: "13px", color: "#ef4444", fontWeight: 700 }}>Watch out for these common mistakes</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {section.items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", flexShrink: 0, marginTop: "8px" }} />
            <span style={{ fontSize: "15px", color: "#555", lineHeight: 1.65 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderSection(section, index, color) {
  // Image section — no card wrapper
  if (section.type === "image") {
    return (
      <div
        key={index}
        style={{ marginBottom: "20px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}
      >
        <BlogImage
          src={section.src}
          fallback={section.fallback}
          alt={section.alt}
          caption={section.caption}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    );
  }

  // All other sections get a white card with heading
  return (
    <div
      key={index}
      style={{ background: "white", borderRadius: "20px", padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", marginBottom: "20px" }}
    >
      {section.heading && (
        <h2
          style={{ fontSize: "22px", fontWeight: 800, color: "#0d0d1a", marginBottom: "20px", letterSpacing: "-0.01em", paddingBottom: "12px", borderBottom: `2px solid ${color}18` }}
        >
          {section.heading}
        </h2>
      )}

      {section.type === "text" && <SectionText section={section} color={color} />}
      {section.type === "checklist" && <SectionChecklist section={section} color={color} />}
      {section.type === "steps" && <SectionSteps section={section} color={color} />}
      {section.type === "warning" && <SectionWarning section={section} />}
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = postsMap[slug];
  if (!post) notFound();

  return (
    <main>
      {/* ── HERO ── */}
      <div style={{ position: "relative", minHeight: "1000px", overflow: "hidden" }}>
        <BlogImage
          src={post.heroImage}
          fallback={post.heroImageFallback}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
        />
        <div
          style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,13,26,0.5) 0%, rgba(13,13,26,0.93) 100%)" }}
        />

        <div
          style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", padding: "clamp(120px, 15vw, 180px) 24px 64px" }}
        >
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
            <Link href="/blog" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
            <span style={{ fontSize: "13px", color: post.color, fontWeight: 600 }}>{post.category}</span>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ background: post.color, color: "white", fontSize: "11px", fontWeight: 700, padding: "5px 14px", borderRadius: "999px", letterSpacing: "0.05em" }}>
              {post.category}
            </span>
            <span style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", color: "white", fontSize: "11px", fontWeight: 600, padding: "5px 14px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)" }}>
              {post.flag} {post.country}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(26px, 4.5vw, 48px)", fontWeight: 800, color: "white", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #2100B1, #ED4B00)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={15} color="white" />
              </div>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{post.author}</span>
            </div>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={13} /> {post.readTime}
            </span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>{post.date}</span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <div style={{ background: "#f8f9ff", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Intro */}
          <div style={{ background: "white", borderRadius: "20px", padding: "36px", border: `2px solid ${post.color}22`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "28px" }}>
            <p style={{ fontSize: "17px", color: "#444", lineHeight: 1.9, margin: 0, fontStyle: "italic", borderLeft: `4px solid ${post.color}`, paddingLeft: "20px" }}>
              {post.intro}
            </p>
          </div>

          {/* All sections */}
          {post.sections.map((section, i) => renderSection(section, i, post.color))}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "32px", marginBottom: "48px" }}>
              <Tag size={15} color="#888" />
              {post.tags.map((tag) => (
                <span key={tag} style={{ padding: "5px 14px", background: "white", borderRadius: "999px", fontSize: "12px", fontWeight: 600, color: "#555", border: "1px solid rgba(0,0,0,0.1)" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, #2100B1, #ED4B00)", borderRadius: "20px", padding: "40px", textAlign: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "white", marginBottom: "10px" }}>
              Need Personalized Guidance?
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", marginBottom: "24px", lineHeight: 1.7 }}>
              Our expert counselors can guide you through every step of your study abroad journey — free of charge.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", background: "white", color: "#2100B1", borderRadius: "8px", fontSize: "15px", fontWeight: 800, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
            >
              Book Free Consultation <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
