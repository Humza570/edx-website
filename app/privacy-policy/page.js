import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EdX Consultants",
  description:
    "Privacy Policy of EdX Consultants Pvt. Ltd. — How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0050 60%, #0d0d1a 100%)",
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
              Privacy Policy
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
              background: "rgba(33,0,177,0.15)",
              border: "1px solid rgba(33,0,177,0.3)",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#a78bfa",
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
            Privacy Policy
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
              border: "1px solid rgba(33,0,177,0.1)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              marginBottom: "40px",
            }}
          >
            <p style={bodyText}>
              EdX Consultants Pvt. Ltd. ("EdX Consultants", "we", "our", or
              "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website{" "}
              <strong>edxconsultants.com</strong> or use our services. Please
              read this policy carefully. If you disagree with its terms, please
              discontinue use of our website and services.
            </p>
          </div>

          <Section num="1" title="Information We Collect">
            <p style={bodyText}>
              We may collect the following types of information from you:
            </p>
            <SubHeading>1.1 Personal Information You Provide</SubHeading>
            <ul style={listStyle}>
              <li>Full name, email address, phone number</li>
              <li>Academic qualifications and transcripts</li>
              <li>
                Passport and identification details (where required for visa
                applications)
              </li>
              <li>
                Financial information required for visa or scholarship
                applications
              </li>
              <li>Country of interest and intended study program</li>
              <li>
                Any other information you voluntarily share during consultations
                or via our contact forms
              </li>
            </ul>
            <SubHeading>1.2 Automatically Collected Information</SubHeading>
            <ul style={listStyle}>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring URLs and device information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </Section>

          <Section num="2" title="How We Use Your Information">
            <p style={bodyText}>
              We use the information we collect for the following purposes:
            </p>
            <ul style={listStyle}>
              <li>
                To provide and manage our consultancy services, including
                university applications, visa assistance, and scholarship
                guidance
              </li>
              <li>
                To communicate with you regarding your application status,
                inquiries, or appointments
              </li>
              <li>
                To send you updates, newsletters, and promotional materials (you
                may opt out at any time)
              </li>
              <li>
                To process and submit applications to universities and embassies
                on your behalf
              </li>
              <li>
                To comply with legal obligations and regulatory requirements
              </li>
              <li>To improve our website, services, and customer experience</li>
              <li>
                To analyze usage patterns and measure the effectiveness of our
                marketing efforts
              </li>
            </ul>
          </Section>

          <Section num="3" title="Sharing Your Information">
            <p style={bodyText}>
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following limited
              circumstances:
            </p>
            <SubHeading>3.1 With Service Partners</SubHeading>
            <p style={bodyText}>
              We share relevant personal and academic information with
              universities, colleges, and embassies strictly for the purpose of
              processing your applications. This is done only with your explicit
              consent.
            </p>
            <SubHeading>3.2 With Third-Party Service Providers</SubHeading>
            <p style={bodyText}>
              We may share information with trusted third-party vendors who
              assist us in operating our website and business (e.g., email
              marketing platforms, CRM tools). These parties are contractually
              obligated to keep your information confidential.
            </p>
            <SubHeading>3.3 Legal Requirements</SubHeading>
            <p style={bodyText}>
              We may disclose your information if required by law, court order,
              or government regulation, or if we believe disclosure is necessary
              to protect our rights or the safety of others.
            </p>
          </Section>

          <Section num="4" title="Cookies and Tracking Technologies">
            <p style={bodyText}>
              Our website uses cookies — small text files stored on your device
              — to enhance your browsing experience. Cookies help us:
            </p>
            <ul style={listStyle}>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Deliver targeted content and relevant information</li>
            </ul>
            <p style={bodyText}>
              You may disable cookies through your browser settings. However,
              doing so may limit some functionality of our website. By
              continuing to use our site, you consent to our use of cookies.
            </p>
          </Section>

          <Section num="5" title="Data Security">
            <p style={bodyText}>
              We implement appropriate technical and organizational security
              measures to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. These include:
            </p>
            <ul style={listStyle}>
              <li>SSL encryption on all data transmission</li>
              <li>
                Restricted access to personal data — only authorized staff can
                access your information
              </li>
              <li>Secure storage of physical and digital records</li>
              <li>Regular security audits and staff training</li>
            </ul>
            <p style={bodyText}>
              However, no method of transmission over the internet or method of
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your information, we
              cannot guarantee absolute security.
            </p>
          </Section>

          <Section num="6" title="Data Retention">
            <p style={bodyText}>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this policy, or as required by
              law. Specifically:
            </p>
            <ul style={listStyle}>
              <li>
                Active client records are retained for the duration of your
                engagement with us
              </li>
              <li>
                Application documents are retained for up to 5 years after
                completion
              </li>
              <li>
                You may request deletion of your data at any time (subject to
                legal retention obligations)
              </li>
            </ul>
          </Section>

          <Section num="7" title="Your Rights">
            <p style={bodyText}>
              You have the following rights regarding your personal information:
            </p>
            <ul style={listStyle}>
              <li>
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data where legally permissible
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from our marketing
                communications at any time
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data in a
                machine-readable format
              </li>
            </ul>
            <p style={bodyText}>
              To exercise any of these rights, please contact us at{" "}
              <strong>privacy@edxconsultants.com</strong>.
            </p>
          </Section>

          <Section num="8" title="Third-Party Links">
            <p style={bodyText}>
              Our website may contain links to third-party websites, including
              university portals, embassy websites, and scholarship databases.
              We are not responsible for the privacy practices or content of
              these external sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </Section>

          <Section num="9" title="Children's Privacy">
            <p style={bodyText}>
              Our services are intended for individuals who are 16 years of age
              or older. We do not knowingly collect personal information from
              children under 16 without parental consent. If you believe we have
              inadvertently collected such information, please contact us
              immediately and we will take steps to delete it.
            </p>
          </Section>

          <Section num="10" title="Changes to This Policy">
            <p style={bodyText}>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with an updated "Last Updated"
              date. We encourage you to review this policy periodically. Your
              continued use of our website after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </Section>

          <Section num="11" title="Contact Us">
            <p style={bodyText}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div
              style={{
                background: "rgba(33,0,177,0.05)",
                border: "1px solid rgba(33,0,177,0.12)",
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
                  href="mailto:privacy@edxconsultants.com"
                  style={{ color: "#2100B1", fontWeight: 600 }}
                >
                  privacy@edxconsultants.com
                </a>
              </p>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                📞{" "}
                <a
                  href="tel:+923000000000"
                  style={{ color: "#2100B1", fontWeight: 600 }}
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
              href="/terms-of-service"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 24px",
                background: "#2100B1",
                color: "white",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Section({ num, title, children }) {
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
            background: "linear-gradient(135deg, #2100B1, #ED4B00)",
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
        color: "#2100B1",
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
  marginBottom: "12px",
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
