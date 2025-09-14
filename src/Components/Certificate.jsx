import completeWebImg from "../assets/CompleteWebDevelopment.jpg";
import nodeImg from "../assets/NodeJS.jpg";
import reactReduxImg from "../assets/ReactRedux.jpg";
import jsImg from "../assets/Javascript.jpg";
import cssImg from "../assets/CSS.jpg";
import htmlImg from "../assets/HTML.jpg";
import acmImg from "../assets/ACM_SummerSchool.jpg";
import eurekaImg from "../assets/Eureka.jpg";
import innovoImg from "../assets/INNOVO_Hackathon.jpg";

const Certificates = [
  {
    title: "Complete Web Development Certification – Udemy",
    description:
      "Successfully completed an comprehensive Web Development course covering the full stack...",
    image: completeWebImg,
  },
  {
    title: "Node.js, Express.js & MongoDB Certification – KnowledgeGate",
    description:
      "Completed a practical course on Node.js, Express.js, and MongoDB...",
    image: nodeImg,
  },
  {
    title: "React & Redux Certification – KnowledgeGate",
    description:
      "Completed React & Redux certification under the guidance of Prashant Jain Sir...",
    image: reactReduxImg,
  },
  {
    title: "JavaScript Certification – KnowledgeGate",
    description: "Earned the JavaScript Certification from KnowledgeGate...",
    image: jsImg,
  },
  {
    title: "CSS Certification – KnowledgeGate",
    description: "Completed the CSS Certification from KnowledgeGate...",
    image: cssImg,
  },
  {
    title: "HTML Certification – KnowledgeGate",
    description: "Completed the HTML Certification from KnowledgeGate...",
    image: htmlImg,
  },
  {
    title:
      "National Summer School on Web Development – SSGMCE ACM Student Chapter",
    description:
      "Successfully participated in the National Summer School on Web Development...",
    image: acmImg,
  },
  {
    title:
      "Start-up Competition 2025 – Institution’s Innovation Council (IIC), SSGMCE",
    description: "Actively participated in the Start-up Competition 2025...",
    image: eurekaImg,
  },
  {
    title:
      "Hackathon Participation – INNOVO SSGMCE’25, Shri Sant Gajanan Maharaj College of Engineering",
    description: "Participated in the Hackathon at INNOVO SSGMCE’25...",
    image: innovoImg,
  },
];

const Certificate = () => {
  return (
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
  );
};

export default Certificate;
