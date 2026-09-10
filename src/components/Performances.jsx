function Performances() {
  return (
    <section id="performances" className="performances-section">

      <div className="section-heading">

        <p className="section-label">
          PERFORMANCES
        </p>

        <h2>
          Celebrating the Art
        </h2>

        <p>
          From traditional temple performances to
          stage productions and cultural celebrations,
          every performance is an opportunity to share
          the beauty of Bharatanatyam.
        </p>

      </div>


      <div className="performance-cards">

        <article className="performance-card">

          <div className="performance-image">
  <img
    src="/src/assets/performance-arangetram.jpg"
    alt="Bharatanatyam Arangetram performance"
  />
</div>

          <div className="performance-content">

            <p className="performance-category">
              ARANGETRAM
            </p>

            <h3>
              A Journey of Dedication
            </h3>

            <p>
              Celebrating the culmination of years of
              dedicated training through a traditional
              Bharatanatyam recital.
            </p>

            <a href="#gallery">
              View Performance →
            </a>

          </div>

        </article>


        <article className="performance-card">

          <div className="performance-image">
  <img
    src="/src/assets/performance-cultural.jpg"
    alt="Bharatanatyam cultural performance"
  />
</div>

          <div className="performance-content">

            <p className="performance-category">
              CULTURAL PROGRAM
            </p>

            <h3>
              Dance & Expression
            </h3>

            <p>
              Presenting the richness of Indian classical
              dance at cultural celebrations and special
              occasions.
            </p>

            <a href="#gallery">
              View Performance →
            </a>

          </div>

        </article>


        <article className="performance-card">

          <div className="performance-image">
  <img
    src="/src/assets/performance-workshop.jpg"
    alt="Bharatanatyam workshop"
  />
</div>

          <div className="performance-content">

            <p className="performance-category">
              WORKSHOPS
            </p>

            <h3>
              Learning Through Experience
            </h3>

            <p>
              Special workshops and intensive sessions
              designed to deepen students' understanding
              of Bharatanatyam.
            </p>

            <a href="#gallery">
              View Performance →
            </a>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Performances;