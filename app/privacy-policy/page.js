import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | EdX Consultants",
  description:
    "Privacy Policy of EdX Consultants Pvt. Ltd. — How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
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
              At <strong>EdX Consultants</strong>, we value your trust and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you use our website <strong>edxconsultants.com</strong> or engage
              with our services.
            </p>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              By using our website, you agree to the practices outlined below.
              Please read this policy carefully.
            </p>
          </div>

          <Section num="1" title="Our Purpose">
            <p style={bodyText}>
              The primary goal of EdX Consultants is to help students find
              suitable courses, universities, and career opportunities, and to
              support them through the admission and visa process. This falls
              under our Legitimate Business Interest.
            </p>
          </Section>

          <Section num="2" title="Collecting and Using Your Personal Data">
            <p style={bodyText}>
              You may browse our website without providing personal information.
              However, for some enhanced features and services, we may ask for
              details to process your request:
            </p>
            <ul style={listStyle}>
              <li>
                Submitting your name and email to create an account, receive
                newsletters, or save searches.
              </li>
              <li>
                Providing contact details to request a prospectus, course
                information, or scholarship guidance.
              </li>
              <li>
                Sharing academic history and background for counselling or
                university application support.
              </li>
            </ul>
            <p style={bodyText}>
              We clearly display why each piece of information is collected next
              to the relevant form field.
            </p>
          </Section>

          <Section num="3" title="What Personal Data Do We Collect?">
            <p style={bodyText}>
              The following data we collect directly through our forms:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                margin: "12px 0",
              }}
            >
              {[
                "First name",
                "Last name",
                "Email",
                "Country of residence",
                "Nationality",
                "Intake year and month",
                "Preferred study destination",
                "Subject",
                "Study level",
                "Date of birth",
                "Phone number",
                "Gender",
                "Mailing address",
                "Current qualification",
                "Qualification status",
                "Grade type",
                "Qualification score",
                "Date of completion",
                "English proficiency test scores",
                "Other tests",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 12px",
                    background: "rgba(33,0,177,0.04)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#444",
                    border: "1px solid rgba(33,0,177,0.08)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <SubHeading>IP Address</SubHeading>
            <p style={bodyText}>
              Each time you access our website, we receive your IP address. We
              keep this information for 6 months only and use it for analytics
              purposes only.
            </p>
          </Section>

          <Section num="4" title="Cookies">
            <p style={bodyText}>
              Our website uses cookies to provide a smooth and personalized
              experience. Cookies help us:
            </p>
            <ul style={listStyle}>
              <li>Keep you logged in.</li>
              <li>Save your preferences and improve future visits.</li>
              <li>
                Analyze site traffic and user interactions via tools like Google
                Analytics.
              </li>
              <li>Provide targeted content and relevant information.</li>
            </ul>
            <p style={bodyText}>
              You can control cookies via your browser settings. Please note,
              disabling cookies may limit some website features.
            </p>
          </Section>

          <Section num="5" title="Analytics and Insights">
            <p style={bodyText}>
              We may request additional details such as your country or city to
              analyze the reach and effectiveness of our services. This
              information is anonymized and never used to identify you
              personally.
            </p>
          </Section>

          <Section num="6" title="Data Storage & Security">
            <p style={bodyText}>
              Your personal information is stored securely in trusted hosting
              environments. We use encryption, firewalls, malware protection,
              and strict company-wide policies to protect your data.
            </p>
          </Section>

          <Section num="7" title="Your Rights">
            <p style={bodyText}>
              In line with global privacy laws, you have the right to:
            </p>
            <ul style={listStyle}>
              <li>Know why and how we use your data.</li>
              <li>Request details of your stored information.</li>
              <li>Correct inaccurate or incomplete data.</li>
              <li>Request deletion of your data ("right to be forgotten").</li>
              <li>Temporarily pause data usage.</li>
              <li>Opt-out of services or communications at any time.</li>
              <li>Stop your data from being used for certain purposes.</li>
            </ul>
            <p style={bodyText}>
              Requests can be made by contacting us at{" "}
              <a
                href="mailto:marketing@edxconsultants.com"
                style={{ color: "#2100B1", fontWeight: 600 }}
              >
                marketing@edxconsultants.com
              </a>
              .
            </p>
          </Section>

          <Section num="8" title="Marketing & Newsletters">
            <p style={bodyText}>
              At EdX Consultants, it is our primary objective to help students
              throughout their educational journey. As part of this, we offer a
              number of subscription options:
            </p>
            <SubHeading>Newsletters</SubHeading>
            <p style={bodyText}>
              Inspiring emails from our marketing team, providing you with the
              latest university news, tips, and guides.
            </p>
            <SubHeading>University Updates</SubHeading>
            <p style={bodyText}>
              Emails providing news and updates of course information, open
              days, events, and scholarships from universities and partners that
              match your interests.
            </p>
            <p style={bodyText}>
              You may unsubscribe anytime by updating your profile preferences
              or clicking the unsubscribe link in emails.
            </p>
          </Section>

          <Section num="9" title="Partner Institutions & Data Sharing">
            <p style={bodyText}>
              We only share your details with institutions you actively engage
              with (e.g., requesting a prospectus, enquiry, or application
              assistance).
            </p>
            <p style={bodyText}>
              Universities may contact you directly after you opt-in. If you
              later wish to withdraw consent, please contact the respective
              institution.
            </p>
            <p style={bodyText}>
              We also provide anonymized usage data to partner universities for
              reporting purposes — never identifiable personal data.
            </p>
          </Section>

          <Section num="10" title="Multimedia & Social Media">
            <p style={bodyText}>
              Occasionally, EdX Consultants may collect photos, videos, or
              testimonials (with consent) for promotional purposes. Consent will
              always be requested before use.
            </p>
            <p style={bodyText}>
              We also use social media platforms to share educational content.
              Please avoid posting personal details publicly. For specific
              queries, use direct/private messages.
            </p>
          </Section>

          <Section num="11" title="Links to External Websites">
            <p style={bodyText}>
              Our website may link to third-party university or partner sites.
              This Privacy Policy does not cover those websites. Please review
              their policies separately.
            </p>
          </Section>

          <Section num="12" title="Changes to This Policy">
            <p style={bodyText}>
              We may update this Privacy Policy periodically. The latest version
              will always be available on our website. If significant changes
              occur, we will notify you via email.
            </p>
          </Section>

          <Section num="13" title="Contact Us">
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
                First Floor, Building No. 55, Johar Block B Phase 1 Town,
                Lahore, 54000, Pakistan
              </p>
              <p style={{ ...bodyText, marginBottom: "6px" }}>
                📧{" "}
                <a
                  href="mailto:marketing@edxconsultants.com"
                  style={{ color: "#2100B1", fontWeight: 600 }}
                >
                  marketing@edxconsultants.com
                </a>
              </p>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                📞{" "}
                <a
                  href="tel:+923339989153"
                  style={{ color: "#2100B1", fontWeight: 600 }}
                >
                  +92 333 9989153
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
