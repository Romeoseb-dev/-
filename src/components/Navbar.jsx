/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollCompetences = () => {
    const offset = window.innerWidth < 600 ? 180 : 590;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <h3 className="nom">ROMEO Sebastien ._</h3>
      <ul className="navbar-list">
        <li>
          <h3>
            <Link className="home" to="/" onClick={handleScrollToTop}>
              // Accueil.
            </Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link className="home" to="/" onClick={handleScrollCompetences}>
              // Mes compétences.
            </Link>
          </h3>
        </li>
        <li>
          <h3>// Projets.</h3>
        </li>
      </ul>
      <Link className="cv" to="/cv">
        <h3>// Mon Cv.</h3>
      </Link>
    </div>
  );
}

export default Navbar;
