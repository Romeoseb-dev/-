import Competences from "../components/Competences";
import Navbar from "../components/Navbar";
import "./Home.css";

function home() {
  return (
    <div>
      <Navbar />
      <div className="container-image-nom">
        <img
          src="../../public/developpeur-web.jpg"
          alt="image de développeur"
          className="image-dev"
        />
        <h1 className="mon-nom">ROMEO SEBASTIEN</h1>
        <h2 className="description">
          Développeur Fullstack Région Toulousaine
        </h2>
        <Competences />
      </div>
    </div>
  );
}

export default home;
