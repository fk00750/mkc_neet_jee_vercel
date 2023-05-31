import React from "react";
import {
  Navbar,
  Footer,
  HeroSection,
  SubjectSection,
} from "../Components/HomeComponents";

import Advantages from "../Components/Advantages";

function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Advantages />
      <SubjectSection />
      <Footer />
    </div>
  );
}

export default Home;
