import React from "react";
import "./csscontact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
//import { BsYoutube } from 'react-icons/bs'
//import { BsTwitter } from 'react-icons/bs'

import { useRef } from "react";
import emailjs from "emailjs-com";

/*const Result =() =>{
  return(
    <p>Message envoyé.</p>
  )
}*/

const Contact = () => {
  //const [result, showResult]= useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_srsyfce",
        "template_idcedyj ",
        form.current,
        "J_8wlN0gyAxPoMts0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    //showResult(true);
  };
  /*masquer le msg
  setTimeout(()=>{
    showResult(false);
  }, 5000);*/
  return (
    <section id="contact">
      <h5>Laissez nous un message</h5>
      <h2>Nous contacter</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <a
              href="mailto:peraucorps@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              peraucorps@gmail.com
            </a>
          </article>
{/* 
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option_icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/aubin-touko"
              target="_blank"
              rel="noreferrer"
            >
              Mon profile ici
            </a>
          </article>*/}

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.link/4lalpw" target="_blank" rel="noreferrer">
              m'écris sur WhatsApp
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nom complet" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btnPrimary">
            Soumettre
          </button>
          {/* <div className='row'>{result ? <Result/> : null}</div>*/}
        </form>
      </div>
    </section>
  );
};

export default Contact;
