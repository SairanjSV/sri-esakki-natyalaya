import { academyData } from "../data/academyData";

import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";

function Gallery() {
  const galleryImages = [
    {
      image: gallery1,
      title: "Bharatanatyam Performance",
    },
    {
      image: gallery2,
      title: "Students in Class",
    },
    {
      image: gallery3,
      title: "Arangetram",
    },
    {
      image: gallery4,
      title: "Temple Performance",
    },
    {
      image: gallery5,
      title: "Cultural Program",
    },
    {
      image: gallery6,
      title: "Dance Workshop",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-heading">
        <p className="section-label">GALLERY</p>

        <h2>Moments in Motion</h2>

        <p>
          A glimpse into our classes, performances, celebrations and special
          moments.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div
            className={`gallery-item ${
              index === 0 || index === 5 ? "large" : ""
            }`}
            key={item.image}
          >
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="video-section">
        <p className="section-label">VIDEOS</p>

        <h3>Watch Our Performances</h3>

        <p>
          Explore selected performances and dance videos on our YouTube
          channel.
        </p>

        <a href={academyData.youtube} target="_blank" rel="noreferrer">
          Visit YouTube
        </a>
      </div>
    </section>
  );
}

export default Gallery;
