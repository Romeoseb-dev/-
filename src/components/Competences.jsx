import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import "./competences.css";

function Competences() {
  return (
    <div id="competences">
      <div className="competence">
        <h2 className="mes-competences">Mes Compétences</h2>
        <div className="block-competence">
          <div className="cont-font">
            <div className="font">
              <FaReact className="icons" />
              <h3 className="soul-comp-font">front-end:</h3>
            </div>
            <h2 className="balise">&lt;h3&gt;</h2>
            <h2 className="comp">
              Passionné par le développement avec une expertise approfondie dans
              les frameworks HTML, CSS, JS, React et NextJS. Mon parcours se
              concentre sur la création de solutions techniques robustes,
              mettant en œuvre des technologies modernes pour des résultats
              performants et innovants.
            </h2>
            <h2 className="balise">&lt;/h3&gt;</h2>
          </div>
          <div className="cont-back">
            <div className="back">
              <DiDatabase className="icons" />
              <h3 className="soul-comp-back">back-end:</h3>
            </div>
            <h2 className="balise">&lt;h3&gt;</h2>
            <h2 className="comp">
              En tant que développeur Full Stack, ma maîtrise englobe à la fois
              le Front-End et le Back-End. Je suis familier avec les
              technologies telles que MySQL et Express pour la gestion des
              données côté serveur. Mon approche holistique me permet de créer
              des applications complètes et performantes, couvrant tous les
              aspects du développement web.
            </h2>
            <h2 className="balise">&lt;/h3&gt;</h2>
          </div>
          <div className="cont-gest">
            <div className="gestion">
              <HiOutlineComputerDesktop className="icons" />
              <h3 className="soul-comp-gest">gestion de projets:</h3>
            </div>
            <h2 className="balise">&lt;h3&gt;</h2>
            <h2 className="comp">
              Pratiquant Scrum pour la gestion de projets, je maîtrise Git pour
              un suivi efficace du code et utilise Figma pour concevoir des
              interfaces utilisateur dynamiques et attractives. Cette approche
              méthodique garantit un flux de travail optimisé pour le succès de
              mes projets.
            </h2>
            <h2 className="balise">&lt;/h3&gt;</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
