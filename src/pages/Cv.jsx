import Navbar from "../components/Navbar";
import "./Cv.css";

function Cv() {
  const cv = "../../public/Cv-Seb.pdf";
  return (
    <div>
      <Navbar />
      <div className="mon-cv">
        <img
          className="img-cv"
          src="../../public/cv.JPG"
          alt="Cv de Sebastien Romeo"
        />

        <a className="telecharger" href={cv} download>
          Télécharger mon Cv
        </a>
      </div>
    </div>
  );
}

export default Cv;
