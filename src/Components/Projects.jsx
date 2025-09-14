import { ExternalLink } from "lucide-react";
import attendifyImg from "../assets/Attendify.png";
import portfolioImg from "../assets/Portfolio.png";
import spotifyImg from "../assets/SpotifyClone.png";

const projects = [
  {
    title: "Attendify",
    description:
      "A smart attendance management platform with QR-based marking, and real-time classroom analytics.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    image: attendifyImg,
    github: "https://github.com/vikas-more16/ecommerce-platform",
    live: "https://www.attendify.in.net/",
  },
  {
    title: "Vikas More | Portfolio",
    description:
      "A personal portfolio showcasing my projects, certifications, and skills as a full-stack web developer.",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
    image: portfolioImg,
    github: "https://github.com/vikas-more16/task-management",
    live: "https://vikasmore.vercel.app/",
  },
  {
    title: "SpotifyClone",
    description:
      "A responsive music streaming app replicating Spotify’s UI with playlists, playback, and basic web features.",
    tech: ["HTML", "CSS", "Javascript"],
    image: spotifyImg,
    github: "https://github.com/vikas-more16/chat-platform",
    live: "https://vikas-more16.github.io/Spotify-clone/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-card min-vh-100 overflow-hidden">
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
                    {/* <button
                        className="btn btn-outline-primary btn-sm flex-fill"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="me-2" />
                        Code
                      </button> */}
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
  );
};

export default Projects;
