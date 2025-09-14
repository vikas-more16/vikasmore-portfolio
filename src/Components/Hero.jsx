import { Mail, Github } from "lucide-react";
import profileImg from "../assets/professional-developer-headshot.jpg";

const Hero = ({ scrollToSection, isVisible }) => {
  return (
    <section
      id="hero"
      className="position-relative overflow-hidden py-5 min-vh-100 d-flex align-items-center pt-32"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
        style={{
          background:
            "linear-gradient(135deg, var(--background) 0%, var(--background) 50%, var(--card) 100%)",
        }}
      ></div>
      <div className="container position-relative hero-container">
        <div className="row align-items-center g-5">
          {/* Left side - Text content */}
          <div
            className={`col-lg-6 transition-all ${
              isVisible ? "opacity-100" : "opacity-0"
            } animate-slide-in-up`}
          >
            <h1 className="font-serif font-black display-1 text-foreground  text-glow">
              Vikas More
            </h1>
            <p className="display-4 text-primary-custom mb-4 font-bold">
              Fullstack Web Developer
            </p>
            <p className="fs-6 text-muted-custom mb-5 lh-lgc">
              Enthusiastic about modern web technologies and eager to gain
              hands-on experience in building scalable applications. Committed
              to learning, problem-solving, and delivering effective solutions.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn btn-primary btn-lg px-4 py-3"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="me-2 mb-1" />
                Hire Me
              </button>
              <button
                className="btn btn-outline-primary btn-lg px-4 py-3"
                onClick={() => scrollToSection("contact")}
              >
                <Github className="me-2" />
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div
            className={`col-lg-6 d-flex justify-content-center justify-content-lg-end transition-all ${
              isVisible ? "opacity-100" : "opacity-0"
            } animate-slide-in-up`}
          >
            <div className="position-relative">
              <div className="profile-image-container animate-float-enhanced">
                <div className="profile-image animate-pulse-glow-enhanced">
                  <img src={profileImg} alt="Profile" className="w-100 h-100" />
                </div>
              </div>
              <div className="decorative-dot decorative-dot-1 animate-ping-enhanced"></div>
              <div className="decorative-dot decorative-dot-2 animate-pulse-slow"></div>
              <div className="decorative-dot decorative-dot-3 animate-bounce-slow"></div>
              <div className="decorative-dot decorative-dot-4 animate-twinkle"></div>
              <div className="decorative-dot decorative-dot-5 animate-twinkle-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
