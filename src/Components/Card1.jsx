import React from "react";
import ChemistryImage from "../images/chemistry.png";

function Card1() {
    return (
      <div className="bg-gray-900 border border-gray-200 shadow-lg px-4 py-1 h-96">
        <h1 className="text-2xl text-center font-bold my-2 text-white">Chemistry</h1>
        <div className="my-2">
          <p className="text-white">
            Chemistry plays a crucial role in JEE and NEET exams. It is one of the
            core subjects that students need to master to excel in these
            competitive exams.
          </p>
        </div>
        <div className="">
          <img src={ChemistryImage} className="h-48 w-full object-cover" alt="" />
        </div>
      </div>
    );
  }

export default Card1;
