import { academyData } from "../data/academyData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>{academyData.name}</h3>

          <p>{academyData.tagline}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>

          <a href={academyData.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="#contact">WhatsApp</a>

          <a href="#contact">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Natyakala Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
