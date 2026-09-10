import { academyData } from "../data/academyData";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-accent">✦</div>

        <p className="hero-subtitle">
          TRADITION • EXPRESSION • GRACE
        </p>

        <h1>
          {academyData.name}
        </h1>

        <p className="hero-description">
          {academyData.tagline}
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