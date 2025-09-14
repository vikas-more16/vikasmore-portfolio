import React from "react";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/footer";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-vh-100">
      {/* Navbar Section */}
      <NavBar scrollToSection={scrollToSection} />
      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} isVisible={isVisible} />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Certificate Section */}
      <Certificate />
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
