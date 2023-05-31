import React from "react";
import PhysicsImage from "../images/Physics.png";

function Card() {
  return (
    <div className="bg-gray-900 border border-gray-200 shadow-lg px-4 h-96">
      <h1 className="text-2xl text-center font-bold my-2 text-white">Physics</h1>
      <div className="my-8">
        <p className="text-white">
          Physics plays a crucial role in JEE and NEET exams. It is one of the
          core subjects that students need to master in order to excel in these
          competitive exams.
        </p>
      </div>
      <div className="">
        <img src={PhysicsImage} className="" alt="" />
      </div>
    </div>
  );
}

export default Card;
