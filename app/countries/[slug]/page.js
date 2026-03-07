import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
    highlight: "Oxford · Cambridge · Imperial",
    universities: "150+",
    students: "800+",
    tagline: "Where Tradition Meets Excellence.",
    desc: "The United Kingdom is home to some of the world's most prestigious and globally recognized universities. A UK degree opens doors across every industry worldwide and is valued by employers across the globe. With a rich academic tradition, cutting-edge research facilities, and a multicultural student environment, the UK remains the top choice for Pakistani students.",
    whyChoose: [
      "Home to 4 of the world's top 10 universities",
      "Degrees recognized by employers worldwide",
      "Post-Study Work Visa — work up to 2 years after graduation",
      "English-speaking country — no language barrier",
      "Multicultural and welcoming student environment",
      "Strong alumni networks globally",
    ],
    topUnis: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "University of Edinburgh",
      "University of Manchester",
    ],
    intake: "September / January",
    duration: "1 year (PG) · 3 years (UG)",
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
    universities: "200+",
    students: "600+",
    tagline: "Dream Big. Study Bigger.",
    desc: "The USA offers the most diverse higher education system in the world with over 4,000 accredited universities. American degrees are among the most respected globally, and the country is home to the world's top research institutions. With generous financial aid, OPT work authorization, and a vibrant campus culture, the USA is ideal for ambitious students.",
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
    duration: "1–2 years (PG) · 4 years (UG)",
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
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1200&q=85",
    highlight: "Toronto · UBC · McGill",
    universities: "80+",
    students: "500+",
    tagline: "Study, Work, Settle — Canada Has It All.",
    desc: "Canada has become one of the most popular destinations for Pakistani students — and for good reason. It offers excellent education at affordable tuition rates, a clear Post-Graduate Work Permit (PGWP) pathway, and one of the most accessible routes to Permanent Residency in the world. Safe, multicultural, and welcoming, Canada is ideal for students planning long-term settlement.",
    whyChoose: [
      "Post-Graduate Work Permit up to 3 years",
      "Clear pathway to Permanent Residency (Express Entry)",
      "Affordable tuition compared to UK and USA",
      "Safe and multicultural society",
      "Part-time work — 20 hrs during studies, full-time in holidays",
      "High quality of life and strong economy",
    ],
    topUnis: [
      "University of Toronto",
      "UBC",
      "McGill University",
      "University of Waterloo",
      "McMaster University",
      "University of Alberta",
    ],
    intake: "September / January / May",
    duration: "1–2 years (PG) · 4 years (UG)",
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
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=85",
    highlight: "Melbourne · Sydney · ANU",
    universities: "40+",
    students: "400+",
    tagline: "World-Class Education, World-Class Lifestyle.",
    desc: "Australia is consistently ranked among the top study abroad destinations for Pakistani students. With 8 universities in the world's top 100, a safe and friendly environment, and some of the most generous post-study work rights in the world, Australia offers an unmatched combination of quality education and quality of life.",
    whyChoose: [
      "8 universities in the global top 100",
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
    duration: "1–2 years (PG) · 3 years (UG)",
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
  ireland: {
    name: "Ireland",
    flag: "🇮🇪",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&q=85",
    highlight: "Trinity · UCD · UCC",
    universities: "20+",
    students: "150+",
    tagline: "Europe's English-Speaking Tech Hub.",
    desc: "Ireland is a hidden gem for Pakistani students — an English-speaking country in the heart of Europe with top-ranked universities, a booming technology industry, and a friendly, welcoming culture. As the European headquarters of Google, Meta, Apple, and Microsoft, Ireland offers incredible internship and career opportunities for graduates.",
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
      "University College Cork",
      "NUI Galway",
      "Dublin City University",
      "Maynooth University",
    ],
    intake: "September / January",
    duration: "1 year (PG) · 3–4 years (UG)",
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
  germany: {
    name: "Germany",
    flag: "🇩🇪",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85",
    highlight: "TU Munich · Heidelberg · LMU",
    universities: "50+",
    students: "200+",
    tagline: "World-Class Education. Almost Free.",
    desc: "Germany is one of the best-kept secrets in international education. Most public universities charge little to no tuition fees — even for international students — making it the most affordable top-tier destination in the world. With a strong engineering and technology tradition, Germany is especially popular among students from technical disciplines.",
    whyChoose: [
      "Tuition-free or very low tuition at public universities",
      "World-renowned engineering and technical education",
      "Stay back visa — 18 months to find a job after graduation",
      "Strong economy and high graduate employment rates",
      "Central location in Europe",
      "Scholarships from DAAD and German universities",
    ],
    topUnis: [
      "TU Munich",
      "LMU Munich",
      "Heidelberg University",
      "Humboldt University Berlin",
      "RWTH Aachen",
      "Karlsruhe Institute of Technology",
    ],
    intake: "October / April",
    duration: "1–2 years (PG) · 3 years (UG)",
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
  turkey: {
    name: "Turkey",
    flag: "🇹🇷",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    highlight: "Istanbul · Ankara · Bilkent",
    universities: "30+",
    students: "300+",
    tagline: "Quality Education, Exceptional Value.",
    desc: "Turkey has emerged as a top destination for Pakistani students seeking quality education at an affordable cost. The Turkish Government Scholarship (Türkiye Burslari) covers full tuition, accommodation, and a monthly stipend — making it one of the most generous scholarship programs in the world for international students.",
    whyChoose: [
      "Turkish Government Scholarships available (full funding)",
      "Very affordable tuition and living costs",
      "Culturally and linguistically close to Pakistan",
      "No IELTS required at many universities",
      "English and Turkish medium programs available",
      "Strong medical and engineering programs",
    ],
    topUnis: [
      "Istanbul University",
      "Ankara University",
      "Bilkent University",
      "Sabanci University",
      "Bogazici University",
      "METU",
    ],
    intake: "October / February",
    duration: "1–2 years (PG) · 4 years (UG)",
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
  malaysia: {
    name: "Malaysia",
    flag: "🇲🇾",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=85",
    highlight: "UM · UPM · Monash Malaysia",
    universities: "25+",
    students: "250+",
    tagline: "Affordable Excellence in the Heart of Asia.",
    desc: "Malaysia is the most popular destination for Pakistani students seeking MBBS and medical degrees abroad at an affordable cost. With internationally accredited programs, English as the primary medium of instruction, and a multicultural environment, Malaysia offers an excellent balance of quality and affordability.",
    whyChoose: [
      "Most affordable MBBS programs internationally recognized",
      "English medium instruction at all universities",
      "Culturally similar and Muslim-friendly environment",
      "Low cost of living compared to Western countries",
      "Globally accredited degrees (PMC recognized)",
      "Branch campuses of UK and Australian universities",
    ],
    topUnis: [
      "University of Malaya",
      "UPM",
      "Monash University Malaysia",
      "Taylor's University",
      "UCSI University",
      "IMU",
    ],
    intake: "March / September",
    duration: "5 years (MBBS) · 1–3 years (others)",
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
  "new-zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    color: "#ED4B00",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=85",
    highlight: "Auckland · Otago · Victoria",
    universities: "15+",
    students: "100+",
    tagline: "Safe, Scenic, and Seriously Good Education.",
    desc: "New Zealand offers a high-quality, internationally recognized education system in one of the safest and most beautiful countries in the world. With post-study work visa options and a clear path to New Zealand residency, it is increasingly becoming a preferred destination for Pakistani students seeking both quality education and long-term opportunities.",
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
    duration: "1–2 years (PG) · 3 years (UG)",
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
  uae: {
    name: "UAE",
    flag: "🇦🇪",
    color: "#2100B1",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85",
    highlight: "NYU Abu Dhabi · AUS · HBMeU",
    universities: "20+",
    students: "180+",
    tagline: "World-Class Education in a World-Class City.",
    desc: "The UAE has rapidly established itself as a major global education hub, with branch campuses of world-renowned universities from the UK, USA, and Australia. For Pakistani students, the UAE offers the advantage of proximity, a familiar culture, and a tax-free environment with strong networking and career opportunities.",
    whyChoose: [
      "Proximity to Pakistan — easy for families to visit",
      "Familiar culture and large Pakistani community",
      "Tax-free salaries and strong job market",
      "Branch campuses of world-renowned universities",
      "Networking hub for Middle East and global business",
      "No IELTS required at some institutions",
    ],
    topUnis: [
      "NYU Abu Dhabi",
      "American University of Sharjah",
      "HBMeU",
      "University of Wollongong Dubai",
      "Heriot-Watt University Dubai",
      "Middlesex University Dubai",
    ],
    intake: "September / January",
    duration: "1–2 years (PG) · 3–4 years (UG)",
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
      <Navbar />

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

            {/* Quick stats */}
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
            {/* Left — About + Why Choose */}
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

              {/* Top Unis */}
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

            {/* Right — Info Cards */}
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
                  href="/#contact"
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
            We have active counseling panels in 10 countries.
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

      <Footer />

      <style>{`
        .other-country-card > div { transition: all 0.25s; }
        .other-country-card:hover > div { transform: translateY(-4px); border-color: rgba(255,255,255,0.2) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
      `}</style>
    </main>
  );
}
