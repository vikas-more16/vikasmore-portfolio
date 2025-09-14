import { Code, Server, Terminal, Database, Smartphone } from "lucide-react";

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
  Database: Database,
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 min-vh-100 arsenal-section">
      <div className="container">
        <h2 className="font-serif font-black display-5 text-center my-4 text-foreground text-glow arsenal-title">
          Technical Arsenal
        </h2>
        <div className="row g-4 arsenal-grid arsenal-grid">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <div key={skill.name} className="custom-col arsenal-item">
                <div
                  className="card h-200 text-center animate-fade-in-scale"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card-body p-4">
                    {IconComponent && (
                      <IconComponent className="mb-3 text-primary-custom" />
                    )}
                    <h5 className="card-title font-bold text-foreground mb-2 ">
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
  );
};

export default Skills;
