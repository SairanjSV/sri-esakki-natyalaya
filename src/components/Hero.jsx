import { academyData } from "../data/academyData";
import heroImage from "../assets/bharatanatyam-hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(48, 34, 24, 0.72),
            rgba(48, 34, 24, 0.82)
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="hero-content">
        <div className="hero-accent">✦</div>

        <p className="hero-subtitle">
          TRADITION • EXPRESSION • GRACE
        </p>

        <h1>
          Bharatanatyam
          <br />
          Academy
        </h1>

        <p className="hero-description">
          Discover the beauty of Bharatanatyam through tradition, discipline
          and artistic expression.
        </p>

        <div className="hero-buttons">
          <a href="#classes" className="primary-button">
            Join Our Classes
          </a>

          <a href="#performances" className="secondary-button">
            Explore Performances
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;