
import {
  Compass, GraduationCap, BookOpen, FileCheck,
  Award, Stamp, Plane, Home, MessageCircle,
  Headphones, DollarSign, LifeBuoy,
} from "lucide-react";
 
export const services = [
  {
    icon: Compass,
    title: "Career Counseling",
    slug: "career-counseling",
    color: "#2100B1",
    badge: null,
    // ─── Homepage card description ───
    desc: "Let's figure out your \"why.\" We help you identify your core strengths and interests to build a long-term career path that actually excites you.",
    // ─── Detail page content ───
    detail: {
      tagline: "Find the path that's built for you.",
      intro: "Choosing the right career path can feel confusing, especially when there are so many options available. Our career counseling service helps students understand their strengths, interests, and future opportunities before choosing a university or program.\n\nAt EdX Consultants, our experienced counselors take the time to learn about your goals, academic background, and personal interests. We guide you step by step so you can make a decision that supports your long-term career success, not just your next degree.\n\nWhether you already have a plan or feel completely unsure, we help you find the right direction with confidence.",
      whatWeOffer: [
        "One-on-one discussion with an experienced career counselor",
        "Understanding your interests, strengths, and career goals",
        "Guidance on choosing the right study field",
        "Advice on study destinations and industry demand",
        "Shortlisting possible career paths based on your profile",
        "Information about job opportunities and salary expectations abroad",
      ],
      howItWorks: [
        { step: "01", title: "Initial Assessment", desc: "We start by learning about you — your academic background, interests, hobbies, and long-term goals." },
        { step: "02", title: "Career Mapping", desc: "Based on your strengths and interests, we suggest possible career paths and study areas that suit you best." },
        { step: "03", title: "Program Matching", desc: "We identify study programs and universities that can help you reach your career goals." },
        { step: "04", title: "Roadmap Creation", desc: "We create a simple step-by-step plan for your study abroad journey so you know exactly what to do next." },
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    slug: "university-selection",
    color: "#ED4B00",
    badge: null,
    desc: "The best university isn't just the one with the biggest name — it's the one that fits your profile, your budget, and your specific ambitions. We help you find that perfect match.",
    detail: {
      tagline: "Find your perfect university match.",
      intro: "Choosing a university is one of the most important decisions of your academic journey. At EdX Consultants, we analyze your academic profile, career goals, preferred destination, and budget to shortlist universities where you have the highest chances of acceptance and long-term success.\n\nWe focus on finding the perfect balance between reputation, affordability, and career outcomes — so you don't just get admission, you get the right opportunity.",
      whatWeOffer: [
        "Academic profile evaluation",
        "University shortlisting based on your goals and budget",
        "Ranking and reputation analysis",
        "Career outcome research for your chosen field",
        "Direct partnerships with 200+ universities worldwide",
        "Personalized university recommendations",
      ],
      howItWorks: [
        { step: "01", title: "Profile Review", desc: "We assess your academic background, grades, and eligibility." },
        { step: "02", title: "Goal Alignment", desc: "We match your career goals with the right programs and destinations." },
        { step: "03", title: "University Shortlisting", desc: "We prepare a list of best-fit universities with acceptance insights." },
        { step: "04", title: "Final Selection", desc: "We help you choose the university that offers the best overall opportunity." },
      ],
    },
  },
  {
    icon: BookOpen,
    title: "Course Selection",
    slug: "course-selection",
    color: "#2100B1",
    badge: null,
    desc: "Choosing the right degree is a massive decision. We look at your academic history and future goals to ensure the program you pick opens the right doors.",
    detail: {
      tagline: "Choose the degree that shapes your career.",
      intro: "Selecting the right course is just as important as choosing the right university. Our experts help you align your academic background, interests, and future career opportunities with the most suitable programs.\n\nWe ensure the course you choose builds valuable skills and opens strong career pathways globally.",
      whatWeOffer: [
        "Degree and specialization guidance",
        "Career-oriented course recommendations",
        "Program comparison across universities",
        "Future job market insights",
        "Advice for switching academic fields",
        "Industry demand analysis",
      ],
      howItWorks: [
        { step: "01", title: "Academic Review", desc: "We review your previous qualifications and interests." },
        { step: "02", title: "Career Alignment", desc: "We match courses with future industry demand." },
        { step: "03", title: "Program Evaluation", desc: "We analyze course structure, outcomes, and university offerings." },
        { step: "04", title: "Final Recommendation", desc: "We guide you in selecting the most beneficial program." },
      ],
    },
  },
  {
    icon: FileCheck,
    title: "Admission Application",
    slug: "admission-application",
    color: "#ED4B00",
    badge: null,
    desc: "The paperwork can be overwhelming. We take over the heavy lifting — from polishing your SOPs to organizing your documents — to give you the best shot at an acceptance letter.",
    detail: {
      tagline: "Your application deserves to stand out.",
      intro: "University applications involve multiple documents, strict deadlines, and detailed requirements. Our team ensures your application is complete, polished, and professionally presented to maximize your chances of acceptance.\n\nFrom SOP writing to document preparation, we handle every step with precision.",
      whatWeOffer: [
        "SOP and personal statement guidance",
        "LOR preparation assistance",
        "Application launching",
        "Document verification and organization",
        "Deadline management",
        "Application tracking and follow-ups",
      ],
      howItWorks: [
        { step: "01", title: "Document Collection", desc: "We gather all required academic and personal documents." },
        { step: "02", title: "Application Preparation", desc: "We review and polish SOPs, LORs, and forms." },
        { step: "03", title: "University Submission", desc: "Applications are submitted accurately and on time." },
        { step: "04", title: "Admission Tracking", desc: "We monitor the progress and update you regularly." },
      ],
    },
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    slug: "scholarship-guidance",
    color: "#2100B1",
    badge: "Save Money",
    desc: "Don't let the price tag hold you back. We actively search for and help you apply for scholarships that can significantly lower the cost of your international education.",
    detail: {
      tagline: "Make international education affordable.",
      intro: "Studying abroad can be expensive, but scholarships can significantly reduce your financial burden. Our team helps you identify and apply for scholarships, grants, and funding opportunities that match your profile.\n\nWe also guide you in understanding student loans and financial planning for your study abroad journey.",
      whatWeOffer: [
        "Scholarship search and eligibility check",
        "Application preparation guidance",
        "Essay and motivation letter support",
        "Financial planning advice",
        "External funding opportunities",
      ],
      howItWorks: [
        { step: "01", title: "Eligibility Check", desc: "We evaluate scholarship opportunities suited to your profile." },
        { step: "02", title: "Scholarship Research", desc: "We shortlist scholarships available for your universities." },
        { step: "03", title: "Application Support", desc: "We guide you through essays, forms, and required documents." },
        { step: "04", title: "Funding Strategy", desc: "We help you combine scholarships and financial options." },
      ],
    },
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    slug: "visa-assistance",
    color: "#2100B1",
    badge: "98% Success",
    desc: "Our visa team is second to none. We help you prepare a complete, error-free file — ensuring you meet all requirements for a smooth and successful visa interview.",
    detail: {
      tagline: "Prepare for a smooth visa approval.",
      intro: "Securing a student visa is one of the most critical stages of studying abroad. Our visa experts ensure your documentation, financial proof, and interview preparation meet the latest embassy requirements.\n\nWe help minimize errors and maximize your chances of a successful visa outcome.",
      whatWeOffer: [
        "Visa document checklist and preparation",
        "Financial proof guidance",
        "Visa application submission assistance",
        "Visa interview preparation",
        "Embassy requirement updates",
        "Mock interview sessions",
      ],
      howItWorks: [
        { step: "01", title: "Document Preparation", desc: "We prepare and verify all visa documents." },
        { step: "02", title: "Financial Verification", desc: "We ensure your financial proof meets embassy standards." },
        { step: "03", title: "Visa Application", desc: "We assist in completing and submitting your visa application." },
        { step: "04", title: "Interview Preparation", desc: "We train you for the visa interview process." },
      ],
    },
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefing",
    slug: "pre-departure-briefing",
    color: "#2100B1",
    badge: null,
    desc: "Before you fly, we sit down with you to cover the essentials: what to pack, airport procedures, and the cultural tips that will help you settle in without the stress.",
    detail: {
      tagline: "Start your journey with confidence.",
      intro: "Before you leave for your new academic life, we provide a comprehensive orientation to ensure you are fully prepared. Our pre-departure sessions cover everything from travel tips to cultural adaptation.\n\nYou'll arrive at your destination feeling confident and ready.",
      whatWeOffer: [
        "Travel preparation guidance",
        "Airport and immigration procedures",
        "Cultural orientation",
        "Student life tips abroad",
        "Health insurance information",
        "Emergency contact guidance",
      ],
      howItWorks: [
        { step: "01", title: "Travel Planning", desc: "We guide you on flight booking and travel essentials." },
        { step: "02", title: "Packing Checklist", desc: "We provide a detailed packing guide." },
        { step: "03", title: "Cultural Preparation", desc: "We help you understand local culture and lifestyle." },
        { step: "04", title: "Arrival Guidance", desc: "We explain airport procedures and first steps abroad." },
      ],
    },
  },
  {
    icon: Home,
    title: "Accommodation Support",
    slug: "accommodation-support",
    color: "#ED4B00",
    badge: null,
    desc: "Finding a place to live from thousands of miles away is tough. We help you find safe, affordable, and student-friendly housing near your campus.",
    detail: {
      tagline: "Find a comfortable home near your campus.",
      intro: "Finding housing in a new country can be stressful. We assist students in securing safe, affordable, and convenient accommodation close to their university.\n\nOur goal is to help you settle into your new environment smoothly.",
      whatWeOffer: [
        "Student housing recommendations",
        "University dormitory guidance",
        "Private accommodation options",
        "Budget-friendly housing advice",
      ],
      howItWorks: [
        { step: "01", title: "Accommodation Research", desc: "We explore housing options near your university." },
        { step: "02", title: "Budget Planning", desc: "We identify options within your budget." },
        { step: "03", title: "Shortlisting", desc: "We shortlist the best available options for your needs." },
        { step: "04", title: "Booking Support", desc: "We guide you through the booking and confirmation process." },
      ],
    },
  },
  {
    icon: MessageCircle,
    title: "Initial Consultation",
    slug: "initial-consultation",
    color: "#ED4B00",
    badge: "Free",
    desc: "Your first step is completely free. Sit down with us for a no-commitment session to discuss your dreams and see how we can build a roadmap to get you there.",
    detail: {
      tagline: "Your study abroad journey begins here.",
      intro: "Your first session with EdX Consultants is completely free. During this consultation, we discuss your goals, academic background, financial plans, and preferred study destinations.\n\nThis session helps us design a clear roadmap for your study abroad journey.",
      whatWeOffer: [
        "Personalized study abroad consultation",
        "Career and academic goal discussion",
        "Country and university overview",
        "Budget and scholarship advice",
        "Roadmap for application process",
        "Q&A with study abroad experts",
      ],
      howItWorks: [
        { step: "01", title: "Consultation Booking", desc: "Schedule a free meeting with our counselors." },
        { step: "02", title: "Goal Discussion", desc: "We understand your study and career ambitions." },
        { step: "03", title: "Opportunity Exploration", desc: "We discuss possible universities, courses, and countries." },
        { step: "04", title: "Roadmap Creation", desc: "We outline the steps to start your study abroad journey." },
      ],
    },
  },
];
 
// ─── About Page Content ───
export const aboutContent = {
  ourStory: {
    heading: "Shaping Careers, Transforming Lives",
    text: "Since 2014, we've stood as a reliable partner for students across Pakistan looking to expand their horizons. For over a decade, our focus has remained the same: turning the daunting process of international applications into a clear, manageable path toward a global future. We are proud to have helped more than 5,000 students find their place in the world.",
  },
  split: {
    heading: "Nurturing Your Study Abroad Dreams into Reality",
    text: "At EdX Consultants, we believe that your academic journey should have no borders. We bridge the gap between talented Pakistani students and prestigious universities in the UK, USA, Canada, Australia, and beyond. Our team doesn't just process paperwork; we provide expert career counseling and visa guidance tailored to your specific goals.",
    points: [
      { title: "One-on-One Support", desc: "You get a personalized roadmap designed for your unique academic background." },
      { title: "Dedicated Experts", desc: "Every student is paired with a specialist visa counselor to navigate the fine details." },
      { title: "Global Connections", desc: "We work directly with over 200 partner universities to ensure you have the best options available." },
      { title: "End-to-End Care", desc: "From that first spark of an idea to the moment you step onto your new campus, we manage every detail of your study abroad journey. You focus on your future; we’ll handle the logistics." },
    ],
  },
  ceo: {
    quote: "To every student reading this: you are standing at the edge of a journey that will redefine who you are. Education isn't just about the degree you earn; it's about the person you become and the doors you unlock for your future.\n\nI know that the road to studying abroad can feel full of challenges, but every hurdle is a chance to grow stronger. At EdX Consultants, our mission is to give you the clarity and confidence to make decisions that change your life for the better. We believe in your potential — let's work together to make the world your classroom.",
    name: "Dr. Syed Shujaat Ali Shah",
    title: "Ph.D. Marketing | CEO, EdX Consultants Pvt. Ltd.",
  },
  values: [
    {
      title: "Our Mission",
      desc: "To provide the honest, high quality guidance Pakistani students need to access world-class education. We empower you to explore global opportunities through personalized support that puts your career goals first.",
    },
    {
      title: "Our Vision",
      desc: "To remain the most trusted name in study abroad consultancy in Pakistan. We aim to build a legacy of integrity where our success is measured by the long-term achievements and life-changing stories of the students we serve.",
    },
    {
      title: "Our Promise",
      desc: "We promise total transparency. Navigating international admissions requires trust, and we honor that trust by keeping you informed at every stage. Your success is our only priority, and we work tirelessly to ensure you reach your destination.",
    },
  ],
};
 