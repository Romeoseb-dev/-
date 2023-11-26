import Navbar from "../components/Navbar";
import lecv from "../assets/cv.jpg";
import "./Cv.css";

function Cv() {
  const cv = "../assets/Cv-Seb.pdf";
  return (
    <div>
      <Navbar />
      <div className="mon-cv">
        <img className="img-cv" src={lecv} alt="Cv de Sebastien Romeo" />

        <a className="telecharger" href={cv} download>
          Télécharger mon Cv
        </a>
      </div>
    </div>
  );
}

export default Cv;
