/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="nom">ROMEO Sebastien ._</h3>
      <ul className="navbar-list">
        <li>
          <h3>
            <Link className="home" to="/">
              // home.
            </Link>
          </h3>
        </li>
        <li>
          <h3>// compétences.</h3>
        </li>
        <li>
          <h3>// projets.</h3>
        </li>
      </ul>
      <Link className="cv" to="/cv">
        <h3>// Mon Cv.</h3>
      </Link>
    </div>
  );
}

export default Navbar;
