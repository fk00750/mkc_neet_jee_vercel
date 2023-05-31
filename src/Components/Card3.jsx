import React from "react";
import MathsImage from "../images/math.png";

function Card3() {
    return (
      <div className="bg-gray-900 border border-gray-200 shadow-lg px-4 py-1 h-96">
        <h1 className="text-2xl text-center font-bold my-2 text-white">Mathematics</h1>
        <div className="my-2">
          <p className="text-white">
            Mathematics is a important subject plays a crucial role in JEE and NEET exams. It is one of the
            core subjects that students need to master to excel in these
            competitive exams.
          </p>
        </div>
        <div className="">
          <img src={MathsImage} className="h-48 w-full object-cover" alt="" />
        </div>
      </div>
    );
  }

export default Card3;
