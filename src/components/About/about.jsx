import React, {useState} from "react";
import "./cssabout.css";
import { FcCollapse } from "react-icons/fc";
import MOI from "../../assets/templates/nous.png";

import { GiGiftOfKnowledge } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
const longText = `TechO Restaurant est bien plus qu'un simple lieu de restauration. 
C'est une expérience culinaire moderne et innovante qui combine 
harmonieusement la gastronomie exquise et la technologie de pointe. 
Plongez dans un univers où la cuisine créative rencontre les dernières 
avancées technologiques pour offrir une expérience unique à nos clients.
Notre restaurant allie une ambiance contemporaine et futuriste avec un décor 
élégant et minimaliste. 

Chaque détail a été soigneusement pensé pour créer un 
environnement qui reflète notre esprit innovant. Que vous cherchiez un endroit 
pour un dîner intime, une réunion professionnelle ou une célébration spéciale, 
notre cadre moderne et sophistiqué saura vous séduire.

Notre chef talentueux et passionné met à l'honneur une cuisine fusion innovante, 
mêlant des saveurs internationales avec des techniques culinaires avant-gardistes.
Chaque plat est préparé avec des ingrédients frais et de qualité, soigneusement sélectionnés
pour éveiller vos papilles. De nos plats signature aux créations saisonnières, 
chaque bouchée est une expérience gastronomique inoubliable. 

Notre équipe dévouée de professionnels de la restauration est là pour vous offrir 
un service impeccable. Nos serveurs attentifs sont formés pour répondre à vos besoins 
et vous conseiller sur nos menus et nos accords mets et vins. Nous croyons fermement que 
le service chaleureux et personnalisé est la clé pour surpasser les attentes de nos clients. 

Situé au cœur de la ville, le TechO Restaurant offre une vue panoramique imprenable sur les monuments
emblématiques de la région. Profitez de cet environnement exceptionnel tout en dégustant nos délicieux 
plats et en partageant des moments précieux avec vos proches. 

Nous sommes fiers d'avoir reçu de nombreuses distinctions culinaires, témoignant de notre engagement 
envers l'excellence gastronomique et l'innovation. Les critiques élogieuses de nos clients satisfaits 
sont notre plus grande récompense. 

Réservez dès maintenant pour vivre une expérience gastronomique 
à la pointe de la technologie. Que ce soit pour un dîner romantique, 
une réunion d'affaires ou une célébration spéciale, le TechO Restaurant est 
l'endroit idéal pour découvrir une cuisine d'avant-garde dans une ambiance moderne et sophistiquée.


`;
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section id="about">
      <h5>Qui sommes nous ?</h5>
      <h2>À propos de nous</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={MOI} alt="image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
           {/*  <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Clients</h5>
              <small>3</small>
            </article>

            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Projets</h5>
              <small>5+ complets</small>
            </article>

            <article className="about_card">
              <GiGiftOfKnowledge className="about_icon" />
              <h5>Expériences</h5>
              <small>3+ months internship</small>
            </article>
            */}
          </div>
          <p>
          Bienvenue chez TechO Restaurant, où la cuisine rencontre l'innovation. 
          Découvrez nos plats avant-gardistes et profitez d'une ambiance captivante. 
          Réservez dès maintenant pour une expérience culinaire unique, alliant haute 
          technologie et délices gastronomiques. Bienvenue dans notre monde où la cuisine rencontre l'innovation. <br />
  
          </p>
          <p>{longText.slice(0, 200)}</p>
          {isExpanded && (
            <div>
              <p>{longText.slice(200)}</p>
            </div>
          )}
          <button onClick={toggleDescription}>
          <FcCollapse />{isExpanded ? "Cacher" : "Lire la suite"}
          </button>
          {/*  
            <a href="#contact" className="btn btnPrimary">
              m'écrire
            </a>
          */}
        </div>
      </div>
    </section>
  );
};

export default About;
