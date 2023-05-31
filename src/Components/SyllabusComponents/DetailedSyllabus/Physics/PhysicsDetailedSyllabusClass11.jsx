import React from "react";
import content from "../../../../json/physics11Data.json";
import { Footer, Navbar } from "../../../HomeComponents";

function PhysicsDetailedSyllabusClass11() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      <div className="mt-10 my-10">
        <div>
          <h1 className="text-center text-2xl font-bold my-4">
            Detailed Syllabus of Physics
          </h1>
        </div>
        <div className="bg-gray-800 mx-4 px-4 py-4 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.map((item, index) => (
              <div
                className="border border-black p-4 text-center bg-white text-black rounded-md shadow-md"
                key={index}
              >
                <h2 className="font-bold text-xl mb-4 border-b-2 border-black pb-2 font-serif">
                  {item.heading}
                </h2>
                <ul className="list-disc list-inside mb-4 font-serif">
                  <li className="mb-2">{item.point1}</li>
                  <li className="mb-2">{item.point2}</li>
                  <li className="mb-2">{item.point3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default PhysicsDetailedSyllabusClass11;
