import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  User,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Tag,
} from "lucide-react";

const posts = {
  "how-to-get-uk-student-visa": {
    title: "How to Get a UK Student Visa in 2025 — Complete Guide",
    category: "Visa Guides",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "February 15, 2025",
    readTime: "8 min read",
    author: "EdX Visa Team",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=85",
    color: "#ED4B00",
    excerpt:
      "Everything Pakistani students need to know about the UK Student visa — documents, bank statements, CAS, and how to avoid the most common rejection reasons.",
    intro:
      "The UK Student visa (formerly known as Tier 4) is one of the most sought-after student visas in the world — and one of the most misunderstood. Every year, thousands of Pakistani students face delays or rejections not because they were ineligible, but because of avoidable documentation mistakes. This guide covers everything you need to know to get it right the first time.",
    sections: [
      {
        heading: "What is the UK Student Visa?",
        content:
          "The UK Student visa allows international students to study at a licensed UK university or college for courses longer than 6 months. Once you have a Confirmation of Acceptance for Studies (CAS) from your university, you can apply for the visa up to 6 months before your course start date.",
      },
      {
        heading: "Step-by-Step: How to Apply",
        type: "steps",
        steps: [
          {
            num: "01",
            title: "Receive Your CAS Number",
            desc: "Your university issues a CAS (Confirmation of Acceptance for Studies) after you accept your offer and meet all conditions. This is the foundation of your visa application.",
          },
          {
            num: "02",
            title: "Gather Your Documents",
            desc: "Collect your passport, financial evidence, academic transcripts, English language test results, and any other documents your university specifies.",
          },
          {
            num: "03",
            title: "Prove Your Finances",
            desc: "You must show you have enough money to pay your first year tuition (if not paid already) plus living costs. The required amount must be in your account for at least 28 consecutive days before your application.",
          },
          {
            num: "04",
            title: "Apply Online",
            desc: "Complete the online application at gov.uk. You will pay the visa fee (currently £363) and the Immigration Health Surcharge (approximately £776 per year of study).",
          },
          {
            num: "05",
            title: "Book Biometrics",
            desc: "After submitting your application, book an appointment at a UKVI visa application centre in Pakistan (available in Karachi, Lahore, and Islamabad).",
          },
          {
            num: "06",
            title: "Wait for Decision",
            desc: "Standard processing is 3 weeks. Priority and super-priority services are available at extra cost for faster decisions.",
          },
        ],
      },
      {
        heading: "Documents Required",
        type: "checklist",
        items: [
          "Valid passport (with at least 6 months validity beyond your intended stay)",
          "CAS number from your UK university",
          "Proof of funds — bank statements for the last 28 days",
          "IELTS / English proficiency test results (unless exempt)",
          "Academic transcripts and certificates",
          "Tuberculosis (TB) test results (required for Pakistan)",
          "Parental consent letter (if under 18)",
          "ATAS certificate (if applicable for your course)",
        ],
      },
      {
        heading: "How Much Money Do You Need?",
        content:
          "The financial requirement is one of the most common reasons for UK visa rejections. You must show:\n\n• Tuition fee for first year (or remaining balance if partially paid)\n• Living costs: £1,334/month in London or £1,023/month outside London\n• The total must be in your bank account for 28 consecutive days before your application date\n\nFor example, if your course starts in September and your tuition is £15,000 and you are studying in London: you need to show £15,000 + (£1,334 × 9 months) = £27,006 minimum.",
      },
      {
        heading: "Common Reasons for UK Visa Rejection",
        type: "warning",
        items: [
          "Bank statements not covering the full 28-day period",
          "Funds not in the applicant's (or parent's) name",
          "Unexplained large deposits shortly before the 28-day period",
          "Inconsistencies between the CAS and application form",
          "Insufficient English language proficiency evidence",
          "TB test results missing or expired",
          "Gaps in study history not explained",
        ],
      },
      {
        heading: "Tips from Our Visa Team",
        content:
          "After successfully processing 800+ UK visa applications, here are the most important lessons our visa team has learned:\n\n1. Start collecting your bank statements 40+ days before you plan to apply — not 28 days. This gives you a buffer.\n\n2. Never top up your account with a large lump sum just before applying. Immigration officers look for this pattern and it raises suspicion.\n\n3. Double-check every single detail on your application matches your passport and CAS letter exactly.\n\n4. If your parents are funding you, their bank statements are acceptable — but you need a notarized letter explaining the relationship.\n\n5. Book your biometrics appointment as soon as you submit your online application — slots fill up fast in peak season.",
      },
    ],
    tags: ["UK Visa", "Student Visa", "Documents", "Bank Statement", "CAS"],
    relatedSlugs: [
      "australia-student-visa-2025",
      "ielts-score-requirements",
      "sop-writing-guide",
    ],
  },

  "canada-pgwp-guide": {
    title: "Canada Post-Graduate Work Permit — Everything You Need to Know",
    category: "Work & PR",
    country: "Canada",
    flag: "🇨🇦",
    date: "January 28, 2025",
    readTime: "6 min read",
    author: "EdX Canada Team",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1200&q=85",
    color: "#2100B1",
    excerpt:
      "The PGWP is one of Canada's biggest advantages for international students. Learn who qualifies, how long it lasts, and how it leads to PR.",
    intro:
      "The Post-Graduate Work Permit (PGWP) is arguably Canada's biggest advantage over other study destinations. It allows international graduates to stay and work in Canada for up to 3 years after graduation — giving you real Canadian work experience that can be used to apply for Permanent Residency through Express Entry.",
    sections: [
      {
        heading: "What is the PGWP?",
        content:
          "The Post-Graduate Work Permit (PGWP) is an open work permit issued to international students who graduate from a eligible Canadian Designated Learning Institution (DLI). It is 'open' — meaning you can work for any employer in Canada, in any location, in any field. You are not tied to a specific job or employer.",
      },
      {
        heading: "Who Qualifies for PGWP?",
        type: "checklist",
        items: [
          "You studied at a Designated Learning Institution (DLI) in Canada",
          "Your program was at least 8 months long",
          "You completed and passed your program",
          "You apply within 180 days of receiving your final marks",
          "Your study permit was valid when you graduated",
          "You have not previously been issued a PGWP",
        ],
      },
      {
        heading: "How Long Does the PGWP Last?",
        type: "steps",
        steps: [
          {
            num: "8M–2Y",
            title: "Program 8 months to 2 years",
            desc: "PGWP duration equals the length of your study program. E.g., a 1-year diploma = 1-year PGWP.",
          },
          {
            num: "2Y+",
            title: "Program 2 years or longer",
            desc: "PGWP is issued for 3 years — the maximum possible. A 2-year Masters = 3-year PGWP.",
          },
          {
            num: "Multiple",
            title: "Multiple Programs",
            desc: "If you completed multiple programs, the combined length may qualify you for a longer PGWP.",
          },
        ],
      },
      {
        heading: "PGWP to Permanent Residency — The Pathway",
        content:
          "The PGWP is the first step in Canada's most popular immigration pathway:\n\n1. Graduate → Apply for PGWP\n2. Get a job in your field → Build Canadian work experience\n3. After 1 year of skilled work experience → Apply to Express Entry (CEC stream)\n4. Receive Invitation to Apply (ITA) → Submit PR application\n5. Receive Permanent Residency\n\nThis entire journey from graduation to PR typically takes 2–3 years. Canada's Express Entry system gives significant bonus points for Canadian work experience and Canadian education — which is exactly what PGWP holders have.",
      },
      {
        heading: "Common PGWP Mistakes to Avoid",
        type: "warning",
        items: [
          "Waiting too long to apply — you must apply within 180 days of getting your final grades",
          "Letting your study permit expire before graduation",
          "Applying for the wrong work permit type",
          "Choosing a program at a non-DLI institution",
          "Not maintaining full-time student status throughout your studies",
        ],
      },
    ],
    tags: ["Canada", "PGWP", "Work Permit", "PR", "Express Entry"],
    relatedSlugs: [
      "how-to-get-uk-student-visa",
      "sop-writing-guide",
      "ielts-score-requirements",
    ],
  },

  "germany-free-education-guide": {
    title:
      "Study in Germany for Almost Free — How Pakistani Students Can Do It",
    category: "Study Guides",
    country: "Germany",
    flag: "🇩🇪",
    date: "January 10, 2025",
    readTime: "7 min read",
    author: "EdX Europe Team",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=85",
    color: "#ED4B00",
    excerpt:
      "Germany's public universities charge little to no tuition. Here's a complete guide on how to apply, what the blocked account is, and which universities to target.",
    intro:
      "Germany is one of the best-kept secrets in international education. While students in the UK pay £15,000–£35,000 per year in tuition, German public universities typically charge only a semester contribution of €150–€350 — and that often includes a public transport pass. For Pakistani students on a budget, Germany represents an extraordinary opportunity.",
    sections: [
      {
        heading: "Why Germany is Almost Free",
        content:
          "Germany made higher education tuition-free for all students — including internationals — back in 2014. Public universities in Germany are funded by the state government, not tuition fees. The only charge is a small 'semester contribution' (Semesterbeitrag) of roughly €150–€400 per semester, which covers administration, student union fees, and often a regional public transport pass.",
      },
      {
        heading: "Requirements for Pakistani Students",
        type: "checklist",
        items: [
          "University entrance qualification (A-levels, FSc, or equivalent recognized by Germany)",
          "German language proficiency for German-taught programs (B2/C1 level)",
          "English proficiency (IELTS 6.0–6.5) for English-taught programs",
          "APS Certificate (Academic Evaluation Centre) — mandatory for Pakistani students",
          "Blocked account showing €11,904 (for living costs)",
          "Health insurance (German student health insurance ~€110/month)",
          "Proof of accommodation or university dorm application",
        ],
      },
      {
        heading: "What is the APS Certificate?",
        content:
          "The APS (Akademische Prüfstelle) certificate is a mandatory requirement for Pakistani students applying to German universities. The APS office in Islamabad verifies your academic credentials and confirms they are genuine.\n\nThe process involves submitting your original academic documents, attending an interview, and paying a fee of approximately €150. Processing takes 4–8 weeks. Without the APS certificate, German universities will not process your application.",
      },
      {
        heading: "What is a Blocked Account?",
        content:
          "A blocked account (Sperrkonto) is a German bank account that holds a fixed amount of money (currently €11,904 per year) that can only be withdrawn in monthly installments (€992/month). It proves to the German embassy that you can support yourself financially without working.\n\nYou can open a blocked account through services like Expatrio, Coracle, or Fintiba — all available online from Pakistan. The process takes 1–2 weeks and costs around €30–€100 in service fees.",
      },
      {
        heading: "Top German Universities for Pakistani Students",
        type: "checklist",
        items: [
          "TU Munich — Engineering, Computer Science, Natural Sciences",
          "LMU Munich — Medicine, Law, Humanities, Business",
          "Heidelberg University — Sciences, Medicine, Humanities",
          "RWTH Aachen — Engineering, Technology",
          "Karlsruhe Institute of Technology (KIT) — Engineering, IT",
          "Humboldt University Berlin — Arts, Sciences, Social Sciences",
          "Free University Berlin — Social Sciences, Natural Sciences",
          "University of Hamburg — Law, Economics, Sciences",
        ],
      },
      {
        heading: "Tips to Improve Your Chances",
        content:
          "1. Start learning German early — even if you target English programs, basic German dramatically improves your quality of life and job prospects in Germany.\n\n2. Apply to multiple universities — German universities are competitive. Apply to 5–8 universities across different tiers.\n\n3. Get your APS certificate as early as possible — it takes 4–8 weeks and is the biggest bottleneck in the application timeline.\n\n4. Research DAAD scholarships — the German Academic Exchange Service (DAAD) offers generous scholarships specifically for Pakistani students.\n\n5. Apply for the winter semester (October start) as it has more spots than the summer semester.",
      },
    ],
    tags: ["Germany", "Free Education", "APS", "Blocked Account", "DAAD"],
    relatedSlugs: [
      "ielts-score-requirements",
      "sop-writing-guide",
      "how-to-get-uk-student-visa",
    ],
  },

  "ielts-score-requirements": {
    title: "IELTS Score Requirements for Top Universities in 2025",
    category: "IELTS & Tests",
    country: "All Countries",
    flag: "🌍",
    date: "December 20, 2024",
    readTime: "5 min read",
    author: "EdX IELTS Team",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85",
    color: "#2100B1",
    excerpt:
      "What IELTS score do you need for UK, Canada, Australia, and USA universities? We break down the requirements for 50+ top universities.",
    intro:
      "IELTS is the most widely accepted English language test for study abroad — accepted by over 11,000 universities and institutions across 140 countries. But not all programs require the same score. Here is a comprehensive breakdown of IELTS requirements across the most popular study destinations for Pakistani students.",
    sections: [
      {
        heading: "UK University IELTS Requirements",
        type: "checklist",
        items: [
          "University of Oxford / Cambridge — Overall 7.5, no band below 7.0",
          "Imperial College London — Overall 7.0, no band below 6.5",
          "UCL (University College London) — Overall 6.5–7.0 depending on program",
          "University of Manchester — Overall 6.5, no band below 5.5",
          "University of Edinburgh — Overall 6.5, Writing 6.0 minimum",
          "General UK undergraduate — Overall 6.0–6.5",
          "General UK postgraduate — Overall 6.5–7.0",
        ],
      },
      {
        heading: "Canada University IELTS Requirements",
        type: "checklist",
        items: [
          "University of Toronto — Overall 6.5, no band below 6.0",
          "UBC (University of British Columbia) — Overall 6.5, no band below 6.0",
          "McGill University — Overall 6.5, Writing 6.5",
          "University of Waterloo — Overall 6.5, no band below 6.0",
          "General Canada undergraduate — Overall 6.0–6.5",
          "General Canada postgraduate — Overall 6.5–7.0",
        ],
      },
      {
        heading: "Australia University IELTS Requirements",
        type: "checklist",
        items: [
          "University of Melbourne — Overall 6.5–7.0, no band below 6.0",
          "University of Sydney — Overall 6.5, no band below 6.0",
          "Monash University — Overall 6.5, no band below 6.0",
          "ANU (Australian National University) — Overall 6.5–7.0",
          "General Australia undergraduate — Overall 6.0–6.5",
          "Nursing/Teaching programs — Overall 7.0, each band 7.0",
        ],
      },
      {
        heading: "How to Improve Your IELTS Score",
        content:
          "If you are not yet hitting your target score, here are the most effective strategies:\n\n1. Reading and Listening — These are the easiest to improve with practice. Do timed past papers every day. Aim for band 7.0+ in both.\n\n2. Writing — Most students lose marks here. Practice Task 1 and Task 2 separately. Get your essays graded by a teacher. Focus on task achievement and coherence.\n\n3. Speaking — Practice with a native or fluent English speaker. Record yourself. Use natural linking phrases and varied vocabulary.\n\n4. Time yourself — All four skills are time-pressured. You must practice under exam conditions to perform well on test day.",
      },
      {
        heading: "IELTS vs PTE — Which Should You Take?",
        content:
          "PTE Academic is increasingly accepted as an alternative to IELTS at most universities. PTE has some advantages:\n\n• Computer-based — results in 48 hours vs 2–13 days for IELTS\n• Some students find PTE scoring more predictable\n• No examiner bias in Speaking (judged by AI)\n\nHowever, IELTS remains more widely recognized and is required at some institutions that do not accept PTE. Our recommendation: check your specific university's requirements first, then choose the test you are most comfortable with.",
      },
    ],
    tags: [
      "IELTS",
      "PTE",
      "English Test",
      "Band Score",
      "University Requirements",
    ],
    relatedSlugs: [
      "how-to-get-uk-student-visa",
      "sop-writing-guide",
      "canada-pgwp-guide",
    ],
  },

  "australia-student-visa-2025": {
    title: "Australia Student Visa (Subclass 500) — Step by Step Guide 2025",
    category: "Visa Guides",
    country: "Australia",
    flag: "🇦🇺",
    date: "December 5, 2024",
    readTime: "9 min read",
    author: "EdX Visa Team",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=85",
    color: "#ED4B00",
    excerpt:
      "The complete guide to applying for the Australian student visa — GTE statement, health insurance, financial requirements, and processing times.",
    intro:
      "The Australian Student visa (Subclass 500) replaced the old student visa system in 2016 and is now the only visa you need to study in Australia at any level, for any duration. It is a straightforward visa to apply for — if you know what you are doing. The most important element is the Genuine Temporary Entrant (GTE) statement, which trips up many applicants.",
    sections: [
      {
        heading: "What is the GTE Requirement?",
        content:
          "The Genuine Temporary Entrant (GTE) requirement is Australia's way of ensuring that student visa applicants genuinely intend to study and return home after their course. You must demonstrate strong ties to Pakistan and convincing reasons why this specific course at this specific university in Australia will benefit your future career back home — or wherever you intend to settle.\n\nA weak GTE is the number one reason Australian student visas are refused for Pakistani applicants.",
      },
      {
        heading: "Documents Required",
        type: "checklist",
        items: [
          "Valid passport",
          "Confirmation of Enrolment (CoE) from your Australian institution",
          "Genuine Temporary Entrant (GTE) statement",
          "IELTS / PTE / TOEFL results (as required by your institution)",
          "Proof of financial capacity — bank statements, scholarship letter, or sponsor letter",
          "Overseas Student Health Cover (OSHC) — mandatory for the full duration of your course",
          "Academic transcripts and certificates",
          "English translations of all non-English documents",
          "Passport-sized photographs meeting Australian specifications",
        ],
      },
      {
        heading: "Financial Requirements",
        type: "steps",
        steps: [
          {
            num: "01",
            title: "Tuition Fees",
            desc: "Evidence that you can pay your first year tuition (or proof it has already been paid to the institution).",
          },
          {
            num: "02",
            title: "Living Costs",
            desc: "AUD 21,041 per year for the main student, AUD 7,362 for a spouse, AUD 3,152 per child.",
          },
          {
            num: "03",
            title: "Travel Costs",
            desc: "Evidence of funds to cover return airfare — approximately AUD 2,000–4,000.",
          },
          {
            num: "04",
            title: "OSHC Insurance",
            desc: "Overseas Student Health Cover must be purchased before visa application. Cost varies by duration — approximately AUD 500–700/year for a single student.",
          },
        ],
      },
      {
        heading: "How to Write a Strong GTE Statement",
        content:
          "Your GTE statement should address the following points clearly:\n\n1. Why you chose Australia specifically (not just 'it has good universities')\n2. Why this specific university and course (rankings, facilities, specific professors, course structure)\n3. How this course connects to your career back home or future plans\n4. Your ties to Pakistan — family, property, job prospects, career goals in Pakistan\n5. Your immigration history — any previous visa refusals must be disclosed honestly\n\nBe specific. Vague statements like 'Australia has world-class education' are red flags. Officers want to see that you have researched your course and have a clear plan.",
      },
      {
        heading: "Processing Times and Fees",
        content:
          "The current application fee for an Australian Student visa is AUD 710 (approximately PKR 130,000). Processing times vary significantly:\n\n• 75% of applications: processed within 29 days\n• 90% of applications: processed within 42 days\n• Some applications can take 3–4 months if additional documents are requested\n\nApply as early as possible — ideally 3–4 months before your course start date.",
      },
    ],
    tags: ["Australia Visa", "Subclass 500", "GTE", "OSHC", "Student Visa"],
    relatedSlugs: [
      "how-to-get-uk-student-visa",
      "ielts-score-requirements",
      "sop-writing-guide",
    ],
  },

  "turkish-government-scholarship": {
    title:
      "Turkish Government Scholarship 2025 — Full Guide for Pakistani Students",
    category: "Scholarships",
    country: "Turkey",
    flag: "🇹🇷",
    date: "November 18, 2024",
    readTime: "7 min read",
    author: "EdX Scholarships Team",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=85",
    color: "#2100B1",
    excerpt:
      "The Türkiye Burslari scholarship covers full tuition, accommodation, and a monthly stipend. Here's how to apply and what to expect.",
    intro:
      "The Türkiye Burslari (Turkish Government Scholarship) is one of the most generous international scholarship programs in the world. It covers full tuition, free university accommodation, a monthly stipend, return airfare, and even a one-year Turkish language course. For Pakistani students, this scholarship offers a chance to study in a top Turkish university completely free of charge.",
    sections: [
      {
        heading: "What Does the Scholarship Cover?",
        type: "checklist",
        items: [
          "Full tuition fees (100% covered)",
          "Free university accommodation (on-campus dorm)",
          "Monthly stipend: 700 TL for undergrad / 950 TL for Masters / 1,400 TL for PhD",
          "Health insurance (full coverage during your studies)",
          "Return airfare once a year",
          "One year of free Turkish language training before your program begins",
        ],
      },
      {
        heading: "Eligibility Requirements",
        type: "checklist",
        items: [
          "Pakistani nationality (not currently studying in Turkey)",
          "Age: Under 21 for undergraduate / Under 30 for Masters / Under 35 for PhD",
          "Minimum GPA: 70% for undergraduate / 75% for Masters and PhD",
          "IELTS / TOEFL for English-medium programs (not always required)",
          "Not enrolled in a Turkish university at time of application",
          "Physically and mentally fit to study",
        ],
      },
      {
        heading: "How to Apply — Step by Step",
        type: "steps",
        steps: [
          {
            num: "01",
            title: "Online Application",
            desc: "Apply through the official Türkiye Burslari portal at turkiyeburslari.gov.tr. The application window is typically January–February each year.",
          },
          {
            num: "02",
            title: "Upload Documents",
            desc: "Upload your academic transcripts, passport, personal statement, reference letters, and any supporting documents.",
          },
          {
            num: "03",
            title: "Shortlisting",
            desc: "Applications are reviewed and shortlisted. Shortlisted candidates are invited for an interview (in-person or online).",
          },
          {
            num: "04",
            title: "Interview",
            desc: "The interview assesses your motivation, academic potential, and reasons for choosing Turkey. It is conducted in English or Turkish.",
          },
          {
            num: "05",
            title: "Results",
            desc: "Results are announced between May and July. Successful candidates receive an official scholarship letter.",
          },
          {
            num: "06",
            title: "Placement",
            desc: "You will be placed in a Turkish university based on your preferences and availability. Turkish language training begins in September.",
          },
        ],
      },
      {
        heading: "Tips to Win the Scholarship",
        content:
          "1. Start your application early — the portal opens in January and closes in February. Do not wait until the last week.\n\n2. Write a compelling personal statement — explain specifically why Turkey, why this field, and what you plan to do after graduation.\n\n3. Choose your university preferences carefully — list at least 10–12 programs across different universities for maximum placement chances.\n\n4. Prepare for the interview thoroughly — practice explaining your academic background, career goals, and interest in Turkey in clear English.\n\n5. Strong academic records matter — the scholarship is competitive. A GPA above 80% significantly improves your chances.",
      },
    ],
    tags: [
      "Turkey",
      "Türkiye Burslari",
      "Scholarship",
      "Free Education",
      "Government Scholarship",
    ],
    relatedSlugs: [
      "germany-free-education-guide",
      "sop-writing-guide",
      "ielts-score-requirements",
    ],
  },

  "sop-writing-guide": {
    title: "How to Write a Statement of Purpose That Gets You Admitted",
    category: "Applications",
    country: "All Countries",
    flag: "🌍",
    date: "November 2, 2024",
    readTime: "10 min read",
    author: "EdX Admissions Team",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85",
    color: "#ED4B00",
    excerpt:
      "Your SOP can make or break your university application. Learn the exact structure, common mistakes to avoid, and what admissions committees actually look for.",
    intro:
      "The Statement of Purpose (SOP) — sometimes called a Personal Statement or Letter of Motivation — is often the most important part of your university application. It is your chance to speak directly to the admissions committee, tell your story, and explain why you are the right candidate for their program. A mediocre SOP can sink an otherwise strong application. An outstanding SOP can get you admitted even with slightly weaker grades.",
    sections: [
      {
        heading: "The 5-Paragraph SOP Structure That Works",
        type: "steps",
        steps: [
          {
            num: "01",
            title: "Hook + Academic Background",
            desc: "Start with a compelling opening — a specific moment, challenge, or realization that drove your interest in this field. Briefly introduce your academic background and how it connects to the program.",
          },
          {
            num: "02",
            title: "Academic Achievements & Research",
            desc: "Highlight your most relevant academic achievements, projects, thesis, or research. Be specific — name the project, the methodology, the outcome. Numbers and results are powerful.",
          },
          {
            num: "03",
            title: "Professional / Work Experience",
            desc: "If you have work or internship experience relevant to the program, discuss it here. Explain what you learned and how it shaped your goals. If you have no experience, discuss relevant extracurriculars or volunteer work.",
          },
          {
            num: "04",
            title: "Why This Program / University",
            desc: "This is where most students fail. Be specific. Name specific faculty members whose research interests you. Mention specific courses, labs, or unique features of the program. Show that you have done your research.",
          },
          {
            num: "05",
            title: "Future Goals",
            desc: "Explain what you plan to do after graduation. Connect the program to your career goal. Be realistic and specific — vague goals like 'contribute to society' are red flags.",
          },
        ],
      },
      {
        heading: "What Admissions Committees Actually Look For",
        type: "checklist",
        items: [
          "Clarity of purpose — do you know why you want this degree and what you will do with it?",
          "Evidence of academic ability — specific achievements, not just grades",
          "Fit with the program — have you researched the program or are you sending a generic SOP?",
          "Intellectual curiosity — do you show genuine passion for the subject?",
          "Writing quality — is it clear, professional, and error-free?",
          "Realistic and grounded goals — not 'I want to change the world' vagueness",
        ],
      },
      {
        heading: "Common SOP Mistakes to Avoid",
        type: "warning",
        items: [
          "Starting with 'Since childhood I have been fascinated by...' — overused and weak",
          "Repeating your CV — the SOP should add information, not duplicate it",
          "Being too general — 'Harvard is a world-class university' tells them nothing",
          "Exceeding the word limit — most programs specify 500–1000 words. Respect it.",
          "Spelling and grammar errors — proofread multiple times, use Grammarly",
          "Using ChatGPT without editing — AI-written SOPs are easy to detect and universally rejected",
          "Not customizing for each university — a generic SOP is immediately obvious",
        ],
      },
      {
        heading: "Final Checklist Before Submitting",
        type: "checklist",
        items: [
          "Does it answer: Why this field? Why this program? Why this university? Why now?",
          "Is the opening paragraph compelling enough to keep reading?",
          "Have you named specific faculty, courses, or research at this university?",
          "Are your goals clear and connected to this specific program?",
          "Is it within the required word count?",
          "Has someone else (counselor, teacher, native English speaker) reviewed it?",
          "Is it completely free of spelling and grammatical errors?",
        ],
      },
    ],
    tags: [
      "SOP",
      "Personal Statement",
      "Application",
      "University Admission",
      "Writing Tips",
    ],
    relatedSlugs: [
      "ielts-score-requirements",
      "how-to-get-uk-student-visa",
      "turkish-government-scholarship",
    ],
  },

  "mbbs-in-malaysia": {
    title: "MBBS in Malaysia — Cost, Universities, and PMC Recognition",
    category: "Study Guides",
    country: "Malaysia",
    flag: "🇲🇾",
    date: "October 15, 2024",
    readTime: "8 min read",
    author: "EdX Malaysia Team",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=85",
    color: "#2100B1",
    excerpt:
      "Malaysia is the top destination for Pakistani MBBS students. Here's everything about costs, top medical universities, PMC recognition, and how to apply.",
    intro:
      "Malaysia has become the number one destination for Pakistani students seeking to study MBBS abroad — and for good reason. Malaysian medical universities offer internationally accredited programs taught entirely in English, at a fraction of the cost of equivalent programs in the UK or Australia. Most importantly, many Malaysian medical universities are recognized by the Pakistan Medical Commission (PMC), allowing graduates to practice medicine in Pakistan.",
    sections: [
      {
        heading: "Why Malaysian MBBS for Pakistani Students?",
        type: "checklist",
        items: [
          "PMC-recognized universities — you can return and practice in Pakistan",
          "100% English medium instruction — no language barrier",
          "Total cost: PKR 40–70 lakh (vs PKR 200+ lakh in UK/Australia)",
          "5-year MBBS program with clinical training in affiliated hospitals",
          "Muslim-friendly environment with halal food widely available",
          "Culturally similar to Pakistan — easier adjustment",
          "MQA (Malaysian Qualifications Agency) accredited degrees",
          "Strong clinical exposure in well-equipped teaching hospitals",
        ],
      },
      {
        heading: "Top PMC-Recognized Malaysian Medical Universities",
        type: "checklist",
        items: [
          "International Medical University (IMU) — Kuala Lumpur",
          "UCSI University — Kuala Lumpur",
          "Manipal University College Malaysia — Melaka",
          "Management & Science University (MSU) — Shah Alam",
          "Asian Institute of Medicine, Science and Technology (AIMST) — Kedah",
          "Quest International University — Perak",
          "Lincoln University College — Petaling Jaya",
          "MAHSA University — Kuala Lumpur",
        ],
      },
      {
        heading: "Cost Breakdown for MBBS in Malaysia",
        type: "steps",
        steps: [
          {
            num: "💰",
            title: "Tuition Fees",
            desc: "RM 250,000 – 450,000 total for 5 years (approx. PKR 17–30 lakh per year depending on exchange rate and university).",
          },
          {
            num: "🏠",
            title: "Accommodation",
            desc: "RM 500–1,200/month for student hostel or private accommodation (approximately PKR 35,000–85,000/month).",
          },
          {
            num: "🍽️",
            title: "Living Expenses",
            desc: "RM 800–1,500/month for food, transport, and miscellaneous. Malaysia is one of the most affordable countries in Asia.",
          },
          {
            num: "📋",
            title: "Application Costs",
            desc: "University application fees, student visa, and initial setup costs — approximately RM 2,000–5,000 one-time.",
          },
        ],
      },
      {
        heading: "Entry Requirements",
        type: "checklist",
        items: [
          "FSc Pre-Medical (Biology, Chemistry, Physics) with minimum 60–70% marks",
          "MDCAT score (some universities require it, others do not)",
          "IELTS 5.5–6.0 or equivalent (some universities waive this for FSc students)",
          "Age: 17–25 years at time of admission",
          "Completed 12 years of education",
          "Medical fitness certificate",
        ],
      },
      {
        heading: "How to Apply — Process and Timeline",
        content:
          "The application process for Malaysian MBBS universities is relatively straightforward:\n\n1. Choose 2–3 universities and check their specific requirements\n2. Submit your application with FSc transcripts and other documents\n3. Receive conditional or unconditional offer letter (usually within 2–4 weeks)\n4. Pay the acceptance fee (RM 5,000–15,000) to secure your seat\n5. Apply for Malaysian Student Pass (student visa) — handled by the university\n6. Arrive in Malaysia and register for the foundation or direct MBBS program\n\nIntakes are typically in February/March and September/October. Apply 3–4 months before your preferred intake.",
      },
    ],
    tags: ["MBBS", "Malaysia", "Medical", "PMC", "Pakistani Students"],
    relatedSlugs: [
      "ielts-score-requirements",
      "sop-writing-guide",
      "turkish-government-scholarship",
    ],
  },
};

