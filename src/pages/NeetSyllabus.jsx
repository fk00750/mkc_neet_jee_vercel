import React from "react";
import { Navbar, Footer } from "../Components/HomeComponents";
import BiologySyllabus from "../Components/SyllabusComponents/BiologySyllabus";
import ChemistrySyllabus from "../Components/SyllabusComponents/ChemistrySyllabus";
import Heading from "../Components/SyllabusComponents/NeetHeading";
import PhysicsSyllabus from "../Components/SyllabusComponents/PhysicsSyllabus";

function NeetSyllabus() {
  return (
    <div className="">
      <Navbar />
      <Heading />
      {/* Syllabus  */}
      <div className="syllabus_container bg-gray-200 flex items-center justify-center py-2 mx-24 rounded-md mt-6 my-10">
        <div className="mx-2 my-2">
          <PhysicsSyllabus />
          <ChemistrySyllabus />
          <BiologySyllabus />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NeetSyllabus;
