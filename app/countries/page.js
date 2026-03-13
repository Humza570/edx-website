"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

const countries = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    students: "800+",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&q=80",
    highlight: "Oxford · Cambridge · Imperial",
    color: "#ED4B00",
    tag: "Most Popular",
    desc: "World-class education with globally recognized degrees. Home to Oxford, Cambridge, and Imperial College.",
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    universities: "200+",
    students: "600+",
    image:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80",
    highlight: "Harvard · MIT · Stanford",
    color: "#2100B1",
    tag: null,
    desc: "Unmatched research opportunities and campus diversity across the most prestigious universities in the world.",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    universities: "80+",
    students: "500+",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&q=80",
    highlight: "Toronto · UBC · McGill",
    color: "#ED4B00",
    tag: "PR Pathway",
    desc: "Affordable tuition, post-study work permits, and a clear pathway to permanent residency.",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    universities: "40+",
    students: "400+",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    highlight: "Melbourne · Sydney · ANU",
    color: "#2100B1",
    tag: null,
    desc: "World-ranked universities, safe environment, and generous post-study work rights up to 4 years.",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    universities: "20+",
    students: "150+",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80",
    highlight: "Trinity · UCD · UCC",
    color: "#ED4B00",
    tag: null,
    desc: "English-speaking EU country with top universities and a booming tech industry.",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    universities: "50+",
    students: "200+",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    highlight: "TU Munich · Heidelberg · LMU",
    color: "#2100B1",
    tag: "Low Tuition",
    desc: "Tuition-free or low-cost education at world-class universities. Ideal for engineering and technology.",
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    universities: "30+",
    students: "300+",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    highlight: "Istanbul · Ankara · Bilkent",
    color: "#ED4B00",
    tag: "Scholarships",
    desc: "Affordable quality education with generous Turkish government scholarships for international students.",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    universities: "25+",
    students: "250+",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
    highlight: "UM · UPM · Monash Malaysia",
    color: "#2100B1",
    tag: "MBBS",
    desc: "Cost-effective destination with internationally recognized degrees, especially popular for MBBS.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "15+",
    students: "100+",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    highlight: "Auckland · Otago · Victoria",
    color: "#ED4B00",
    tag: null,
    desc: "Safe, welcoming environment with globally recognized qualifications and post-study work visa.",
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    universities: "20+",
    students: "180+",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    highlight: "NYU Abu Dhabi · AUS · HBMeU",
    color: "#2100B1",
    tag: null,
    desc: "Rapidly growing education hub with global university campuses and a tax-free lifestyle.",
  },
];

export default function CountriesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
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
              Countries
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
              Study Destinations
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
            10 Countries,
            <br />
            <span style={{ color: "#ED4B00" }}>Endless Possibilities</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "560px",
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            We have active panels and 200+ partner universities across 10
            destinations. Find the country that's right for you.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {[
              ["10", "Countries"],
              ["200+", "Universities"],
              ["5,000+", "Students Placed"],
              ["98%", "Visa Success"],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#ED4B00",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries Grid */}
      <div style={{ background: "#0d0d1a", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Choose Your <span style={{ color: "#ED4B00" }}>Destination</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.45)",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              Click on any country to explore universities, costs, visa info,
              and more.
            </p>
            <div
              style={{
                width: "60px",
                height: "3px",
                borderRadius: "2px",
                background: "linear-gradient(90deg, #2100B1, #ED4B00)",
                margin: "20px auto 0",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/countries/${country.slug}`}
                style={{ textDecoration: "none" }}
                className="country-card"
              >
                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.03)",
                    transition: "all 0.3s",
                    height: "100%",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={country.image}
                      alt={country.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      className="country-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(13,13,26,0.9) 100%)",
                      }}
                    />

                    {/* Flag */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        fontSize: "32px",
                        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
                      }}
                    >
                      {country.flag}
                    </div>

                    {/* Tag */}
                    {country.tag && (
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          right: "14px",
                          background: country.color,
                          color: "white",
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {country.tag}
                      </div>
                    )}

                    {/* Country name on image */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "14px",
                        left: "14px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: 800,
                          color: "white",
                        }}
                      >
                        {country.name}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: country.color,
                          fontWeight: 600,
                          marginTop: "2px",
                        }}
                      >
                        {country.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    style={{
                      padding: "20px",
                      borderTop: `2px solid ${country.color}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.7,
                        marginBottom: "16px",
                      }}
                    >
                      {country.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", gap: "16px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <GraduationCap size={12} color={country.color} />
                          <span
                            style={{
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.5)",
                              fontWeight: 600,
                            }}
                          >
                            {country.universities} Unis
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Users size={12} color="rgba(255,255,255,0.3)" />
                          <span
                            style={{
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.35)",
                              fontWeight: 600,
                            }}
                          >
                            {country.students} Students
                          </span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          color: country.color,
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        Explore <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
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
            marginBottom: "16px",
          }}
        >
          Not Sure Which Country?
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
          Our counselors will help you pick the best destination based on your
          profile, budget, and goals.
        </p>
        <Link
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px 40px",
            background: "white",
            color: "#2100B1",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          }}
        >
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
      <style>{`
        .country-card:hover > div { border-color: rgba(255,255,255,0.15) !important; transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .country-card:hover .country-img { transform: scale(1.06); }
      `}</style>
    </main>
  );
}
