function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-image-wrapper">

        <div className="about-image">
          <img
            src="/src/assets/guru.jpg"
            alt="Bharatanatyam teacher performing"
          />
        </div>

        <div className="about-image-caption">
          <span>Guru</span>
          <strong>Lavanya Naren</strong>
        </div>

      </div>


      <div className="about-content">

        <p className="section-label">
          ABOUT THE ACADEMY
        </p>

        <h2>
          Nurturing the Art of Bharatanatyam
        </h2>

        <p>
          Dance class teaching vazhoor style of bharathanatyam and also doing karagam , flok , koll attam , peacock dance , hula hoop with classical steps , kavadi , oyilattam , korathi dance , stories from purana kadhaigal ,Our tradition.
        </p>

        <p>
          Through systematic training, students learn the
          fundamentals of adavus, rhythm, expressions,
          abhinaya and the traditional repertoire.
        </p>

        <p>
          Our approach combines discipline, tradition and
          creativity to help every student develop confidence
          and a deeper appreciation for this beautiful art form.
        </p>

        <a href="#contact" className="about-button">
          Learn More
        </a>

      </div>

    </section>
  );
}

export default About;