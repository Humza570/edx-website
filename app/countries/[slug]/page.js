import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle,
  Globe,
  MapPin,
} from "lucide-react";

const countries = {
  "united-kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=85",
    highlight: "UEA · ARU · RGU",
    universities: "25+",
    students: "500+",
    tagline: "Where Tradition Meets Excellence.",
    desc: "The United Kingdom is one of the most popular study destinations, famous for its top-ranked universities and education system. A degree from the UK is recognized by employers all over the globe. With a rich academic tradition, cutting-edge research facilities, and a multicultural student environment, the UK remains the top choice for Pakistani students.",
    whyChoose: [
      "Home to some of the world's most prestigious universities",
      "Degrees recognized by employers worldwide",
      "Post-Study Work Visa — work up to 2 years after graduation",
      "English-speaking country — no language barrier",
      "Multicultural and welcoming student environment",
      "Strong alumni networks globally",
    ],
    topUnis: [
      "UAE",
      "ARU",
      "RGU",
      "University of Manchester",
      "University of Edinburgh",
      "Coventry University",
    ],
    intake: "January / May / September",
    duration: "1–3 Years",
    tuition: "£10,000 – £38,000 / year",
    living: "£12,000 – £15,000 / year",
    workRights: "20 hrs/week during studies · 2 years PSW visa",
    popularCourses: [
      "Business & MBA",
      "Engineering",
      "Computer Science",
      "Medicine",
      "Law",
      "Finance",
    ],
  },
  "united-states": {
    name: "United States",
    flag: "🇺🇸",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1200&q=85",
    highlight: "Harvard · MIT · Stanford",
    universities: "20+",
    students: "100+",
    tagline: "Dream Big. Study Bigger.",
    desc: "The USA offers a variety of academic programs, research facilities, and globally acclaimed degrees. The country is also home to some of the world's top-ranked universities as well as innovative learning environments. With generous financial aid, OPT work authorization, and a vibrant campus culture, the USA is ideal for ambitious students.",
    whyChoose: [
      "World's largest higher education system",
      "Generous merit scholarships and financial aid",
      "OPT — work up to 3 years after graduation (STEM)",
      "Cutting-edge research and innovation culture",
      "Global alumni network and employer connections",
      "Diverse campuses with students from 180+ countries",
    ],
    topUnis: [
      "Harvard University",
      "MIT",
      "Stanford University",
      "University of Chicago",
      "Columbia University",
      "University of California",
    ],
    intake: "August / January",
    duration: "2–4 Years",
    tuition: "$20,000 – $60,000 / year",
    living: "$12,000 – $18,000 / year",
    workRights: "20 hrs/week on-campus · OPT 1–3 years after",
    popularCourses: [
      "Computer Science",
      "MBA",
      "Engineering",
      "Data Science",
      "Medicine",
      "Law",
    ],
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=85",
    highlight: "Melbourne · ANU · Sydney",
    universities: "10+",
    students: "80+",
    tagline: "World-Class Education, World-Class Lifestyle.",
    desc: "Australia is famous for its high-standard education system, cultural diversity, and strong post-study work prospects. International students can experience a safe lifestyle, modern campuses, and globally recognized qualifications. Australia offers an unmatched combination of quality education and quality of life.",
    whyChoose: [
      "High-standard education system globally recognized",
      "Post-Study Work Visa up to 4 years (regional areas)",
      "Safe, clean, and student-friendly cities",
      "Strong job market — especially in IT, engineering, healthcare",
      "High quality of life and outdoor lifestyle",
      "Pathway to Australian Permanent Residency",
    ],
    topUnis: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "Monash University",
      "UNSW Sydney",
      "University of Queensland",
    ],
    intake: "February / July",
    duration: "2–3 Years",
    tuition: "AUD 20,000 – 50,000 / year",
    living: "AUD 18,000 – 22,000 / year",
    workRights: "48 hrs/fortnight · PSW visa 2–4 years after",
    popularCourses: [
      "Information Technology",
      "Engineering",
      "Business",
      "Nursing",
      "Accounting",
      "Architecture",
    ],
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1200&q=85",
    highlight: "UCW · TRU",
    universities: "10+",
    students: "50+",
    tagline: "Study, Work, Settle — Canada Has It All.",
    desc: "Canada promises affordable education, a conducive environment, and great career opportunities after completing studies. It provides post-study work permits and permanent residence opportunities. Safe, multicultural, and welcoming, Canada is ideal for students planning long-term settlement.",
    whyChoose: [
      "Post-Graduate Work Permit up to 3 years",
      "Clear pathway to Permanent Residency (Express Entry)",
      "Affordable tuition compared to UK and USA",
      "Safe and multicultural society",
      "Part-time work — 20 hrs during studies, full-time in holidays",
      "High quality of life and strong economy",
    ],
    topUnis: [
      "UCW",
      "TRU",
      "University of Toronto",
      "UBC",
      "McGill University",
      "University of Waterloo",
    ],
    intake: "September / January",
    duration: "2–4 Years",
    tuition: "CAD 15,000 – 40,000 / year",
    living: "CAD 12,000 – 18,000 / year",
    workRights: "20 hrs/week · PGWP up to 3 years after",
    popularCourses: [
      "Computer Science",
      "Business",
      "Engineering",
      "Healthcare",
      "Data Analytics",
      "Hospitality",
    ],
  },
  malaysia: {
    name: "Malaysia",
    flag: "🇲🇾",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=85",
    highlight: "APU · UCSI · Raffles",
    universities: "30+",
    students: "300+",
    tagline: "Affordable Excellence in the Heart of Asia.",
    desc: "Malaysia provides an international education at an affordable price with modern educational campuses and globally recognized qualifications. It is a popular destination for international students seeking quality education at a lower tuition fee, particularly for MBBS and medical programs.",
    whyChoose: [
      "Most affordable MBBS programs — internationally recognized",
      "English medium instruction at all universities",
      "Culturally similar and Muslim-friendly environment",
      "Low cost of living compared to Western countries",
      "Globally accredited degrees (PMC recognized)",
      "Branch campuses of UK and Australian universities",
    ],
    topUnis: [
      "APU",
      "UCSI University",
      "Raffles",
      "University of Malaya",
      "Taylor's University",
      "IMU",
    ],
    intake: "February / May / September",
    duration: "2–3 Years",
    tuition: "RM 30,000 – 120,000 / year",
    living: "RM 12,000 – 18,000 / year",
    workRights: "Limited — student visa restrictions",
    popularCourses: [
      "MBBS / Medicine",
      "Dentistry",
      "Pharmacy",
      "Engineering",
      "Business",
      "Nursing",
    ],
  },
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85",
    highlight: "GISMA · UE · BSBI",
    universities: "10+",
    students: "100+",
    tagline: "World-Class Education. Almost Free.",
    desc: "Germany is popular for quality education, especially in the field of engineering and technology, with affordable options for students. Students have access to quality research facilities and good job opportunities in Europe. Most public universities charge little to no tuition fees, even for international students.",
    whyChoose: [
      "Tuition-free or very low tuition at public universities",
      "World-renowned engineering and technical education",
      "Stay back visa — 18 months to find a job after graduation",
      "Strong economy and high graduate employment rates",
      "Central location in Europe",
      "Scholarships from DAAD and German universities",
    ],
    topUnis: [
      "GISMA",
      "UE",
      "BSBI",
      "TU Munich",
      "LMU Munich",
      "Heidelberg University",
    ],
    intake: "October / April",
    duration: "2–3 Years",
    tuition: "€0 – €3,000 / year (public)",
    living: "€10,000 – €12,000 / year",
    workRights: "120 full days/year · 18-month job-seeker visa",
    popularCourses: [
      "Engineering",
      "Computer Science",
      "Automotive",
      "Business",
      "Natural Sciences",
      "Architecture",
    ],
  },
  france: {
    name: "France",
    flag: "🇫🇷",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=85",
    highlight: "Sorbonne · HEC Paris · École Polytechnique",
    universities: "10+",
    students: "30+",
    tagline: "Academic Excellence with a Rich Cultural Experience.",
    desc: "France offers academic excellence with a rich cultural experience and good international career prospects. It is known for its excellent business schools and creative programs of study. France is home to some of Europe's most prestigious institutions with globally recognized degrees.",
    whyChoose: [
      "World-renowned business schools and creative programs",
      "Affordable tuition at public universities",
      "Rich cultural and academic environment",
      "Central location for European career opportunities",
      "Strong post-study work options",
      "International and English-taught programs available",
    ],
    topUnis: [
      "Sorbonne University",
      "HEC Paris",
      "École Polytechnique",
      "Sciences Po",
      "ESSEC Business School",
      "University of Paris",
    ],
    intake: "September / January",
    duration: "1–2 Years",
    tuition: "€3,000 – €15,000 / year",
    living: "€10,000 – €14,000 / year",
    workRights: "20 hrs/week during studies",
    popularCourses: [
      "Business & MBA",
      "Fashion & Design",
      "Engineering",
      "Culinary Arts",
      "Computer Science",
      "International Relations",
    ],
  },
  netherlands: {
    name: "Netherlands",
    flag: "🇳🇱",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=85",
    highlight: "UE Amsterdam",
    universities: "10+",
    students: "50+",
    tagline: "Innovative Education in the Heart of Europe.",
    desc: "The Netherlands is famous for its innovative educational system, English-taught courses, and open environment for international students. Students benefit from a modern educational system that emphasizes research and practical knowledge, with strong links to global industries.",
    whyChoose: [
      "Most programs taught entirely in English",
      "Innovative and research-focused education system",
      "Highly international and open student environment",
      "Strong links to global tech and business industries",
      "Orientation year visa to find work after graduation",
      "Central European location with easy travel access",
    ],
    topUnis: [
      "UE Amsterdam",
      "University of Amsterdam",
      "Delft University of Technology",
      "Erasmus University Rotterdam",
      "Leiden University",
      "Utrecht University",
    ],
    intake: "September / February",
    duration: "1–3 Years",
    tuition: "€8,000 – €20,000 / year",
    living: "€10,000 – €14,000 / year",
    workRights: "16 hrs/week · 1-year orientation visa after graduation",
    popularCourses: [
      "Business & MBA",
      "Engineering",
      "Computer Science",
      "Data Science",
      "Economics",
      "International Law",
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=85",
    highlight: "Auckland · Otago · Victoria University of Wellington",
    universities: "10+",
    students: "20+",
    tagline: "Safe, Scenic, and Seriously Good Education.",
    desc: "New Zealand provides good quality education, a secure environment, and great prospects for international students. New Zealand is also famous for providing good student communities and a picturesque environment. With post-study work visa options and a clear path to residency, it is an ideal destination.",
    whyChoose: [
      "One of the safest countries in the world",
      "Post-Study Work Visa up to 3 years",
      "Pathway to New Zealand Permanent Residency",
      "World-class education in a stunning natural environment",
      "Friendly and welcoming community",
      "Strong opportunities in agriculture, IT, and healthcare",
    ],
    topUnis: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
      "AUT",
    ],
    intake: "February / July",
    duration: "2–3 Years",
    tuition: "NZD 22,000 – 45,000 / year",
    living: "NZD 15,000 – 20,000 / year",
    workRights: "20 hrs/week · PSW visa up to 3 years",
    popularCourses: [
      "Agriculture",
      "IT",
      "Business",
      "Healthcare",
      "Engineering",
      "Tourism Management",
    ],
  },
  ireland: {
    name: "Ireland",
    flag: "🇮🇪",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&q=85",
    highlight: "Trinity College Dublin · UCD · University of Galway",
    universities: "25+",
    students: "10+",
    tagline: "Europe's English-Speaking Tech Hub.",
    desc: "Ireland is becoming a popular destination for international students owing to its connectivity to global industries. Many global technology companies are located in Ireland, creating great opportunities for students to work after graduating. An English-speaking EU country with top-ranked universities.",
    whyChoose: [
      "English-speaking EU country",
      "Home to Google, Meta, Apple, Microsoft European HQs",
      "Post-Study Stay Back — up to 2 years",
      "Access to the entire EU job market",
      "Excellent quality of life",
      "Smaller class sizes and personal attention",
    ],
    topUnis: [
      "Trinity College Dublin",
      "University College Dublin",
      "University of Galway",
      "NUI Galway",
      "Dublin City University",
      "Maynooth University",
    ],
    intake: "September / January",
    duration: "1–2 Years",
    tuition: "€10,000 – €25,000 / year",
    living: "€10,000 – €14,000 / year",
    workRights: "20 hrs/week · 2 year stay back visa",
    popularCourses: [
      "Computer Science",
      "Data Analytics",
      "Business",
      "Pharma",
      "Finance",
      "Engineering",
    ],
  },
  turkey: {
    name: "Turkey",
    flag: "🇹🇷",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    highlight: "BAU · Bilkent University",
    universities: "10+",
    students: "30+",
    tagline: "Quality Education, Exceptional Value.",
    desc: "Turkey has affordable education, modern universities, and a unique cultural experience for international students. Turkey is a bridge between Europe and Asia and has many academic and cultural opportunities to offer. Turkish Government Scholarships provide full funding for eligible international students.",
    whyChoose: [
      "Turkish Government Scholarships available (full funding)",
      "Very affordable tuition and living costs",
      "Culturally and linguistically close to Pakistan",
      "No IELTS required at many universities",
      "English and Turkish medium programs available",
      "Strong medical and engineering programs",
    ],
    topUnis: [
      "BAU",
      "Bilkent University",
      "Istanbul University",
      "Ankara University",
      "Sabanci University",
      "METU",
    ],
    intake: "September / February",
    duration: "2–4 Years",
    tuition: "$0 – $8,000 / year",
    living: "$4,000 – $7,000 / year",
    workRights: "Limited part-time work rights",
    popularCourses: [
      "Medicine (MBBS)",
      "Engineering",
      "Business",
      "Architecture",
      "International Relations",
      "Dentistry",
    ],
  },
  uae: {
    name: "UAE",
    flag: "🇦🇪",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    highlight: "UE · American University in Dubai",
    universities: "10+",
    students: "20+",
    tagline: "World-Class Education in a World-Class City.",
    desc: "The UAE offers international quality education with modern campus facilities and industry ties with the rest of the world. Students have the opportunity to study in international branch campuses in Dubai and Abu Dhabi. Proximity to Pakistan and a familiar culture make it a convenient and attractive destination.",
    whyChoose: [
      "Proximity to Pakistan — easy for families to visit",
      "Familiar culture and large Pakistani community",
      "Tax-free salaries and strong job market",
      "Branch campuses of world-renowned universities",
      "Networking hub for Middle East and global business",
      "No IELTS required at some institutions",
    ],
    topUnis: [
      "UE",
      "American University in Dubai",
      "NYU Abu Dhabi",
      "American University of Sharjah",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
    ],
    intake: "September / January",
    duration: "2–3 Years",
    tuition: "AED 40,000 – 90,000 / year",
    living: "AED 24,000 – 36,000 / year",
    workRights: "Internships and part-time permitted",
    popularCourses: [
      "Business & MBA",
      "Finance",
      "Engineering",
      "Architecture",
      "Media",
      "Hospitality",
    ],
  },
  "northern-cyprus": {
    name: "Northern Cyprus",
    flag: "🇨🇾",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    highlight: "Eastern Mediterranean University",
    universities: "1",
    students: "10+",
    tagline: "Affordable Excellence in the Mediterranean.",
    desc: "Northern Cyprus offers affordable tuition fees, internationally recognized degrees, and a welcoming student environment. Students enjoy modern campuses, small class sizes, and a multicultural learning experience in a beautiful Mediterranean setting.",
    whyChoose: [
      "Very affordable tuition fees",
      "Internationally recognized degrees",
      "Small class sizes and personal attention",
      "Multicultural and welcoming environment",
      "Beautiful Mediterranean lifestyle",
      "English medium programs available",
    ],
    topUnis: [
      "Eastern Mediterranean University",
      "Near East University",
      "Girne American University",
      "Cyprus International University",
      "Final International University",
      "Lefke European University",
    ],
    intake: "September / February",
    duration: "2–4 Years",
    tuition: "$3,000 – $8,000 / year",
    living: "$4,000 – $7,000 / year",
    workRights: "Limited part-time work rights",
    popularCourses: [
      "Medicine (MBBS)",
      "Engineering",
      "Business",
      "Law",
      "Architecture",
      "Dentistry",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(countries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const country = countries[slug];
  if (!country) return {};
  return {
    title: `Study in ${country.name} | EdX Consultants`,
    description: country.desc.slice(0, 155),
  };
}

export default async function CountryDetailPage({ params }) {
  const { slug } = await params;
  const country = countries[slug];
  if (!country) notFound();

  const isOrange = country.color === "#ED4B00";
  const otherCountries = Object.entries(countries)
    .filter(([s]) => s !== slug)
    .slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <div
        style={{ position: "relative", height: "520px", overflow: "hidden" }}
      >
        <img
          src={country.image}
          alt={country.name}
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
              "linear-gradient(to bottom, rgba(13,13,26,0.5) 0%, rgba(13,13,26,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(24px, 5vw, 80px)",
            maxWidth: "1280px",
            margin: "0 auto",
            left: 0,
            right: 0,
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <Link
              href="/countries"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
            >
              Countries
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span
              style={{
                fontSize: "13px",
                color: country.color,
                fontWeight: 600,
              }}
            >
              {country.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <div style={{ fontSize: "64px", marginBottom: "8px" }}>
                {country.flag}
              </div>
              <h1
                style={{
                  fontSize: "clamp(36px, 6vw, 64px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                Study in {country.name}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: country.color,
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                "{country.tagline}"
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { val: country.universities, label: "Partner Unis" },
                { val: country.students, label: "Our Students" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    textAlign: "center",
                    minWidth: "100px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: country.color,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.6)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ background: "#f8f9ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Why Study in{" "}
                <span style={{ color: country.color }}>{country.name}?</span>
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                {country.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "32px",
                }}
              >
                {country.whyChoose.map((reason, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      color={country.color}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#444",
                        lineHeight: 1.6,
                      }}
                    >
                      {reason}
                    </span>
                  </div>
                ))}
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0d0d1a",
                  marginBottom: "16px",
                }}
              >
                Top Partner Universities
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                }}
              >
                {country.topUnis.map((uni, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "10px 14px",
                      background: "white",
                      borderRadius: "8px",
                      border: `1px solid ${country.color}22`,
                      fontSize: "13px",
                      color: "#444",
                      fontWeight: 500,
                    }}
                  >
                    🎓 {uni}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div>
              {/* Key Info */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  marginBottom: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0d0d1a",
                    marginBottom: "20px",
                    paddingBottom: "12px",
                    borderBottom: "2px solid #f0f0f0",
                  }}
                >
                  📋 Key Information
                </h3>
                {[
                  { icon: Clock, label: "Intake", val: country.intake },
                  {
                    icon: GraduationCap,
                    label: "Duration",
                    val: country.duration,
                  },
                  {
                    icon: DollarSign,
                    label: "Tuition Fees",
                    val: country.tuition,
                  },
                  { icon: MapPin, label: "Living Cost", val: country.living },
                  {
                    icon: Briefcase,
                    label: "Work Rights",
                    val: country.workRights,
                  },
                ].map(({ icon: Icon, label, val }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      padding: "12px 0",
                      borderBottom: "1px solid #f5f5f5",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={15} color={country.color} />
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#888",
                          fontWeight: 600,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#333",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Popular Courses */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  marginBottom: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0d0d1a",
                    marginBottom: "16px",
                  }}
                >
                  🎓 Popular Courses
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {country.popularCourses.map((course, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        background: isOrange
                          ? "rgba(237,75,0,0.08)"
                          : "rgba(33,0,177,0.08)",
                        color: country.color,
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 600,
                        border: `1px solid ${country.color}25`,
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                style={{
                  background: `linear-gradient(135deg, ${country.color}, ${isOrange ? "#ff9a00" : "#0ea5e9"})`,
                  borderRadius: "20px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <Globe
                  size={32}
                  color="white"
                  style={{ margin: "0 auto 12px", opacity: 0.8 }}
                />
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  Ready to Study in {country.name}?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.8)",
                    marginBottom: "20px",
                    lineHeight: 1.6,
                  }}
                >
                  Book a free consultation and our experts will guide you
                  through every step.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    background: "white",
                    color: country.color,
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Countries */}
      <div style={{ background: "#0d0d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "8px",
            }}
          >
            Explore Other <span style={{ color: "#ED4B00" }}>Destinations</span>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "40px",
            }}
          >
            We have active counseling panels in 13 countries.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {otherCountries.map(([s, c]) => (
              <Link
                key={s}
                href={`/countries/${s}`}
                style={{ textDecoration: "none" }}
                className="other-country-card"
              >
                <div
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: "all 0.25s",
                  }}
                >
                  <div style={{ height: "120px", position: "relative" }}>
                    <img
                      src={c.image}
                      alt={c.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ fontSize: "36px" }}>{c.flag}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "14px 16px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      {c.name}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: c.color,
                        fontWeight: 600,
                      }}
                    >
                      {c.highlight}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #2100B1, #ED4B00)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}
        >
          Start Your {country.name} Journey Today
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
          Free consultation — our counselors will build your complete roadmap.
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
        .other-country-card > div { transition: all 0.25s; }
        .other-country-card:hover > div { transform: translateY(-4px); border-color: rgba(255,255,255,0.2) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
      `}</style>
    </main>
  );
}
