import { academyData } from "../data/academyData";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="section-label">CONTACT US</p>

        <h2>Begin Your Dance Journey</h2>

        <p>
          Interested in learning Bharatanatyam? Get in touch with us to know
          more about classes, timings and upcoming programs.
        </p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <span className="contact-icon">☎</span>

          <h3>Phone</h3>

          <a href={`tel:${academyData.phone}`}>{academyData.phone}</a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">✉</span>

          <h3>Email</h3>

          <a href={`mailto:${academyData.email}`}>{academyData.email}</a>
        </div>

        <div className="contact-item">
          <span className="contact-icon">📍</span>

          <h3>Locations</h3>

          <div className="contact-locations">
            {academyData.locations.map((location) => (
              <p key={location}>{location}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-buttons">
        <a
          href={`https://wa.me/${academyData.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          WhatsApp Us
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="instagram-button"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
