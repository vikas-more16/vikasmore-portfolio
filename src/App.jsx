// src/App.jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Server,
  Terminal,
  Database,
  Smartphone,
} from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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

  const skills = [
    { name: "HTML", icon: "Code", category: "Frontend" },
    { name: "CSS", icon: "Code", category: "Frontend" },
    { name: "JavaScript", icon: "Code", category: "Frontend" },
    { name: "React", icon: "Code", category: "Frontend" },
    { name: "React Native", icon: "Smartphone", category: "Mobile" },
    { name: "Node.js", icon: "Server", category: "Backend" },
    { name: "MongoDB", icon: "Database", category: "Database" },
    { name: "MySQL", icon: "Database", category: "Database" },
    { name: "Java", icon: "Terminal", category: "Language" },
    { name: "Python", icon: "Terminal", category: "Language" },
    { name: "C", icon: "Terminal", category: "Language" },
  ];

  const iconMap = {
    Code: Code,
    Smartphone: Smartphone,
    Server: Server,
    Terminal: Terminal,
    Database: Database, // or Server if you want same icon
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory and payment processing",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/modern-ecommerce-dashboard.png",
      github: "https://github.com/vikas-more16/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management System",
      description:
        "Enterprise Java application with microservices architecture and real-time collaboration",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      image: "/task-management-app.png",
      github: "https://github.com/vikas-more16/task-management",
      live: "https://task-manager-demo.vercel.app",
    },
    {
      title: "Real-time Chat Platform",
      description:
        "Scalable WebSocket-based communication platform with end-to-end encryption",
      tech: ["Next.js", "Socket.io", "MongoDB", "JWT"],
      image: "/modern-chat-app.png",
      github: "https://github.com/vikas-more16/chat-platform",
      live: "https://chat-demo.vercel.app",
    },
  ];
  const Certificates = [
    {
      title: "Complete Web Development Certification – Udemy",
      description:
        "Successfully completed an comprehensive Web Development course covering the full stack. Gained hands-on experience in building projects using HTML, CSS, Tailwind, JavaScript, React , Node.js, Express,  strengthening my ability to create modern, scalable  web applications.",
      image: "/Complete web development_page-0001.jpg",
    },
    {
      title: "Node.js, Express.js & MongoDB Certification – KnowledgeGate",
      description:
        "Completed a practical course on Node.js, Express.js, and MongoDB, enhancing my expertise in backend and full-stack development. Learned to build robust server-side applications, design and implement RESTful APIs with Express.js, and efficiently manage data using MongoDB.",
      image: "/NodeJS_page-0001.jpg",
    },
    {
      title: "React & Redux Certification – KnowledgeGate",
      description:
        "Completed React & Redux certification under the guidance of Prashant Jain Sir via KnowledgeGate. Strengthened front-end development skills by building dynamic UIs, managing complex state with Redux, and integrating core web technologies (HTML, CSS, JavaScript).",
      image: "/React_page-0001.jpg",
    },
    {
      title: "JavaScript Certification – KnowledgeGate",
      description:
        "Earned the JavaScript Certification from KnowledgeGate. Developed strong skills in JavaScript fundamentals, DOM manipulation, and interactive web development, building my confidence and marking a significant milestone in my Full Stack journey.",
      image: "/Javascript_page-0001.jpg",
    },
    {
      title: "CSS Certification – KnowledgeGate",
      description:
        "Completed the CSS Certification from KnowledgeGate, gaining strong knowledge of styling, layouts, and responsive design. This course enhanced my confidence in crafting visually appealing, user-friendly interfaces and marked another key milestone in my web development journey.",
      image: "/CSS_page-0001.jpg",
    },
    {
      title: "HTML Certification – KnowledgeGate",
      description:
        "Completed the HTML Certification from KnowledgeGate, gaining a strong foundation in HTML and web development. This course enhanced my confidence in building structured, semantic web pages and marked the beginning of my front-end and full-stack development journey.",
      image: "/HTML_page-0001.jpg",
    },
    {
      title:
        "National Summer School on Web Development – SSGMCE ACM Student Chapter",
      description:
        "Successfully participated in the National Summer School on Web Development organized by SSGMCE ACM Student Chapter, Shegaon. The five-day program (17th–21st July 2024) comprised 40 hours of intensive training, workshops, and hands-on projects, strengthening my practical knowledge and confidence in web technologies.",
      image: "/ACM_SummerSchool.jpg",
    },
    {
      title:
        "Start-up Competition 2025 – Institution’s Innovation Council (IIC), SSGMCE",
      description:
        "Actively participated in the Start-up Competition 2025 organized by Institution’s Innovation Council (IIC) and Institution of Engineers (India) Student’s Chapter at SSGMCE. The event, held on 22nd August 2025, recognized creativity, innovation, and entrepreneurial spirit, boosting my confidence and teamwork experience.",
      image: "/Eureka.jpg",
    },
    {
      title:
        "Hackathon Participation – INNOVO SSGMCE’25, Shri Sant Gajanan Maharaj College of Engineering",
      description:
        "Participated in the Hackathon at INNOVO SSGMCE’25, held on 14th and 15th February 2025 at Shri Sant Gajanan Maharaj College of Engineering, Shegaon. This event enhanced my problem-solving, coding, and collaboration skills, providing practical exposure to building innovative solutions within limited timeframes.",
      image: "/INNOVO_Hackthon.jpg",
    },
  ];

  return (
    <div className="min-vh-100">
      {/* Navigation */}
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <button
            className=" navbar-brand btn btn-link p-0 border-0 font-serif"
            onClick={() => scrollToSection("hero")}
          >
            VM
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("Certifications")}
                >
                  Certifications
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                Fullstack Web Developer | Java Developer
              </p>
              <p className="fs-6 text-muted-custom mb-5 lh-lgc">
                Enthusiastic about modern web technologies and eager to gain
                hands-on experience in building scalable applications. Committed
                to learning, problem-solving, and delivering effective
                solutions.
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
                    <img
                      src="/professional-developer-headshot.jpg"
                      alt="Profile"
                      className="w-100 h-100"
                    />
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

      {/* Skills Section */}
      <section id="skills" className="py-5 min-vh-100  ">
        <div className="container">
          <h2 className="font-serif font-black display-5 text-center my-4 text-foreground text-glow">
            Technical Arsenal
          </h2>
          <div className="row g-4">
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon]; // get the actual component
              return (
                <div key={skill.name} className="custom-col">
                  <div
                    className="card h-200 text-center animate-fade-in-scale"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="card-body p-4">
                      {IconComponent && (
                        <IconComponent className="mb-3 text-primary-custom" />
                      )}
                      <h5 className="card-title font-bold text-foreground mb-2">
                        {skill.name}
                      </h5>
                      <span className="badge">{skill.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-5 bg-card min-vh-100 overflow-hidden"
      >
        <div className="container">
          <h2 className="font-serif font-black display-5 text-center my-4 text-foreground text-glow">
            Featured Projects
          </h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={project.title} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="card-img-top w-100 h-100"
                      style={{
                        objectFit: "fill",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <div className="card-header">
                    <h5 className="card-title text-foreground font-bold">
                      {project.title}
                    </h5>
                    <p className="card-text text-muted-custom">
                      {project.description}
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-primary btn-sm flex-fill"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="me-2" />
                        Code
                      </button>
                      <button
                        className="btn btn-primary btn-sm flex-fill"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="me-2" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certificate Section */}
      <section
        id="Certifications"
        className="py-5 bg-card min-vh-100 overflow-hidden"
      >
        <div className="container">
          <h2 className="font-serif font-black display-5 text-center my-4 text-foreground text-glow">
            Certifications
          </h2>
          <div className="row g-4">
            {Certificates.map((project, index) => (
              <div key={project.title} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="card-img-top w-100 h-100"
                      style={{
                        objectFit: "fill",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <div className="card-header">
                    <h5 className="card-title text-foreground font-bold">
                      {project.title}
                    </h5>
                    <p className="card-text text-muted-custom">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 min-vh-100 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="font-serif font-black display-5 my-4 text-foreground text-glow">
                About Me
              </h2>
              <div className="fs-5 lh-lg">
                <p className="text-muted-custom mb-4">
                  I'm a passionate fullstack developer with expertise in both
                  modern web technologies and enterprise Java development. With
                  a strong foundation in computer science and years of hands-on
                  experience, I thrive on solving complex problems and
                  architecting scalable solutions.
                </p>
                <p className="text-muted-custom mb-4">
                  My journey spans from crafting pixel-perfect React interfaces
                  to building robust Spring Boot microservices. I believe in
                  writing clean, maintainable code that stands the test of time
                  and follows industry best practices.
                </p>
                <p className="text-muted-custom">
                  When I'm not coding, you'll find me exploring emerging
                  technologies, contributing to open-source projects, and
                  sharing knowledge with the developer community through blogs
                  and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-card min-vh-100 overflow-hidden">
        <div className="container">
          <h2 className="font-serif font-black display-5 text-center mb-5 mt-4 text-foreground text-glow">
            Get In Touch
          </h2>

          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-6">
              <div className="mb-4">
                <h3 className="font-bold h2 text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="fs-5 text-muted-custom mb-4 lh-lg">
                  Ready to bring your next project to life? I'm always excited
                  about new challenges and innovative solutions. Let's discuss
                  how we can turn your vision into reality.
                </p>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(0, 212, 255, 0.2)",
                    }}
                  >
                    <Mail className=" text-primary-custom  " />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a
                      href="mailto:vikas1662005@gmail.com"
                      className="text-primary-custom text-decoration-none"
                    >
                      vikas1662005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(0, 212, 255, 0.2)",
                    }}
                  >
                    <Phone className="text-primary-custom" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a
                      href="tel:+919067718922"
                      className="text-primary-custom text-decoration-none"
                    >
                      +91 9067718922
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "rgba(0, 212, 255, 0.2)",
                    }}
                  >
                    <MapPin className="text-primary-custom" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Location</p>
                    <p className="text-muted-custom mb-0">
                      SSGMCE, Shegaon, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 pt-3">
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vikasmore16",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="me-2" />
                  LinkedIn
                </button>
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={() =>
                    window.open("https://github.com/vikas-more16", "_blank")
                  }
                >
                  <Github className="me-2" />
                  GitHub
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title text-foreground h3 mb-2">
                    Send a Message
                  </h5>
                  <p className="text-muted-custom mb-0">
                    I'll get back to you within 24 hours
                  </p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Project discussion"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Message</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 py-2"
                    >
                      <Mail className="me-2 mb-1" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 border-top"
        style={{ borderColor: "rgba(0, 212, 255, 0.2) !important" }}
      >
        <div className="container text-center">
          <p className="text-muted-custom mb-0">
            &copy; 2024 , Crafted By Vikas More.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
