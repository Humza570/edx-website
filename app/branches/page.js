import { MapPin, Phone, Mail, Clock, Building2, Star } from "lucide-react";

export const metadata = {
  title: "Our Branches | EdX Consultants",
  description:
    "Visit EdX Consultants at our Lahore Head Office or our new Islamabad Branch. Expert study abroad guidance across Pakistan.",
};

const branches = [
  {
    type: "Head Office",
    city: "Lahore",
    badge: "Headquarters",
    badgeColor: "#F47B20",
    address: "First Floor, Building No. 55, Johar Town, Block B Phase 1, Lahore, Pakistan",
    phone: "+92 333 9989153",
    email: "info@edxconsultants.com",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 06:00 PM" },
      { days: "Saturday", time: "12:00 PM – 04:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3236!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zEdX+Consultants+Lahore!5e0!3m2!1sen!2spk!4v1",
    mapUrl: "https://maps.google.com/?q=EdX+Consultants+Johar+Town+Lahore",
    established: "Est. 2014",
    highlight: true,
  },
  {
    type: "Branch Office",
    city: "Islamabad",
    badge: "New Branch",
    badgeColor: "#2563EB",
    address: "First Floor, Bukhari Plaza, Main G.T. Road, Islamabad, 10278, Pakistan",
    phone: "+92 333 9989153",
    email: "info@edxconsultants.com",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 06:00 PM" },
      { days: "Saturday", time: "12:00 PM – 04:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.0!2d73.0479!3d33.6938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zEdX+Consultants+Islamabad!5e0!3m2!1sen!2spk!4v1",
    mapUrl: "https://maps.google.com/?q=Bukhari+Plaza+Main+GT+Road+Islamabad",
    established: "Now Open",
    highlight: false,
  },
];

export default function BranchesPage() {
  return (
    <main className="branches-page">
      {/* ── Hero ── */}
      <section className="branches-hero">
        <div className="hero-inner">
          <span className="section-tag">
            <Building2 size={14} />
            Our Offices
          </span>
          <h1>
            Find Us <span className="orange">Across Pakistan</span>
          </h1>
          <p>
            With offices in Lahore and Islamabad, expert study abroad guidance
            is closer to you than ever.
          </p>
        </div>
        <div className="hero-wave" />
      </section>

      {/* ── Branch Cards ── */}
      <section className="branches-section">
        <div className="container">
          <div className="branches-grid">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className={`branch-card ${branch.highlight ? "highlight" : ""}`}
              >
                {/* Card Header */}
                <div
                  className="card-header"
                  style={{
                    background: branch.highlight
                      ? "linear-gradient(135deg, #F47B20, #E8B84B)"
                      : "linear-gradient(135deg, #1a1a2e, #2d3d70)",
                  }}
                >
                  <div className="header-top">
                    <div className="city-info">
                      <span className="office-type">{branch.type}</span>
                      <h2 className="city-name">{branch.city}</h2>
                    </div>
                    <div className="header-badges">
                      <span className="badge">{branch.badge}</span>
                      <span className="est-badge">{branch.established}</span>
                    </div>
                  </div>
                  <div className="header-icon">
                    <Building2 size={40} color="rgba(255,255,255,0.2)" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  {/* Address */}
                  <div className="info-row">
                    <div className="info-icon">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="info-label">Address</p>
                      <p className="info-value">{branch.address}</p>
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="info-label">Phone</p>
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="info-value link">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="info-label">Email</p>
                      <a href={`mailto:${branch.email}`} className="info-value link">
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="info-row">
                    <div className="info-icon">
                      <Clock size={16} />
                    </div>
                    <div className="hours-block">
                      <p className="info-label">Office Hours</p>
                      {branch.hours.map((h) => (
                        <div key={h.days} className="hours-row">
                          <span className="hours-day">{h.days}</span>
                          <span
                            className={`hours-time ${h.time === "Closed" ? "closed" : ""}`}
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className={`branch-cta ${branch.highlight ? "cta-orange" : "cta-dark"}`}
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Maps Row ── */}
      <section className="maps-section">
        <div className="container">
          <h2 className="maps-title">
            Find Us on the <span className="orange">Map</span>
          </h2>
          <div className="maps-grid">
            <div className="map-block">
              <div className="map-label">
                <MapPin size={14} color="#F47B20" />
                Lahore — Head Office
              </div>
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.163!2d74.32099!3d31.46958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c98c790b27%3A0x23de9eb554a9abe5!2sEdX%20Consultants!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="map-block">
              <div className="map-label">
                <MapPin size={14} color="#2563EB" />
                Islamabad — Branch Office
              </div>
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.841!2d73.04561!3d33.69265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6789f3d5ad5b5f2e!2sBukhari%20Plaza%2C%20G.T.%20Rd%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="branches-cta-strip">
        <div className="container">
          <div className="cta-strip-inner">
            <div>
              <h3>Not sure which office to visit?</h3>
              <p>Call us and we'll guide you to the nearest branch.</p>
            </div>
            <div className="cta-strip-btns">
              <a href="tel:+923339989153" className="btn-white">
                <Phone size={15} />
                +92 333 9989153
              </a>
              <a href="/contact" className="btn-orange">
                Book Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Styles ── */}
      <style jsx>{`
        /* ─ Reset / Base ─ */
        .branches-page {
          font-family: "Nunito", "Segoe UI", sans-serif;
          color: #1a1a2e;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .orange {
          color: #f47b20;
        }

        /* ─ Hero ─ */
        .branches-hero {
          background: linear-gradient(135deg, #1a1a2e 0%, #2d3060 100%);
          padding: 80px 24px 100px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 640px;
          margin: 0 auto;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(244, 123, 32, 0.15);
          border: 1px solid rgba(244, 123, 32, 0.4);
          color: #f9a85d;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .branches-hero h1 {
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .branches-hero p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
        }
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 48px;
          background: #f8f7f4;
          clip-path: ellipse(55% 100% at 50% 100%);
        }

        /* ─ Branches Section ─ */
        .branches-section {
          background: #f8f7f4;
          padding: 60px 0 72px;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 720px) {
          .branches-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ─ Branch Card ─ */
        .branch-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #f0e8dc;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .branch-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.1);
        }
        .branch-card.highlight {
          border-color: #f5c98b;
        }

        /* Card Header */
        .card-header {
          padding: 28px 28px 24px;
          position: relative;
          overflow: hidden;
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 2;
        }
        .office-type {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          display: block;
          margin-bottom: 4px;
        }
        .city-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .header-badges {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .badge {
          background: rgba(255, 255, 255, 0.25);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 50px;
          letter-spacing: 0.5px;
        }
        .est-badge {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.65);
          font-style: italic;
        }
        .header-icon {
          position: absolute;
          bottom: -8px;
          right: 20px;
          z-index: 1;
        }

        /* Card Body */
        .card-body {
          padding: 24px 28px 28px;
        }
        .info-row {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
        }
        .info-icon {
          width: 34px;
          height: 34px;
          background: #fff5ec;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #f47b20;
          margin-top: 2px;
        }
        .info-label {
          font-size: 11px;
          font-weight: 700;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 4px;
        }
        .info-value {
          font-size: 14px;
          color: #333;
          line-height: 1.5;
        }
        .info-value.link {
          color: #f47b20;
          text-decoration: none;
          font-weight: 600;
        }
        .info-value.link:hover {
          text-decoration: underline;
        }
        .map-link {
          display: inline-block;
          margin-top: 5px;
          font-size: 12px;
          font-weight: 700;
          color: #f47b20;
          text-decoration: none;
          letter-spacing: 0.3px;
        }
        .map-link:hover {
          text-decoration: underline;
        }

        /* Hours */
        .hours-block {
          flex: 1;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          padding: 5px 0;
          border-bottom: 1px solid #f5f0ea;
        }
        .hours-row:last-child {
          border-bottom: none;
        }
        .hours-day {
          color: #555;
        }
        .hours-time {
          font-weight: 600;
          color: #1a1a2e;
        }
        .hours-time.closed {
          color: #e74c3c;
        }

        /* CTA Button */
        .branch-cta {
          display: block;
          text-align: center;
          padding: 13px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          margin-top: 8px;
          transition: opacity 0.2s, transform 0.2s;
          letter-spacing: 0.3px;
        }
        .branch-cta:hover {
          opacity: 0.88;
          transform: scale(0.985);
        }
        .cta-orange {
          background: linear-gradient(135deg, #f47b20, #e8b84b);
          color: #fff;
        }
        .cta-dark {
          background: linear-gradient(135deg, #1a1a2e, #2d3d70);
          color: #fff;
        }

        /* ─ Maps Section ─ */
        .maps-section {
          padding: 60px 0 72px;
          background: #fff;
        }
        .maps-title {
          font-size: 28px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 36px;
          color: #1a1a2e;
        }
        .maps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 720px) {
          .maps-grid {
            grid-template-columns: 1fr;
          }
        }
        .map-block {
          border-radius: 16px;
          overflow: hidden;
          border: 1.5px solid #f0e8dc;
        }
        .map-label {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 18px;
          font-size: 13px;
          font-weight: 700;
          color: #1a1a2e;
          background: #fdf9f5;
          border-bottom: 1px solid #f0e8dc;
        }
        .map-frame {
          overflow: hidden;
        }
        .map-frame iframe {
          display: block;
        }

        /* ─ Bottom CTA Strip ─ */
        .branches-cta-strip {
          background: linear-gradient(135deg, #f47b20, #e8b84b);
          padding: 40px 0;
        }
        .cta-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cta-strip-inner h3 {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 4px;
        }
        .cta-strip-inner p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
        }
        .cta-strip-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fff;
          color: #f47b20;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 22px;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .btn-white:hover {
          transform: scale(0.97);
        }
        .btn-orange {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid #fff;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 22px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .btn-orange:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </main>
  );
}