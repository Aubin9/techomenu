import React, { useState } from 'react'
import './cssnav.css'
import logo from '../../assets/templates/logo.png'
//import {ImHome} from 'react-icons/im'
//import {FaUser} from 'react-icons/fa'
//import {RiServiceFill} from 'react-icons/ri' 
import { FcCollapse } from "react-icons/fc";
//import {BsFillChatLeftDotsFill} from 'react-icons/bs'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <picture>
        <a href="https://techomenu.vercel.app"><img src={logo} alt="logo" /></a>
      </picture>
      <li><a href="#accueil" title='accueil' > Accueil</a></li>
      <li>
        <a onClick={toggleDropdown}><FcCollapse /> Catégories</a>
        {isOpen && (
        <ul className="dropdown">
          <li><a href="#entree">Plats d'entrées</a></li>
          <li><a href="#principaux">Plats principaux</a></li>
          <li><a href="#dessert">Desserts</a></li>
          <li><a href="#speciale">Plats spéciaux</a></li>
          <li><a href="#vegetale">plats végétariens</a></li>
          <li><a href="#boisson">Boissons</a></li>
        </ul>
        )}
      </li>
      <li><a href="#about" title='A Propos' >À Propos </a></li>
      <li><a href="#contact" title='contact'>Nous Contacter</a></li>
    </nav>
  )
}

export default Nav