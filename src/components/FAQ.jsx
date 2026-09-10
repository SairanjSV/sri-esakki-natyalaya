import { useState } from "react";

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionNumber) => {
    setOpenQuestion(
      openQuestion === questionNumber ? null : questionNumber
    );
  };

  return (
    <section id="faq" className="faq-section">

      <div className="section-heading">

        <p className="section-label">
          FAQ
        </p>

        <h2>
          Frequently Asked Questions
        </h2>

        <p>
          Find answers to some common questions about
          our Bharatanatyam classes and training.
        </p>

      </div>


      <div className="faq-list">

        <div className="faq-item">

          <button
            className="faq-question"
            onClick={() => toggleQuestion(1)}
          >
            <span>
              What age can students start learning Bharatanatyam?
            </span>

            <span>
              {openQuestion === 1 ? "−" : "+"}
            </span>
          </button>

          {openQuestion === 1 && (
            <div className="faq-answer">
              <p>
                Students can begin learning Bharatanatyam
                from a young age. The appropriate starting
                age may vary depending on the student's
                interest and readiness.
              </p>
            </div>
          )}

        </div>


        <div className="faq-item">

          <button
            className="faq-question"
            onClick={() => toggleQuestion(2)}
          >
            <span>
              Do beginners need previous dance experience?
            </span>

            <span>
              {openQuestion === 2 ? "−" : "+"}
            </span>
          </button>

          {openQuestion === 2 && (
            <div className="faq-answer">
              <p>
                No. Beginners can start without any previous
                experience. Training begins with the basic
                movements and techniques.
              </p>
            </div>
          )}

        </div>


        <div className="faq-item">

          <button
            className="faq-question"
            onClick={() => toggleQuestion(3)}
          >
            <span>
              How often are classes conducted?
            </span>

            <span>
              {openQuestion === 3 ? "−" : "+"}
            </span>
          </button>

          {openQuestion === 3 && (
            <div className="faq-answer">
              <p>
                Classes are generally conducted on scheduled
                days each week. Please contact the academy
                for the current timetable.
              </p>
            </div>
          )}

        </div>


        <div className="faq-item">

          <button
            className="faq-question"
            onClick={() => toggleQuestion(4)}
          >
            <span>
              Are online classes available?
            </span>

            <span>
              {openQuestion === 4 ? "−" : "+"}
            </span>
          </button>

          {openQuestion === 4 && (
            <div className="faq-answer">
              <p>
                Online classes may be available depending
                on the program. Contact the academy for
                current availability.
              </p>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

export default FAQ;