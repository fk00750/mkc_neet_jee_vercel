import React from "react";
import biologyImage from "../../../public/biology.png";


function Biology() {
  return (
    <div className="bg-gray-900 rounded-md shadow-md p-6 border border-gray-400">
      <h1 className="text-2xl font-bold mb-4 text-white">Biology</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <p className="text-slate-200">
            Biology plays a crucial role in JEE and NEET exams. It is one of the
            core subjects that students need to master in order to excel in
            these competitive exams.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Explore more
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src={biologyImage}
            alt="Biology"
            className="w-24 md:w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Biology;
