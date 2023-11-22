import React from "react";
import "./cssheader.css";
//import Mon_CV from "../../assets/templates/Mon_CV.pdf";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header id="accueil">
      <div className="container header_container">
        <h2>Bienvenu au Menu de</h2>
        <h1>TechO Restaurant</h1>
        {/*Pour telecharger le CV et contact*
        <div className="contacter">
          <a href={Mon_CV} download className="btn">
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn btnPrimary">
            m'écrire
          </a>
        </div>/}
        {/*Scroller vers le bas*/}
        <a href="#contact" className="scroll">
          <FaArrowAltCircleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
