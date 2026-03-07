import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | EdX Consultants",
  description:
    "Terms of Service of EdX Consultants Pvt. Ltd. — Please read these terms carefully before using our services.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #2d0a00 60%, #0d0d1a 100%)",
          paddingTop: "160px",
          paddingBottom: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(237,75,0,0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(33,0,177,0.1)",
            filter: "blur(70px)",
          }}
        />

        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "20px",
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
            <span
              style={{ fontSize: "13px", color: "#ED4B00", fontWeight: 600 }}
            >
              Terms of Service
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
                fontSize: "13px",
                fontWeight: 600,
                color: "#ED4B00",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Legal
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
            }}
          >
            Last updated: January 1, 2025 &nbsp;·&nbsp; Effective: January 1,
            2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: "#f8f9ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Intro card */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "32px",
              border: "1px solid rgba(237,75,0,0.12)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              marginBottom: "40px",
            }}
          >
            <p style={bodyText}>
              Welcome to EdX Consultants Pvt. Ltd. ("EdX Consultants", "we",
              "our", or "us"). These Terms of Service ("Terms") govern your
              access to and use of our website at{" "}
              <strong>edxconsultants.com</strong> and all services provided by
              EdX Consultants. By accessing our website or engaging our
              services, you agree to be bound by these Terms. If you do not
              agree, please do not use our services.
            </p>
          </div>

          <Section num="1" title="About EdX Consultants" color="#ED4B00">
            <p style={bodyText}>
              EdX Consultants Pvt. Ltd. is a registered education consultancy
              based in Pakistan. We provide study abroad advisory services
              including university selection, application assistance, visa
              guidance, scholarship support, IELTS preparation, and
              pre/post-departure services. We act as an intermediary and advisor
              — we do not make admission or visa decisions on behalf of any
              university or government authority.
            </p>
          </Section>

          <Section num="2" title="Acceptance of Terms" color="#ED4B00">
            <p style={bodyText}>
              By using our website or engaging our consultancy services, you
              confirm that:
            </p>
            <ul style={listStyle}>
              <li>
                You are at least 16 years of age, or have obtained
                parental/guardian consent
              </li>
              <li>
                You have the legal capacity to enter into a binding agreement
              </li>
              <li>
                You will provide accurate and truthful information to us at all
                times
              </li>
              <li>
                You have read, understood, and agree to be bound by these Terms
                and our Privacy Policy
              </li>
            </ul>
          </Section>

          <Section num="3" title="Our Services" color="#ED4B00">
            <p style={bodyText}>
              EdX Consultants offers the following services, subject to
              availability and eligibility:
            </p>
            <ul style={listStyle}>
              <li>Career counseling and academic profile assessment</li>
              <li>University and course selection guidance</li>
              <li>Admission application preparation and submission support</li>
              <li>Scholarship identification and application assistance</li>
              <li>Student visa documentation guidance and file preparation</li>
              <li>IELTS and PTE preparation courses</li>
              <li>Pre-departure orientation and accommodation support</li>
              <li>Post-arrival assistance and ongoing student support</li>
            </ul>
            <p style={bodyText}>
              We reserve the right to modify, suspend, or discontinue any
              service at any time without prior notice.
            </p>
          </Section>

          <Section
            num="4"
            title="No Guarantee of Admission or Visa"
            color="#ED4B00"
          >
            <p style={bodyText}>
              <strong>Important Disclaimer:</strong> EdX Consultants provides
              guidance and preparation assistance only. We do not guarantee
              admission to any university, college, or institution, nor do we
              guarantee the approval of any visa application.
            </p>
            <p style={bodyText}>
              Admission and visa decisions are made exclusively by the
              respective universities and government immigration authorities.
              Our role is to present the strongest possible application on your
              behalf. EdX Consultants shall not be held liable for any rejection
              of a university application or visa by any institution or
              government authority.
            </p>
          </Section>

          <Section num="5" title="Client Responsibilities" color="#ED4B00">
            <p style={bodyText}>
              As a client of EdX Consultants, you agree to:
            </p>
            <ul style={listStyle}>
              <li>
                Provide complete, accurate, and up-to-date information at all
                times
              </li>
              <li>Submit all required documents within agreed timelines</li>
              <li>
                Inform us immediately of any changes to your personal
                circumstances, academic status, or travel documents
              </li>
              <li>
                Attend all scheduled meetings and consultations punctually
              </li>
              <li>
                Not misrepresent your qualifications, financial situation, or
                personal history in any application
              </li>
              <li>Pay all agreed fees on time as per your service agreement</li>
            </ul>
            <p style={bodyText}>
              Providing false, misleading, or fraudulent information is grounds
              for immediate termination of our services without refund, and may
              have serious legal consequences.
            </p>
          </Section>

          <Section num="6" title="Fees and Payment" color="#ED4B00">
            <SubHeading>6.1 Free Services</SubHeading>
            <p style={bodyText}>
              Initial consultation, career counseling, university selection, and
              basic admission guidance are provided free of charge as part of
              our standard service.
            </p>
            <SubHeading>6.2 Paid Services</SubHeading>
            <p style={bodyText}>
              Certain services such as IELTS preparation, premium application
              packages, and specialized visa assistance may carry a fee. All
              fees will be clearly communicated to you in writing before any
              payment is required.
            </p>
            <SubHeading>6.3 Refund Policy</SubHeading>
            <p style={bodyText}>
              Refunds are handled on a case-by-case basis and subject to the
              specific service agreement signed with your consultant. Fees paid
              for completed work (e.g., SOP writing, visa file preparation) are
              generally non-refundable. Please review your service agreement
              carefully before making payment.
            </p>
          </Section>

          <Section num="7" title="Confidentiality" color="#ED4B00">
            <p style={bodyText}>
              Both parties agree to maintain confidentiality of all information
              shared during the consultancy relationship. We will not disclose
              your personal, academic, or financial information to any third
              party except as necessary to process your applications (with your
              consent) or as required by law.
            </p>
            <p style={bodyText}>
              Similarly, you agree not to share any proprietary strategies,
              templates, or processes provided by EdX Consultants with third
              parties.
            </p>
          </Section>

          <Section num="8" title="Intellectual Property" color="#ED4B00">
            <p style={bodyText}>
              All content on the EdX Consultants website, including text,
              graphics, logos, icons, and images, is the property of EdX
              Consultants Pvt. Ltd. and is protected by applicable intellectual
              property laws.
            </p>
            <p style={bodyText}>
              You may not reproduce, distribute, modify, or create derivative
              works of any content without prior written permission from EdX
              Consultants. Unauthorized use of our content may result in legal
              action.
            </p>
          </Section>

          <Section
            num="9"
            title="Third-Party Services and Links"
            color="#ED4B00"
          >
            <p style={bodyText}>
              Our website may contain links to third-party websites including
              university portals, embassy websites, and test registration
              platforms. These links are provided for your convenience only. EdX
              Consultants does not endorse or take responsibility for the
              content, policies, or practices of any third-party website.
            </p>
          </Section>

          <Section num="10" title="Limitation of Liability" color="#ED4B00">
            <p style={bodyText}>
              To the maximum extent permitted by law, EdX Consultants shall not
              be liable for:
            </p>
            <ul style={listStyle}>
              <li>Any rejection of a university application or visa</li>
              <li>Any delay in processing by universities or embassies</li>
              <li>
                Any financial losses arising from changes in university fees,
                visa regulations, or scholarship availability
              </li>
              <li>
                Any indirect, incidental, or consequential damages arising from
                the use of our services
              </li>
              <li>Any loss of data or information</li>
            </ul>
            <p style={bodyText}>
              Our total liability in any matter arising from these Terms or our
              services shall not exceed the total fees paid by you to EdX
              Consultants in the six months preceding the claim.
            </p>
          </Section>

          <Section num="11" title="Termination" color="#ED4B00">
            <p style={bodyText}>
              Either party may terminate the consultancy relationship by
              providing written notice. EdX Consultants reserves the right to
              immediately terminate services if:
            </p>
            <ul style={listStyle}>
              <li>You provide false or misleading information</li>
              <li>You fail to make required payments</li>
              <li>
                You behave in an abusive or inappropriate manner toward our
                staff
              </li>
              <li>
                You engage in activities that could damage the reputation of EdX
                Consultants
              </li>
            </ul>
            <p style={bodyText}>
              Upon termination, any outstanding fees for completed work remain
              due and payable.
            </p>
          </Section>

          <Section num="12" title="Governing Law" color="#ED4B00">
            <p style={bodyText}>
              These Terms shall be governed by and construed in accordance with
              the laws of the Islamic Republic of Pakistan. Any disputes arising
              under or in connection with these Terms shall be subject to the
              exclusive jurisdiction of the courts of Lahore, Pakistan.
            </p>
          </Section>

          <Section num="13" title="Changes to These Terms" color="#ED4B00">
            <p style={bodyText}>
              We reserve the right to update these Terms at any time. Updated
              terms will be posted on this page with a revised "Last Updated"
              date. Your continued use of our services after any changes
              constitutes your acceptance of the new Terms. We encourage you to
              review these Terms periodically.
            </p>
          </Section>

          <Section num="14" title="Contact Us" color="#ED4B00">
            <p style={bodyText}>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div
              style={{
                background: "rgba(237,75,0,0.05)",
                border: "1px solid rgba(237,75,0,0.15)",
                borderRadius: "12px",
                padding: "20px 24px",
                marginTop: "16px",
              }}
            >
              <p style={{ ...bodyText, marginBottom: "6px" }}>
                <strong>EdX Consultants Pvt. Ltd.</strong>
              </p>
              <p style={{ ...bodyText, marginBottom: "6px" }}>
                Main Boulevard, Gulberg III, Lahore, Pakistan
              </p>
              <p style={{ ...bodyText, marginBottom: "6px" }}>
                📧{" "}
                <a
                  href="mailto:legal@edxconsultants.com"
                  style={{ color: "#ED4B00", fontWeight: 600 }}
                >
                  legal@edxconsultants.com
                </a>
              </p>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                📞{" "}
                <a
                  href="tel:+923000000000"
                  style={{ color: "#ED4B00", fontWeight: 600 }}
                >
                  +92 300 0000000
                </a>
              </p>
            </div>
          </Section>

          {/* Back link */}
          <div
            style={{
              textAlign: "center",
              marginTop: "48px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{ fontSize: "14px", color: "#888", marginBottom: "16px" }}
            >
              Also read our
            </p>
            <Link
              href="/privacy-policy"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 24px",
                background: "#ED4B00",
                color: "white",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Section({ num, title, color = "#2100B1", children }) {
  return (
    <div
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
          fontSize: "20px",
          fontWeight: 800,
          color: "#0d0d1a",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: `linear-gradient(135deg, ${color}, ${color === "#ED4B00" ? "#ff9a00" : "#ED4B00"})`,
            color: "white",
            fontSize: "12px",
            fontWeight: 800,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3
      style={{
        fontSize: "15px",
        fontWeight: 700,
        color: "#ED4B00",
        margin: "16px 0 8px",
      }}
    >
      {children}
    </h3>
  );
}

const bodyText = {
  fontSize: "15px",
  color: "#555",
  lineHeight: 1.85,
  margin: "0 0 12px",
};

const listStyle = {
  paddingLeft: "20px",
  margin: "8px 0 12px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: "15px",
  color: "#555",
  lineHeight: 1.7,
};
