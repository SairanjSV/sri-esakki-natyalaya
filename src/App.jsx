import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Performances from "./components/Performances";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Classes />

        <Performances />

        <Gallery />

        <Events />

        <Testimonials />

        <FAQ />

        <Contact />

        
      </main>

      <Footer />
    </div>
  );
}

export default App;
