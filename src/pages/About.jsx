import React from "react";
import Header from "../Components/AboutComponents/Header";
import { Navbar, Footer } from "../Components/HomeComponents";

function About() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* About Section  */}
      <div>
        <Header />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default About;
