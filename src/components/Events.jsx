function Events() {
  return (
    <section id="events" className="events-section">

      <div className="section-heading">

        <p className="section-label">
          UPCOMING EVENTS
        </p>

        <h2>
          Join Us at Our Next Event
        </h2>

        <p>
          Stay connected with our upcoming performances,
          workshops and special celebrations.
        </p>

      </div>


      <div className="event-cards">

        <article className="event-card">

          <div className="event-date">
            <span>15</span>
            <small>DEC</small>
          </div>

          <div className="event-info">

            <p className="event-type">
              ARANGETRAM
            </p>

            <h3>
              Annual Bharatanatyam Recital
            </h3>

            <p>
              A special evening celebrating the dedication
              and artistic journey of our students.
            </p>

            <p className="event-location">
              📍 Chennai
            </p>

          </div>

        </article>


        <article className="event-card">

          <div className="event-date">
            <span>22</span>
            <small>JAN</small>
          </div>

          <div className="event-info">

            <p className="event-type">
              WORKSHOP
            </p>

            <h3>
              Bharatanatyam Workshop
            </h3>

            <p>
              An intensive workshop exploring technique,
              rhythm and expressive aspects of Bharatanatyam.
            </p>

            <p className="event-location">
              📍 Chennai
            </p>

          </div>

        </article>


        <article className="event-card">

          <div className="event-date">
            <span>08</span>
            <small>FEB</small>
          </div>

          <div className="event-info">

            <p className="event-type">
              PERFORMANCE
            </p>

            <h3>
              Cultural Celebration
            </h3>

            <p>
              Join us as our students present a collection
              of traditional Bharatanatyam pieces.
            </p>

            <p className="event-location">
              📍 Chennai
            </p>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Events;