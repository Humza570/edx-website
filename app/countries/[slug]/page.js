import Link from "next/link";
import { notFound } from "next/navigation";
import "flag-icons/css/flag-icons.min.css";
import UniGrid from "./UniGrid";
import {
  ArrowRight,
  GraduationCap,
  Clock,
  Briefcase,
  CheckCircle,
  Globe,
  Users,
} from "lucide-react";

const countries = {
  "united-kingdom": {
    name: "United Kingdom",
    flag: "gb",
    color: "#ED4B00",
    image: "/Destinations/UK.jpg",
    highlight: "UEA · ARU · Brighton · RGU · Abertay · CCCU",
    universities: "10+",
    students: "500+",
    tagline: "Where Tradition Meets Excellence.",
    desc: "The United Kingdom is one of the most popular study destinations for international students. Every year, thousands of students choose the UK because of its world-class universities, strong education system, and global career opportunities. UK universities are known for their high academic standards, modern research facilities, and practical learning approach. A degree from the UK is respected all over the world, which helps students build successful international careers. Students also enjoy studying in a diverse and multicultural environment where they meet people from different countries and cultures. At EdX Consultants, we guide students through every step of the process — from choosing the right university to securing admission and preparing for their visa.",
    whyChoose: [
      "Home to many of the world's top universities",
      "UK degrees are recognized and respected worldwide",
      "Post-Study Work Visa allows students to work up to 2 years after graduation",
      "English-speaking country, so communication is easier for international students",
      "Safe and multicultural environment for students",
      "Excellent career opportunities and strong industry connections",
      "Shorter degree duration compared to many other countries",
    ],
    // topUnis: [
    //   "University of East Anglia (UEA) — Norwich, England",
    //   "University of Brighton — Brighton, England",
    //   "Anglia Ruskin University (ARU) — Chelmsford / Cambridge / London",
    //   "Abertay University — Dundee, Scotland",
    //   "Canterbury Christ Church University — Kent, England",
    //   "London Metropolitan University — London, England",
    //   "University of Wales Trinity Saint David — Wales / Birmingham / London",
    //   "University of East London (UEL) — East London, England",
    //   "Glasgow Caledonian University — Scotland / London Campus",
    //   "UWE Bristol — Bristol",
    //   "Buckinghamshire New University — England",
    //   "Bangor University — Wales",
    //   "Aston University — Birmingham",
    //   "De Montfort University — Leicester",
    //   "Queen's University Belfast — Belfast",
    //   "University of Hull — England",
    //   "University of Greenwich — England",
    //   "Robert Gordon University — Scotland",
    //   "Middlesex University London — London, England",
    //   "University of Aberdeen — Scotland",
    //   "University of Salford — England",
    //   "University of Portsmouth — England",
    // ],
    intake: "January / May / September",
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights: "20 hrs/week during studies · 2-year PSW visa after graduation",
    popularCourses: [
      "Business & MBA",
      "Engineering",
      "Computer Science & IT",
      "Medicine & Health Sciences",
      "Law",
      "Finance & Accounting",
    ],
  },
  "united-states": {
    name: "United States",
    flag: "us",
    color: "#2100B1",
    image: "/Destinations/USA.jpg",
    highlight: "Concordia · Avila · Texas State",
    universities: "20+",
    students: "100+",
    tagline: "Where Innovation Meets Opportunity.",
    desc: "The United States is one of the most popular study destinations in the world. It is home to many of the top universities and offers a wide variety of academic programs. Students choose the US because of its advanced research facilities, modern campuses, and strong career opportunities. Universities focus on practical learning, innovation, and helping students develop real-world skills. Studying in the United States also gives students the chance to experience a diverse culture and global environment, where they can meet people from many different countries. At EdX Consultants, we help students choose the right university, prepare strong applications, and guide them through the visa process.",
    whyChoose: [
      "Home to many of the world's top universities",
      "Wide range of programs and specializations",
      "Strong research and innovation environment",
      "Excellent career opportunities after graduation",
      "Multicultural and diverse student community",
      "Opportunities for internships and practical training (CPT & OPT)",
      "Access to global companies and industries",
    ],
    topUnis: [
      "Concordia University Chicago — Chicago, United States",
      "Avila University Arizona — Arizona, United States",
      "Algoma University — United States Campus",
      "Texas State University — Texas, United States",
    ],
    intake: "January / May / September",
    duration: "UG: 4 Years · PG: 1–2 Years",
    workRights: "20 hrs/week on-campus · CPT & OPT internship programs",
    popularCourses: [
      "Business Administration & MBA",
      "Computer Science & IT",
      "Engineering",
      "Data Science & Artificial Intelligence",
      "Finance & Accounting",
      "Health Sciences",
    ],
  },
  australia: {
    name: "Australia",
    flag: "au",
    color: "#2100B1",
    image: "/Destinations/Australia.jpg",
    highlight: "Melbourne · ANU · Sydney",
    universities: "10+",
    students: "80+",
    tagline: "Quality Education in a Beautiful Country.",
    desc: "Australia is one of the most welcoming countries for international students. It offers high-quality education, modern campuses, and a safe lifestyle. Australian universities focus on practical learning, research, and career development. Students also enjoy a relaxed environment and a high quality of life. Many students choose Australia because it offers great work opportunities during and after studies. At EdX Consultants, we help students find the right Australian university and program that fits their academic goals and career ambitions.",
    whyChoose: [
      "Globally recognized universities",
      "High quality education system",
      "Safe and friendly environment",
      "Work opportunities while studying — 48 hours per fortnight",
      "Post-study work visa options available after graduation",
      "Strong career opportunities after graduation",
      "Beautiful cities and multicultural lifestyle",
    ],
    topUnis: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "Monash University",
      "UNSW Sydney",
      "University of Queensland",
    ],
    intake: "February / July / November",
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights: "48 hrs/fortnight during studies · PSW visa after graduation",
    popularCourses: [
      "Business & Management",
      "Engineering",
      "Information Technology",
      "Hospitality & Tourism",
      "Health Sciences",
      "Environmental Science",
    ],
  },
  canada: {
    name: "Canada",
    flag: "ca",
    color: "#ED4B00",
    image: "/Destinations/Canada.jpg",
    highlight: "UCW · Durham · George Brown",
    universities: "10+",
    students: "50+",
    tagline: "A Safe and Friendly Study Destination.",
    desc: "Canada is one of the most preferred countries for international students. It is known for its high-quality education, safe environment, and welcoming culture. Canadian universities focus on practical skills, research, and career development. Many students also choose Canada because of its opportunities to work during studies and stay after graduation. Canada offers students the chance to experience modern cities, beautiful nature, and a high standard of living. At EdX Consultants, we help students navigate the entire process — from university selection to visa guidance.",
    whyChoose: [
      "High-quality education system",
      "Safe and peaceful environment",
      "Work opportunities during studies — 20 hours per week",
      "Post-Graduation Work Permit (PGWP) available",
      "Friendly and multicultural society",
      "Opportunities for permanent residency",
      "Strong career opportunities after graduation",
    ],
    topUnis: [
      "University Canada West — Vancouver, Canada",
      "University of Niagara Falls Canada — Niagara Falls, Canada",
      "Adler University — Canada Campus",
      "Durham College — Ontario, Canada",
      "George Brown College — Toronto, Canada",
      "Georgian College — Ontario, Canada",
      "Lakehead University — Ontario, Canada",
      "Niagara University Ontario — Ontario, Canada",
    ],
    intake: "January / May / September",
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights:
      "20 hrs/week during studies · Full-time in holidays · PGWP after graduation",
    popularCourses: [
      "Business & Management",
      "Computer Science",
      "Engineering",
      "Data Analytics",
      "Healthcare Programs",
      "Finance & Accounting",
    ],
  },
  malaysia: {
    name: "Malaysia",
    flag: "my",
    color: "#2100B1",
    image: "/Destinations/Malaysia.jpg",
    highlight: "APU · UCSI · Monash Malaysia",
    universities: "10+",
    students: "300+",
    tagline: "Affordable & Quality Education with International Opportunities.",
    desc: "Malaysia has become a popular destination for international students because it offers affordable education and globally recognized degrees. Many universities in Malaysia have partnerships with universities from the UK and Australia, allowing students to get international qualifications at lower costs. Students enjoy studying in a modern and multicultural environment. At EdX Consultants, we help students choose the right university and program based on their career goals, budget, and academic background, ensuring they get the best study experience in Malaysia.",
    whyChoose: [
      "Affordable tuition fees",
      "International degree programs",
      "Modern universities and campuses",
      "Safe and student-friendly environment",
      "English widely used in universities",
      "Lower living costs compared to many countries",
      "Opportunity to experience different cultures",
    ],
    topUnis: [
      {
        name: "Asia Pacific University (APU)",
        logo: "/Universities/Malaysia/www.apu.edu.my.png",
        url: "https://www.apu.edu.my",
      },
      {
        name: "Alam College",
        logo: "/Universities/Malaysia/alam.edu.my.png",
        url: "https://alam.edu.my",
      },
      {
        name: "Geomatika University College",
        logo: "/Universities/Malaysia/geomatika.edu.my.png",
        url: "https://geomatika.edu.my",
      },
      {
        name: "University of Europe for Applied Sciences (UE)",
        logo: "/Universities/Germany/www.ue-germany.com.png",
        url: "https://www.ue-germany.com",
      },
    ],
    intake: "January / May / September",
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights: "Limited part-time work rights for international students",
    popularCourses: [
      "Business & Management",
      "Information Technology",
      "Engineering",
      "Hospitality & Tourism",
      "Media & Communication",
      "Finance",
    ],
  },
  germany: {
    name: "Germany",
    flag: "de",
    color: "#2100B1",
    image: "/Destinations/Germany.jpg",
    highlight: "GISMA · UE · BSBI · Steinbeis",
    universities: "4",
    students: "100+",
    tagline: "World-Class Education with Low Tuition Costs.",
    desc: "Germany is known for its strong education system and affordable universities. Many public universities offer low or no tuition fees, making Germany a great choice for international students. German universities focus on research, innovation, and practical learning, especially in engineering and technology. Students also benefit from Germany's strong economy and excellent career opportunities. At EdX Consultants, we guide students in selecting the right university based on their academic background, budget, and future career plans.",
    whyChoose: [
      "High-quality universities",
      "Affordable or low tuition fees at public universities",
      "Strong focus on engineering and technology",
      "Opportunities for research and innovation",
      "Safe and modern cities",
      "Strong job market after graduation",
      "International student community",
    ],
    topUnis: [
      {
        name: "Berlin School of Business and Innovation (BSBI)",
        logo: "/Universities/Germany/berlinsbi.com.png",
        url: "https://berlinsbi.com",
      },
      {
        name: "Steinbeis University",
        logo: "/Universities/Germany/httpswww.steinbeis-next.de.png",
        url: "https://www.steinbeis-next.de",
      },
      {
        name: "GISMA Business School",
        logo: "/Universities/Germany/gisma.com.png",
        url: "https://www.gisma.com",
      },
      {
        name: "University of Europe for Applied Sciences (UE)",
        logo: "/Universities/Germany/www.ue-germany.com.png",
        url: "https://www.ue-germany.com",
      },
    ],
    intake: "March / September",
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights:
      "20 hrs/week during studies · 18-month job-seeker visa after graduation",
    popularCourses: [
      "Engineering",
      "Computer Science",
      "Automotive Engineering",
      "Business Administration",
      "Data Science",
      "Mechanical Engineering",
    ],
  },
  france: {
    name: "France",
    flag: "fr",
    color: "#ED4B00",
    image: "/Destinations/France.jpg",
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
    duration: "UG: 3 Years · PG: 1–2 Years",
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
    flag: "nl",
    color: "#2100B1",
    image: "/Destinations/Netherlands.jpg",
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
    duration: "UG: 3 Years · PG: 1–2 Years",
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
    flag: "nz",
    color: "#ED4B00",
    image: "/Destinations/NewZealand.jpg",
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
    duration: "UG: 3 Years · PG: 1–2 Years",
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
    flag: "ie",
    color: "#ED4B00",
    image: "/Destinations/Ireland.jpg",
    highlight: "Trinity College Dublin · UCD · University of Galway",
    universities: "10+",
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
    duration: "UG: 3–4 Years · PG: 1–2 Years",
    workRights: "20 hrs/week · 2-year stay back visa",
    popularCourses: [
      "Computer Science",
      "Data Analytics",
      "Business",
      "Pharma",
      "Finance",
      "Engineering",
    ],
  },
  türkiye: {
    name: "Türkiye",
    flag: "tr",
    color: "#ED4B00",
    image: "/Destinations/Türkiye.jpg",
    highlight: "BAU · Bilkent University",
    universities: "10+",
    students: "30+",
    tagline: "Quality Education, Exceptional Value.",
    desc: "Türkiye has affordable education, modern universities, and a unique cultural experience for international students. Türkiye is a bridge between Europe and Asia and has many academic and cultural opportunities to offer. Turkish Government Scholarships provide full funding for eligible international students.",
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
    duration: "UG: 4 Years · PG: 2 Years",
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
    flag: "ae",
    color: "#2100B1",
    image: "/Destinations/UAE.jpg",
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
    duration: "UG: 3–4 Years · PG: 1–2 Years",
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
    flag: "cy",
    color: "#2100B1",
    image: "/Destinations/NorthernCyprus.jpeg",
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
    duration: "UG: 4 Years · PG: 2 Years",
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
    <main style={{ background: "#f8f9ff" }}>
      {/* ─── HERO ─── */}
      <div
        style={{ position: "relative", minHeight: "520px", overflow: "hidden" }}
      >
        <img
          src={country.image}
          alt={country.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Strong left-heavy overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(4,4,20,0.94) 0%, rgba(4,4,20,0.80) 50%, rgba(4,4,20,0.40) 100%)",
          }}
        />
        {/* Bottom fade into page bg */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(to bottom, transparent, #f8f9ff)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(100px, 12vw, 160px) 24px 80px",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
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
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
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
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
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
              gap: "32px",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <span
                className={`fi fi-${country.flag}`}
                style={{
                  display: "block",
                  width: "64px",
                  height: "46px",
                  borderRadius: "6px",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                }}
              />
              {/* Tagline pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  marginBottom: "14px",
                  
                 
                  background: "rgba(255,255,255,0.83)",
  border: "rgba(255,255,255,0.83)",
  borderRadius: "10px",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: country.color,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: country.color,
                    letterSpacing: "0.04em",
                  }}
                >
                  {country.tagline}
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(40px, 6vw, 72px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                }}
              >
                Study in
                <br />
                <span style={{ color: country.color }}>{country.name}</span>
              </h1>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                {
                  icon: GraduationCap,
                  val: country.universities,
                  label: "Partner Unis",
                },
                { icon: Users, val: country.students, label: "Our Students" },
              ].map(({ icon: Icon, val, label }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "16px",
                    padding: "20px 24px",
                    textAlign: "center",
                    minWidth: "110px",
                  }}
                >
                  <Icon
                    size={18}
                    color="#fff"
                    style={{ margin: "0 auto 6px" }}
                  />
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.55)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginTop: "4px",
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

      {/* ─── PARTNER UNIVERSITIES — full width strip at top ─── */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          padding: "36px 24px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "22px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "3px",
                }}
              >
                Our Partner Universities in{" "}
                <span style={{ color: country.color }}>{country.name}</span>
              </h2>
              <p style={{ fontSize: "13px", color: "#999" }}>
                Internationally recognized institutions with active EdX panels
              </p>
            </div>
            <div
              style={{
                padding: "5px 14px",
                borderRadius: "999px",
                background: isOrange
                  ? "rgba(237,75,0,0.08)"
                  : "rgba(33,0,177,0.08)",
                border: `1px solid ${country.color}25`,
                fontSize: "13px",
                fontWeight: 700,
                color: country.color,
              }}
            >
              {country.universities} Universities
            </div>
          </div>
          <UniGrid
            topUnis={country.topUnis}
            color={country.color}
            countryName={country.name}
          />
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Why Study */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "32px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(22px, 3vw, 28px)",
                    fontWeight: 800,
                    color: "#0d0d1a",
                    marginBottom: "14px",
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
                    lineHeight: 1.85,
                    marginBottom: "22px",
                  }}
                >
                  {country.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {country.whyChoose.map((reason, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: "1px",
                          background: isOrange
                            ? "rgba(237,75,0,0.1)"
                            : "rgba(33,0,177,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckCircle size={13} color={country.color} />
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#444",
                          lineHeight: 1.6,
                        }}
                      >
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Courses */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#0d0d1a",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🎓</span> Popular Courses
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {country.popularCourses.map((course, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "7px 16px",
                        background: isOrange
                          ? "rgba(237,75,0,0.07)"
                          : "rgba(33,0,177,0.07)",
                        color: country.color,
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 600,
                        border: `1px solid ${country.color}20`,
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Key Info */}
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "28px",
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#0d0d1a",
                    marginBottom: "20px",
                    paddingBottom: "14px",
                    borderBottom: "2px solid #f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>📋</span> Key Information
                </h3>
                {[
                  { icon: Clock, label: "Intake", val: country.intake },
                  {
                    icon: GraduationCap,
                    label: "Duration",
                    val: country.duration,
                  },
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
                      padding: "13px 0",
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
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: isOrange
                            ? "rgba(237,75,0,0.08)"
                            : "rgba(33,0,177,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={14} color={country.color} />
                      </div>
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
                        fontWeight: 700,
                        textAlign: "right",
                        maxWidth: "220px",
                      }}
                    >
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #0d0d1a 0%, #1a0050 100%)",
                  borderRadius: "20px",
                  padding: "32px",
                  border: `1px solid ${country.color}30`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: `${country.color}30`,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />
                <Globe
                  size={28}
                  color={country.color}
                  style={{ marginBottom: "14px", opacity: 0.9 }}
                />
                <h3
                  style={{
                    fontSize: "20px",
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
                    color: "rgba(255,255,255,0.6)",
                    marginBottom: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  Our experienced counselors at EdX Consultants will guide you
                  through:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  {[
                    "Choosing the right university",
                    "Application & admission process",
                    "Visa guidance & interview prep",
                    "Pre-departure support",
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: `${country.color}25`,
                          border: `1px solid ${country.color}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "9px",
                            color: country.color,
                            fontWeight: 800,
                          }}
                        >
                          ✓
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    background: country.color,
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 800,
                    textDecoration: "none",
                    boxShadow: `0 8px 24px ${country.color}50`,
                  }}
                >
                  Book Free Consultation <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── OTHER DESTINATIONS ─── */}
      <div style={{ background: "#0d0d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "6px",
            }}
          >
            Explore Other <span style={{ color: "#ED4B00" }}>Destinations</span>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "36px",
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
                    borderRadius: "14px",
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
                        background: "rgba(0,0,0,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className={`fi fi-${c.flag}`}
                        style={{
                          display: "block",
                          width: "52px",
                          height: "38px",
                          borderRadius: "4px",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                        }}
                      />
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
                        marginBottom: "3px",
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

      {/* ─── BOTTOM CTA ─── */}
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
            marginBottom: "14px",
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
          Book a free consultation — our counselors will build your complete
          roadmap.
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
          Apply Now <ArrowRight size={16} />
        </Link>
      </div>

      <style>{`
        .other-country-card > div { transition: all 0.25s; }
        .other-country-card:hover > div { transform: translateY(-4px); border-color: rgba(255,255,255,0.2) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.3); }
      `}</style>
    </main>
  );
}
