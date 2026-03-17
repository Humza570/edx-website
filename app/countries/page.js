"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Users } from "lucide-react";

const countries = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "gb",
    universities: "25+",
    students: "500+",
    image:
      "/Destinations/UK.jpg",
    highlight: "UEA · ARU · RGU",
    color: "#ED4B00",
    tag: "Most Popular",
    desc: "The United Kingdom is one of the most popular study destinations in the world. It is home to many globally recognized universities and offers high-quality education in fields like business, engineering, and arts. Students benefit from shorter degree programs, multicultural campuses, and strong career opportunities after graduation.",
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "us",
    universities: "20+",
    students: "100+",
    image:
      "/Destinations/USA.jpg",
    highlight: "Concordia · Avila · Texas State",
    color: "#2100B1",
    tag: null,
    desc: "The United States has some of the top universities in the world and offers a wide range of study programs and research opportunities. Students choose the US for its innovation, diverse campuses, and strong career opportunities, especially in technology, business, and science.",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "au",
    universities: "10+",
    students: "80+",
    image:
      "/Destinations/Australia.jpg",
    highlight: "Melbourne · ANU · Sydney",
    color: "#2100B1",
    tag: null,
    desc: "Australia offers world-class universities, modern campuses, and a friendly environment for international students. Students enjoy a high standard of living, part-time work opportunities, and strong career prospects after graduation.",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "ca",
    universities: "10+",
    students: "50+",
    image:
      "/Destinations/Canada.jpg",
    highlight: "UCW · Durham · George Brown",
    color: "#ED4B00",
    tag: "PR Pathway",
    desc: "Canada is known for its safe environment, high quality of life, and welcoming culture for international students. Students can work while studying and may also get opportunities to stay and work after graduation, which makes Canada a very attractive destination.",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "my",
    universities: "30+",
    students: "300+",
    image:
      "/Destinations/Malaysia.jpg",
    highlight: "APU · UCSI · Monash Malaysia",
    color: "#2100B1",
    tag: "MBBS",
    desc: "Malaysia is a cost-effective study destination with modern universities and international programs. Many universities offer globally recognized degrees and partnerships with universities in the UK and Australia.",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "de",
    universities: "10+",
    students: "100+",
    image:
      "/Destinations/Germany.jpg",
    highlight: "GISMA · UE · BSBI · Steinbeis",
    color: "#2100B1",
    tag: "Low Tuition",
    desc: "Germany is famous for its high-quality education and affordable tuition fees, especially at public universities. It is a great choice for students interested in engineering, technology, and research programs.",
  },
  {
    slug: "france",
    name: "France",
    flag: "fr",
    universities: "10+",
    students: "30+",
    image:
      "/Destinations/France.jpg",
    highlight: "Sorbonne · HEC Paris · École Polytechnique",
    color: "#ED4B00",
    tag: null,
    desc: "France offers academic excellence with a rich cultural experience and good international career prospects. Known for its excellent business schools and creative programs of study.",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "nl",
    universities: "10+",
    students: "50+",
    image:
      "/Destinations/Netherlands.jpg",
    highlight: "UE Amsterdam",
    color: "#2100B1",
    tag: null,
    desc: "The Netherlands is famous for its innovative educational system, English-taught courses, and open environment for international students. A modern system that emphasizes research and practical knowledge.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "nz",
    universities: "10+",
    students: "20+",
    image:
      "/Destinations/NewZealand.jpg",
    highlight: "Auckland · Otago · Victoria University",
    color: "#ED4B00",
    tag: null,
    desc: "New Zealand provides good quality education, a secure environment, and great prospects for international students. Famous for providing good student communities and a picturesque environment.",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "ie",
    universities: "25+",
    students: "10+",
    image:
      "/Destinations/Ireland.jpg",
    highlight: "Trinity College Dublin · UCD · Galway",
    color: "#ED4B00",
    tag: null,
    desc: "Ireland is becoming a popular destination owing to its connectivity to global industries. Many global technology companies are located in Ireland, creating great work opportunities after graduating.",
  },
  {
    slug: "turkey",
    name: "Turkey",
    flag: "tr",
    universities: "10+",
    students: "30+",
    image:
      "/Destinations/Turkey.jpg",
    highlight: "BAU · Bilkent University",
    color: "#ED4B00",
    tag: "Scholarships",
    desc: "Turkey has affordable education, modern universities, and a unique cultural experience for international students. A bridge between Europe and Asia with many academic and cultural opportunities.",
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "ae",
    universities: "10+",
    students: "20+",
    image:
      "/Destinations/UAE.jpg",
    highlight: "UE · American University in Dubai",
    color: "#2100B1",
    tag: null,
    desc: "The UAE offers international quality education with modern campus facilities and strong industry ties. Students can study in international branch campuses in Dubai and Abu Dhabi.",
  },
  {
    slug: "northern-cyprus",
    name: "Northern Cyprus",
    flag: "cy",
    universities: "1",
    students: "10+",
    image:
      "/Destinations/NorthernCyprus.jpeg",
    highlight: "Eastern Mediterranean University",
    color: "#2100B1",
    tag: null,
    desc: "Northern Cyprus offers affordable tuition fees, internationally recognized degrees, and a welcoming student environment. Students enjoy modern campuses, small class sizes, and a multicultural learning experience.",
  },
];

export default function CountriesPage() {
  return (
    <main>
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
            10+ Countries,
            <br />
            <span style={{ color: "#ED4B00" }}>Endless Possibilities</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "600px",
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Studying abroad opens the door to better education, global exposure,
            and career opportunities. At EdX Consultants, we help you explore
            different countries and choose the destination that fits your career
            goals, budget, and future plans.
          </p>

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
              ["10+", "Countries"],
              ["100+", "Universities"],
              ["1,000+", "Students Placed"],
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

      {/* Intro Section */}
      <div style={{ background: "#0d0d1a", padding: "60px 24px 0" }}>
        <div
          style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.85,
            }}
          >
            Every country offers different advantages such as{" "}
            <span style={{ color: "#ED4B00", fontWeight: 600 }}>
              high-quality education, job opportunities, scholarships, and
              post-study work options
            </span>
            . We have active panels and 100+ partner universities across 10+
            destinations. Find the country that is right for you.
          </p>
        </div>
      </div>

      {/* Countries Grid */}
      <div style={{ background: "#0d0d1a", padding: "60px 24px 100px" }}>
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

                    {/* Real flag circle */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "3px solid white",
                        boxShadow: "0 3px 14px rgba(0,0,0,0.5)",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className={`fi fi-${country.flag} fis`}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
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

                    {/* Country name */}
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
            maxWidth: "520px",
            margin: "0 auto 32px",
            lineHeight: 1.7,
          }}
        >
          Our counselors will help you pick the best destination based on your
          profile, budget, and goals.
        </p>
        <Link
          href="/contact"
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
