import { useState } from "react";
import { academyData } from "../data/academyData";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <img src={logo} alt={`${academyData.name} logo`} />

        <span>{academyData.name}</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#classes" onClick={closeMenu}>
          Classes
        </a>

        <a href="#performances" onClick={closeMenu}>
          Performances
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="#events" onClick={closeMenu}>
          Events
        </a>

        <a href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