const allPosts = {
  "how-to-get-uk-student-visa": {
    title: "How to Get a UK Student Visa in 2025",
    image:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400&q=75",
    category: "Visa Guides",
    color: "#ED4B00",
  },
  "canada-pgwp-guide": {
    title: "Canada Post-Graduate Work Permit Guide",
    image:
      "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=400&q=75",
    category: "Work & PR",
    color: "#2100B1",
  },
  "germany-free-education-guide": {
    title: "Study in Germany for Almost Free",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=75",
    category: "Study Guides",
    color: "#ED4B00",
  },
  "ielts-score-requirements": {
    title: "IELTS Score Requirements 2025",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=75",
    category: "IELTS & Tests",
    color: "#2100B1",
  },
  "australia-student-visa-2025": {
    title: "Australia Student Visa Guide 2025",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&q=75",
    category: "Visa Guides",
    color: "#ED4B00",
  },
  "turkish-government-scholarship": {
    title: "Turkish Government Scholarship 2025",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=75",
    category: "Scholarships",
    color: "#2100B1",
  },
  "sop-writing-guide": {
    title: "How to Write a Winning SOP",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=75",
    category: "Applications",
    color: "#ED4B00",
  },
  "mbbs-in-malaysia": {
    title: "MBBS in Malaysia — Complete Guide",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=75",
    category: "Study Guides",
    color: "#2100B1",
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | EdX Consultants Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const related = post.relatedSlugs
    .map((s) => ({ slug: s, ...allPosts[s] }))
    .filter(Boolean);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div
        style={{ position: "relative", minHeight: "480px", overflow: "hidden" }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,13,26,0.55) 0%, rgba(13,13,26,0.92) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "860px",
            margin: "0 auto",
            padding: "clamp(120px, 15vw, 180px) 24px 60px",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
            <Link
              href="/blog"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>›</span>
            <span
              style={{ fontSize: "13px", color: post.color, fontWeight: 600 }}
            >
              {post.category}
            </span>
          </div>

          {/* Category + Country badges */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: post.color,
                color: "white",
                fontSize: "11px",
                fontWeight: 700,
                padding: "5px 14px",
                borderRadius: "999px",
                letterSpacing: "0.05em",
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                color: "white",
                fontSize: "11px",
                fontWeight: 600,
                padding: "5px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {post.flag} {post.country}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, #2100B1, #ED4B00)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <User size={15} color="white" />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                }}
              >
                {post.author}
              </span>
            </div>
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Clock size={13} /> {post.readTime}
            </span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
              {post.date}
            </span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ background: "#f8f9ff", padding: "60px 24px 80px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Intro */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "36px",
              border: `2px solid ${post.color}22`,
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              marginBottom: "28px",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                color: "#444",
                lineHeight: 1.9,
                margin: 0,
                fontStyle: "italic",
                borderLeft: `4px solid ${post.color}`,
                paddingLeft: "20px",
              }}
            >
              {post.intro}
            </p>
          </div>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                  paddingBottom: "12px",
                  borderBottom: `2px solid ${post.color}18`,
                }}
              >
                {section.heading}
              </h2>

              {/* Plain text */}
              {!section.type && section.content && (
                <div>
                  {section.content.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        fontSize: "15px",
                        color: "#555",
                        lineHeight: 1.85,
                        marginBottom: "14px",
                      }}
                    >
                      {para.split("\n").map((line, li) => (
                        <span key={li}>
                          {line}
                          {li < para.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              )}

              {/* Steps */}
              {section.type === "steps" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {section.steps.map((step, si) => (
                    <div
                      key={si}
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: post.color,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        {step.num}
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
                            color: "#666",
                            lineHeight: 1.7,
                          }}
                        >
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Checklist */}
              {section.type === "checklist" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {section.items.map((item, ci) => (
                    <div
                      key={ci}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <CheckCircle
                        size={18}
                        color={post.color}
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          color: "#444",
                          lineHeight: 1.65,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Warning list */}
              {section.type === "warning" && (
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                      padding: "10px 16px",
                      background: "rgba(239,68,68,0.07)",
                      borderRadius: "8px",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    <AlertCircle size={16} color="#ef4444" />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#ef4444",
                        fontWeight: 700,
                      }}
                    >
                      Watch out for these common mistakes
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {section.items.map((item, wi) => (
                      <div
                        key={wi}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#ef4444",
                            flexShrink: 0,
                            marginTop: "8px",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "15px",
                            color: "#555",
                            lineHeight: 1.65,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Tags */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "32px",
              marginBottom: "48px",
            }}
          >
            <Tag size={15} color="#888" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "5px 14px",
                  background: "white",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#555",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div
            style={{
              background: `linear-gradient(135deg, #2100B1, #ED4B00)`,
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "white",
                marginBottom: "10px",
              }}
            >
              Need Personalized Guidance?
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "24px",
                lineHeight: 1.7,
              }}
            >
              Our expert counselors can guide you through every step of your
              study abroad journey — free of charge.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                background: "white",
                color: "#2100B1",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              }}
            >
              Book Free Consultation <ArrowRight size={15} />
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#0d0d1a",
                  marginBottom: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                Related <span style={{ color: post.color }}>Articles</span>
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "16px",
                }}
              >
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                    className="rel-card"
                  >
                    <div
                      style={{
                        background: "white",
                        borderRadius: "14px",
                        overflow: "hidden",
                        border: "1px solid rgba(0,0,0,0.07)",
                        transition: "all 0.25s",
                      }}
                    >
                      <div style={{ height: "130px", overflow: "hidden" }}>
                        <img
                          src={rel.image}
                          alt={rel.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s",
                          }}
                          className="rel-img"
                        />
                      </div>
                      <div style={{ padding: "16px" }}>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 700,
                            color: rel.color,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {rel.category}
                        </span>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#0d0d1a",
                            marginTop: "6px",
                            lineHeight: 1.4,
                          }}
                        >
                          {rel.title}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            color: rel.color,
                            fontSize: "12px",
                            fontWeight: 700,
                            marginTop: "10px",
                          }}
                        >
                          Read More <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style>{`
        .rel-card:hover > div { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.1) !important; }
        .rel-card:hover .rel-img { transform: scale(1.06); }
      `}</style>
    </main>
  );
}
