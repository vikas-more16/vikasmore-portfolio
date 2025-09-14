const NavBar = ({ scrollToSection }) => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">
        <button
          className="  btn btn-link p-0 border-0 font-serif navbar-brand"
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
  );
};

export default NavBar;
