import React from "react";
import logo from '../../assets/templates/logo.png'
import "./cssfooter.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <a href="#accueil" className="footer_logo"><img src={logo} alt="logo" /> TechO Restaurant </a>

      <ul className="permalinks">
        <li><a href="#accueil">Accueil</a> </li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_media">
        <a href="https://www.linkedin.com/in/aubin-touko" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Aubin9" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100068239687526"
          target="blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/AubinSiaha?t=rCh54f1kAXyTjeRxVQRhGQ&s=09"
          target="blank"
        >
          <BsTwitter />
        </a>
        <a href="https://www.youtube.com/@MathsAvecAubin" target="blank">
          <BsYoutube />
        </a>
      </div>

      <div className="copyRight">
        <h3>
          <FaRegCopyright /> <a href="https://peraubcorps.vercel.app/">Per-Aub</a> Nov 2023
        </h3>
      </div>
    </div>
  );
};

export default Footer;
