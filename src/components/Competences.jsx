import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import "./competences.css";

function Competences() {
  return (
    <div className="competence">
      <h2 className="mes-competences">Mes Compétences</h2>
      <div className="block-competence">
        <div className="cont-font">
          <h3 className="font">
            <FaReact />
            front-end
          </h3>
        </div>
        <div className="cont-back">
          <h3 className="back">
            <DiDatabase />
            back-end
          </h3>
        </div>
        <div className="cont-gest">
          <h3 className="gestion">
            <HiOutlineComputerDesktop />
            collaboration et gestion de projets
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Competences;
