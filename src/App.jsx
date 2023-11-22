import React from "react";
import Header from "./components/Header/header";
import Nav from "./components/Navigation/nav";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
