import { academyData } from "../data/academyData";

function Gallery() {
  const galleryImages = [
    {
      image: "/src/assets/gallery-1.jpg",
      title: "Bharatanatyam Performance",
    },
    {
      image: "/src/assets/gallery-2.jpg",
      title: "Students in Class",
    },
    {
      image: "/src/assets/gallery-3.jpg",
      title: "Arangetram",
    },
    {
      image: "/src/assets/gallery-4.jpg",
      title: "Temple Performance",
    },
    {
      image: "/src/assets/gallery-5.jpg",
      title: "Cultural Program",
    },
    {
      image: "/src/assets/gallery-6.jpg",
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
          Explore selected performances and dance videos on our YouTube channel.
        </p>

        <a href={academyData.youtube} target="_blank" rel="noreferrer">
          Visit YouTube
        </a>
      </div>
    </section>
  );
}

export default Gallery;
