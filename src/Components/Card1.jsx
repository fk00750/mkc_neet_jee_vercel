import React from "react";
import ChemistryImage from "../images/chemistry.png";

function Card1() {
  return (
    <div className="bg-gray-900 border border-gray-200 shadow-lg px-4 h-fit">
      <h1 className="text-2xl text-center font-bold my-2 text-white">
        Chemsitry
      </h1>
      <div className="my-8">
        <p className="text-white">
          Chemistry plays a crucial role in JEE and NEET exams. It is one of the
          core subjects that students need to master in order to excel in these
          competitive exams.
        </p>
      </div>
      <div className="">
        <img src={ChemistryImage} className="" alt="" />
      </div>
    </div>
  );
}

export default Card1;
