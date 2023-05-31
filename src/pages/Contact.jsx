import React from "react";
import Header from "../Components/ContactComponents/Header";
import { Navbar, Footer } from "../Components/HomeComponents";

function Contact() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* Contact Us Section  */}
      <div>
        <Header />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Contact;
