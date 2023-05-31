import React from "react";
import MathsImage from "../images/math.png";

function Card3() {
    return (
      <div className="bg-gray-900 border border-gray-200 shadow-lg px-4 h-fit">
      <h1 className="text-2xl text-center font-bold my-2 text-white">
        Math
      </h1>
      <div className="my-8">
        <p className="text-white">
          Math plays a crucial role in JEE and NEET exams. It is one of the
          core subjects that students need to master in order to excel in these
          competitive exams.
        </p>
      </div>
      <div className="">
        <img src={MathsImage} className="" alt="" />
      </div>
    </div>
    );
  }

export default Card3;
