import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Compass,
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  DollarSign,
  Stamp,
  Headphones,
  Plane,
  Home,
  LifeBuoy,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
} from "lucide-react";

const services = {
  "career-counseling": {
    icon: Compass,
    color: "#2100B1",
    title: "Career Counseling",
    tagline: "Find Your Direction. Build Your Future.",
    desc: "Our career counseling service is the foundation of your study abroad journey. We believe that choosing the right career path before selecting a university or country is critical to your long-term success. Our experienced counselors take time to understand your personality, academic strengths, interests, and financial situation before recommending a direction.",
    whatWeOffer: [
      "One-on-one sessions with certified career counselors",
      "Psychometric assessments to identify your strengths",
      "Industry and market analysis for your target country",
      "Shortlisting of suitable career paths and programs",
      "Mapping of career goals to specific university programs",
      "Guidance on career prospects and salary expectations abroad",
    ],
    process: [
      {
        step: "01",
        title: "Initial Assessment",
        desc: "We evaluate your academic background, interests, and goals.",
      },
      {
        step: "02",
        title: "Career Mapping",
        desc: "We map suitable careers to your profile and market demand.",
      },
      {
        step: "03",
        title: "Program Matching",
        desc: "We identify programs that lead to your target career.",
      },
      {
        step: "04",
        title: "Roadmap Creation",
        desc: "We create a personalized action plan for your journey.",
      },
    ],
    duration: "1–2 Sessions",
    cost: "Free",
    eligibility: "All students",
  },
  "university-selection": {
    icon: GraduationCap,
    color: "#ED4B00",
    title: "University Selection",
    tagline: "The Right University Changes Everything.",
    desc: "Choosing the right university is one of the most important decisions of your life. With 200+ partner universities across 10 countries, we have the knowledge and relationships to match you with institutions that align with your academic profile, financial situation, visa eligibility, and career goals — maximizing your chances of acceptance and success.",
    whatWeOffer: [
      "Analysis of your academic profile and eligibility",
      "Shortlisting of 5–8 universities across safety, target, and reach categories",
      "University ranking, reputation, and employer recognition research",
      "Tuition fee and living cost comparison",
      "Scholarship availability at each university",
      "Post-study work and PR opportunities by institution",
    ],
    process: [
      {
        step: "01",
        title: "Profile Evaluation",
        desc: "We review your grades, test scores, and financial capacity.",
      },
      {
        step: "02",
        title: "Country Shortlisting",
        desc: "We identify countries that match your goals and budget.",
      },
      {
        step: "03",
        title: "University Research",
        desc: "We research and shortlist 5–8 best-fit universities.",
      },
      {
        step: "04",
        title: "Final Selection",
        desc: "We help you make the final, informed decision.",
      },
    ],
    duration: "2–3 Sessions",
    cost: "Free",
    eligibility: "All students",
  },
  "course-selection": {
    icon: BookOpen,
    color: "#2100B1",
    title: "Course Selection",
    tagline: "The Right Course, The Right Future.",
    desc: "Selecting the right course is as important as selecting the right university. Many students make the mistake of choosing a course based on trends rather than their own strengths and market demand. Our counselors guide you through a detailed analysis of your academic background, career aspirations, and the global job market to help you choose wisely.",
    whatWeOffer: [
      "Analysis of your previous education and subjects",
      "Mapping of courses to your career goals",
      "Comparison of course structures at different universities",
      "Guidance on professional accreditation and recognition",
      "Advice on specializations and minors",
      "Information on job placement rates by course",
    ],
    process: [
      {
        step: "01",
        title: "Academic Review",
        desc: "We analyze your prior education and subject strengths.",
      },
      {
        step: "02",
        title: "Career Alignment",
        desc: "We align course options with your career goals.",
      },
      {
        step: "03",
        title: "Market Research",
        desc: "We check job market demand for each course abroad.",
      },
      {
        step: "04",
        title: "Final Decision",
        desc: "We help you finalize the course that fits best.",
      },
    ],
    duration: "1–2 Sessions",
    cost: "Free",
    eligibility: "All students",
  },
  "admission-application": {
    icon: FileText,
    color: "#ED4B00",
    title: "Admission Application",
    tagline: "Your Best Application. Every Time.",
    desc: "A strong application can make or break your university admission. Our team has helped thousands of students craft compelling applications that stand out. From your Statement of Purpose to your Letters of Recommendation, we guide you through every document to maximize your chances of acceptance at your dream university.",
    whatWeOffer: [
      "Complete application management for multiple universities",
      "Statement of Purpose (SOP) writing and editing",
      "Personal Statement guidance and review",
      "Letter of Recommendation (LOR) advice",
      "CV and resume building for university applications",
      "Document checklist and verification",
      "Application deadline tracking and submission",
    ],
    process: [
      {
        step: "01",
        title: "Document Checklist",
        desc: "We prepare a complete list of required documents.",
      },
      {
        step: "02",
        title: "SOP & Essays",
        desc: "We guide you through writing compelling essays.",
      },
      {
        step: "03",
        title: "Review & Polish",
        desc: "We review and refine all application materials.",
      },
      {
        step: "04",
        title: "Submission",
        desc: "We submit your applications before all deadlines.",
      },
    ],
    duration: "2–4 Weeks",
    cost: "Included",
    eligibility: "All students",
  },
  "scholarship-guidance": {
    icon: Award,
    color: "#2100B1",
    title: "Scholarship Guidance",
    tagline: "Study Abroad Without Breaking the Bank.",
    desc: "Many students assume studying abroad is financially out of reach. The truth is, billions of dollars in scholarships go unclaimed every year because students don't know how to find or apply for them. Our scholarship team has in-depth knowledge of scholarships available at our partner universities and from governments around the world.",
    whatWeOffer: [
      "Identification of scholarships matching your profile",
      "Government scholarship applications (HEC, Chevening, Fulbright etc.)",
      "University merit scholarships guidance",
      "Need-based financial aid applications",
      "Scholarship essay and motivation letter writing",
      "Deadline management for multiple scholarship applications",
    ],
    process: [
      {
        step: "01",
        title: "Eligibility Check",
        desc: "We evaluate which scholarships you qualify for.",
      },
      {
        step: "02",
        title: "Application Prep",
        desc: "We prepare all required documents and essays.",
      },
      {
        step: "03",
        title: "Submission",
        desc: "We submit applications before scholarship deadlines.",
      },
      {
        step: "04",
        title: "Follow Up",
        desc: "We follow up and prepare you for scholarship interviews.",
      },
    ],
    duration: "2–6 Weeks",
    cost: "Included",
    eligibility: "Merit & need-based",
  },
  "financial-aid": {
    icon: DollarSign,
    color: "#ED4B00",
    title: "Financial Aid",
    tagline: "Smart Funding for Your Future.",
    desc: "Beyond scholarships, there are many financial aid options available for Pakistani students studying abroad — from student loans and bank financing to installment-based tuition payment plans at universities. We help you understand all your options and guide you through the application process.",
    whatWeOffer: [
      "Overview of all financial aid options available",
      "Student loan guidance from Pakistani banks",
      "University payment plan negotiations",
      "Blocked account guidance for Germany",
      "Education loan from international banks",
      "Part-time work opportunities guidance by country",
    ],
    process: [
      {
        step: "01",
        title: "Financial Assessment",
        desc: "We review your financial situation and needs.",
      },
      {
        step: "02",
        title: "Options Overview",
        desc: "We present all available funding options.",
      },
      {
        step: "03",
        title: "Application Help",
        desc: "We assist with loan and aid applications.",
      },
      {
        step: "04",
        title: "Planning",
        desc: "We help you create a realistic financial plan.",
      },
    ],
    duration: "1–3 Sessions",
    cost: "Free",
    eligibility: "All students",
  },
  "visa-assistance": {
    icon: Stamp,
    color: "#2100B1",
    title: "Visa Assistance",
    tagline: "98% Visa Success Rate. Guaranteed Expertise.",
    desc: "Our dedicated visa team is the backbone of EdX Consultants. With a 98% visa success rate, we have earned the trust of thousands of students and families. Our counselors are deeply familiar with the requirements, documentation, and processes for student visas across all 10 of our destination countries.",
    whatWeOffer: [
      "Complete visa file preparation and review",
      "Bank statement and financial document guidance",
      "IELTS/English proficiency requirement advice",
      "Visa interview preparation and mock sessions",
      "Embassy correspondence and follow-up",
      "Visa rejection appeal assistance",
      "Biometric and appointment scheduling",
    ],
    process: [
      {
        step: "01",
        title: "Document Preparation",
        desc: "We prepare your complete visa file meticulously.",
      },
      {
        step: "02",
        title: "File Review",
        desc: "Our senior visa officer reviews every document.",
      },
      {
        step: "03",
        title: "Submission",
        desc: "We submit your application to the embassy.",
      },
      {
        step: "04",
        title: "Follow Up",
        desc: "We track and follow up until visa is granted.",
      },
    ],
    duration: "2–8 Weeks",
    cost: "Included",
    eligibility: "All accepted students",
  },
  "ielts-pte-preparation": {
    icon: Headphones,
    color: "#ED4B00",
    title: "IELTS / PTE Preparation",
    tagline: "Score What You Need. Get Where You Want.",
    desc: "English language proficiency is a mandatory requirement for university admissions and visa applications in most English-speaking countries. Our IELTS and PTE preparation program is designed to help you achieve the score you need — efficiently and effectively.",
    whatWeOffer: [
      "Complete IELTS and PTE preparation courses",
      "One-on-one coaching with experienced instructors",
      "Full-length mock tests with detailed feedback",
      "Speaking and writing improvement sessions",
      "Band score improvement strategies",
      "Online and in-person classes available",
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic Test",
        desc: "We assess your current English level.",
      },
      {
        step: "02",
        title: "Study Plan",
        desc: "We create a customized preparation plan.",
      },
      {
        step: "03",
        title: "Coaching",
        desc: "Intensive coaching on all four skills.",
      },
      {
        step: "04",
        title: "Mock Tests",
        desc: "Full mock exams with performance analysis.",
      },
    ],
    duration: "4–8 Weeks",
    cost: "Separate fee",
    eligibility: "All students",
  },
  "pre-departure-briefing": {
    icon: Plane,
    color: "#2100B1",
    title: "Pre-Departure Briefing",
    tagline: "Be Ready Before You Even Board the Plane.",
    desc: "The journey doesn't end with a visa. Our comprehensive pre-departure briefing sessions prepare you for life in your new country — from what to pack and how to navigate the airport, to understanding local culture, opening a bank account, and registering with your university.",
    whatWeOffer: [
      "Country-specific cultural orientation",
      "Packing list and luggage guidance",
      "Airport and immigration process walkthrough",
      "Currency, banking, and financial setup tips",
      "SIM card and internet setup information",
      "University registration and orientation guidance",
      "Emergency contacts and support network setup",
    ],
    process: [
      {
        step: "01",
        title: "Country Briefing",
        desc: "We cover everything about your destination country.",
      },
      {
        step: "02",
        title: "Practical Tips",
        desc: "Packing, airport, transport, and arrival tips.",
      },
      {
        step: "03",
        title: "University Info",
        desc: "Registration, accommodation, and campus info.",
      },
      {
        step: "04",
        title: "Q&A Session",
        desc: "Open session to answer all your questions.",
      },
    ],
    duration: "1 Session",
    cost: "Free",
    eligibility: "Visa-approved students",
  },
  "accommodation-support": {
    icon: Home,
    color: "#ED4B00",
    title: "Accommodation Support",
    tagline: "Find the Perfect Place to Call Home.",
    desc: "Finding safe, affordable, and convenient accommodation is a major concern for international students. We help you explore all your options — from university-managed halls of residence to private student accommodations and shared apartments — and assist you in booking before you arrive.",
    whatWeOffer: [
      "University halls of residence application assistance",
      "Private student accommodation research and booking",
      "Shared apartment and house search guidance",
      "Rent budget planning by city",
      "Landlord communication and contract review tips",
      "Temporary accommodation suggestions upon arrival",
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        desc: "We understand your budget and location preferences.",
      },
      {
        step: "02",
        title: "Options Research",
        desc: "We research suitable accommodation options.",
      },
      {
        step: "03",
        title: "Applications",
        desc: "We assist with accommodation applications.",
      },
      {
        step: "04",
        title: "Confirmation",
        desc: "We help you confirm and secure your place.",
      },
    ],
    duration: "1–2 Weeks",
    cost: "Included",
    eligibility: "All students",
  },
  "post-arrival-support": {
    icon: LifeBuoy,
    color: "#2100B1",
    title: "Post-Arrival Support",
    tagline: "We're With You Even After You Land.",
    desc: "Our commitment to our students doesn't end when they board the plane. We provide ongoing support after arrival to help you settle in quickly and confidently. From your first week on campus to navigating life in a new country, our team is just a call away.",
    whatWeOffer: [
      "24/7 WhatsApp support for the first 30 days",
      "Bank account opening guidance",
      "National insurance / tax number registration",
      "University enrollment and induction support",
      "Student community and networking connections",
      "Part-time job search guidance",
      "Mental health and wellbeing check-ins",
    ],
    process: [
      {
        step: "01",
        title: "Arrival Check-in",
        desc: "We check in on arrival day to ensure safe landing.",
      },
      {
        step: "02",
        title: "First Week",
        desc: "We guide you through your first week setup.",
      },
      {
        step: "03",
        title: "University Start",
        desc: "We help you settle into university life.",
      },
      {
        step: "04",
        title: "Ongoing Support",
        desc: "We stay available for any questions or issues.",
      },
    ],
    duration: "30+ Days",
    cost: "Included",
    eligibility: "All placed students",
  },
  "initial-consultation": {
    icon: MessageCircle,
    color: "#ED4B00",
    title: "Initial Consultation",
    tagline: "Your Journey Starts With a Conversation.",
    desc: "Your first consultation with EdX is completely free and comes with no obligations. It's a chance for us to get to know you, understand your goals and concerns, and help you see what's possible. In just one session, most students walk away with a clear direction and renewed confidence about their study abroad journey.",
    whatWeOffer: [
      "Free 45–60 minute one-on-one session",
      "Assessment of your academic background",
      "Discussion of your goals and destination preferences",
      "Overview of the entire study abroad process",
      "Honest advice on eligibility and realistic expectations",
      "Preliminary university and course suggestions",
    ],
    process: [
      {
        step: "01",
        title: "Book Session",
        desc: "Schedule your free consultation online or by phone.",
      },
      {
        step: "02",
        title: "Meet Counselor",
        desc: "Meet your dedicated counselor in person or online.",
      },
      {
        step: "03",
        title: "Your Profile",
        desc: "We discuss your background, goals, and finances.",
      },
      {
        step: "04",
        title: "Your Roadmap",
        desc: "You leave with a clear next-step action plan.",
      },
    ],
    duration: "45–60 Minutes",
    cost: "Completely Free",
    eligibility: "Everyone",
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} | EdX Consultants`,
    description: service.desc.slice(0, 155),
  };
}

export default async function ServiceDetailPage({ params }) {  // ← async add کریں
  const { slug } = await params;  // ← await add کریں
  const service = services[slug];
  if (!service) notFound();

  const Icon = service.icon;
  const isBlue = service.color === '#2100B1';

  const otherServices = Object.entries(services)
    .filter(([s]) => s !== slug)  
    .slice(0, 4);
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: isBlue ? "rgba(33,0,177,0.15)" : "rgba(237,75,0,0.1)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: isBlue ? "rgba(237,75,0,0.08)" : "rgba(33,0,177,0.12)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <Link
              href="/services"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span
              style={{
                fontSize: "13px",
                color: service.color,
                fontWeight: 600,
              }}
            >
              {service.title}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
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
                  marginBottom: "24px",
                  background: isBlue
                    ? "rgba(33,0,177,0.2)"
                    : "rgba(237,75,0,0.15)",
                  border: `1px solid ${isBlue ? "rgba(33,0,177,0.3)" : "rgba(237,75,0,0.3)"}`,
                }}
              >
                <Icon size={14} color={service.color} />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: service.color,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Service
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 58px)",
                  fontWeight: 800,
                  color: "white",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                {service.title}
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: service.color,
                  fontWeight: 600,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                "{service.tagline}"
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                {service.desc}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    background: service.color,
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: `0 6px 24px ${service.color}50`,
                  }}
                >
                  Get Started Free <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  All Services
                </Link>
              </div>
            </div>

            {/* Info Card */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: isBlue
                    ? "rgba(33,0,177,0.2)"
                    : "rgba(237,75,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <Icon size={32} color={service.color} strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                Service Details
              </h3>
              {[
                { label: "Duration", val: service.duration, icon: Clock },
                { label: "Cost", val: service.cost, icon: Star },
                { label: "Eligibility", val: service.eligibility, icon: Users },
              ].map(({ label, val, icon: InfoIcon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <InfoIcon size={14} color="rgba(255,255,255,0.35)" />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color:
                        val === "Free" || val === "Completely Free"
                          ? "#22c55e"
                          : "white",
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div style={{ background: "#f8f9ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                What We <span style={{ color: service.color }}>Offer</span>
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#888",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Here's exactly what's included in our {service.title} service.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {service.whatWeOffer.map((item, i) => (
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
                      color={service.color}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "15px",
                        color: "#444",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                How It <span style={{ color: service.color }}>Works</span>
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#888",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Our simple 4-step process to get you the best results.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: service.color,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          color: "#0d0d1a",
                          marginBottom: "4px",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#777",
                          lineHeight: 1.6,
                        }}
                      >
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "#0d0d1a",
              marginBottom: "8px",
              letterSpacing: "-0.01em",
            }}
          >
            Explore Other <span style={{ color: "#2100B1" }}>Services</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#888", marginBottom: "40px" }}>
            Our complete range of study abroad services.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {otherServices.map(([slug, svc]) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                style={{ textDecoration: "none" }}
                className="service-other-card"
              >
                <div
                  style={{
                    padding: "24px",
                    borderRadius: "14px",
                    border: `1px solid rgba(0,0,0,0.07)`,
                    background: "#fafafa",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background:
                        svc.color === "#2100B1"
                          ? "rgba(33,0,177,0.08)"
                          : "rgba(237,75,0,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <svc.icon size={20} color={svc.color} strokeWidth={1.8} />
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0d0d1a",
                      marginBottom: "6px",
                    }}
                  >
                    {svc.title}
                  </div>
                  <div
                    style={{ fontSize: "13px", color: "#999", lineHeight: 1.6 }}
                  >
                    {svc.short}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "14px",
                      color: svc.color,
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <style>{`
            .service-other-card > div { transition: all 0.2s; }
            .service-other-card:hover > div { background: white !important; box-shadow: 0 8px 30px rgba(0,0,0,0.08); transform: translateY(-3px); }
          `}</style>
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
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}
        >
          Ready to Get Started?
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "32px",
            maxWidth: "480px",
            margin: "0 auto 32px",
          }}
        >
          Book your free consultation today — no commitment, just clarity.
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
          }}
        >
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>

      <Footer />
    </main>
  );
}
