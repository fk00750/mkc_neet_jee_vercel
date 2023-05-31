import React from "react";
import { Navbar, Footer } from "../Components/HomeComponents";
import ChemistrySyllabus from "../Components/SyllabusComponents/ChemistrySyllabus";
import JeeHeading from "../Components/SyllabusComponents/JeeHeading";
import MathSyllabus from "../Components/SyllabusComponents/MathSyllabus";
import PhysicsSyllabus from "../Components/SyllabusComponents/PhysicsSyllabus";


function JeeSyllabus() {
  return (
    <div>
      <Navbar />
      <JeeHeading />
      {/* Syllabus  */}
      <div className="syllabus_container bg-gray-200 flex items-center justify-center py-2 mx-24 rounded-md mt-6 my-10">
        <div className="physics_syllabus mx-2 my-2">
          <PhysicsSyllabus />
          <ChemistrySyllabus />
          <MathSyllabus />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JeeSyllabus;
