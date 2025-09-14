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
      "Successfully completed an comprehensive Web Development course covering the full stack. Gained hands-on experience in building projects using HTML, CSS, Tailwind, JavaScript, React , Node.js, Express, strengthening my ability to create modern, scalable web applications.",
    image: completeWebImg,
  },
  {
    title: "Node.js, Express.js & MongoDB Certification – KnowledgeGate",
    description:
      "Completed a practical course on Node.js, Express.js, and MongoDB, enhancing my expertise in backend and full-stack development. Learned to build robust server-side applications, design and implement RESTful APIs with Express.js, and efficiently manage data using MongoDB.",
    image: nodeImg,
  },
  {
    title: "React & Redux Certification – KnowledgeGate",
    description:
      "Completed React & Redux certification under the guidance of Prashant Jain Sir via KnowledgeGate. Strengthened front-end development skills by building dynamic UIs, managing complex state with Redux, and integrating core web technologies (HTML, CSS, JavaScript).",
    image: reactReduxImg,
  },
  {
    title: "JavaScript Certification – KnowledgeGate",
    description:
      "Earned the JavaScript Certification from KnowledgeGate. Developed strong skills in JavaScript fundamentals, DOM manipulation, and interactive web development, building my confidence and marking a significant milestone in my Full Stack journey.",
    image: jsImg,
  },
  {
    title: "CSS Certification – KnowledgeGate",
    description:
      "Completed the CSS Certification from KnowledgeGate, gaining strong knowledge of styling, layouts, and responsive design. This course enhanced my confidence in crafting visually appealing, user-friendly interfaces and marked another key milestone in my web development journey.",
    image: cssImg,
  },
  {
    title: "HTML Certification – KnowledgeGate",
    description:
      "Completed the HTML Certification from KnowledgeGate, gaining a strong foundation in HTML and web development. This course enhanced my confidence in building structured, semantic web pages and marked the beginning of my front-end and full-stack development journey.",
    image: htmlImg,
  },
  {
    title:
      "National Summer School on Web Development – SSGMCE ACM Student Chapter",
    description:
      "Successfully participated in the National Summer School on Web Development organized by SSGMCE ACM Student Chapter, Shegaon. The five-day program (17th–21st July 2024) comprised 40 hours of intensive training, workshops, and hands-on projects, strengthening my practical knowledge and confidence in web technologies.",
    image: acmImg,
  },
  {
    title:
      "Start-up Competition 2025 – Institution’s Innovation Council (IIC), SSGMCE",
    description:
      "Actively participated in the Start-up Competition 2025 organized by Institution’s Innovation Council (IIC) and Institution of Engineers (India) Student’s Chapter at SSGMCE. The event, held on 22nd August 2025, recognized creativity, innovation, and entrepreneurial spirit, boosting my confidence and teamwork experience.",
    image: eurekaImg,
  },
  {
    title:
      "Hackathon Participation – INNOVO SSGMCE’25, Shri Sant Gajanan Maharaj College of Engineering",
    description:
      "Participated in the Hackathon at INNOVO SSGMCE’25, held on 14th and 15th February 2025 at Shri Sant Gajanan Maharaj College of Engineering, Shegaon. This event enhanced my problem-solving, coding, and collaboration skills, providing practical exposure to building innovative solutions within limited timeframes.",
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
