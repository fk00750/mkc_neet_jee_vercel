import React from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";

function PhysicsSyllabus() {
  const class11Physics = [
    "Physical World and Measurement ",
    "Kinematics  ",
    "Laws of Motion  ",
    "Work, Energy and Power  ",
    "Motion of System of Particles and RigidBody  ",
    "Gravitation  ",
    "Properties of Bulk Matter",
    "Thermodynamics",
    "Behaviour of Perfect Gas and KineticTheory",
    "Oscillations and Waves",
  ];

  const class12Physics = [
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current and Magnetism",
    "Electromagnetic Induction andAlternating Currents",
    "Electromagnetic Waves",
    "Optics",
    "Dual Nature of Matter and Radiation",
    "Atoms and Nuclei",
    "Electronic Devices",
  ];

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "class11") {
      navigate("/physics-detailed-syllabus-class-11");
    } else if (id === "class12") {
      navigate("/physics-detailed-syllabus-class-12");
    }

    window.scrollTo(0, 0);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Physics Syllabus</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-white">
          <thead>
            <tr>
              <th className="bg-gray-700 text-white border border-r-0 px-4 py-2 rounded-tl-md">
                <span className="flex items-center">
                  🚀 Physics syllabus for Class 11th{" "}
                  <button
                    id="class11"
                    onClick={handleClick}
                    disabled={true}
                    className="bg-white px-2 mx-1 rounded-sm text-sm text-gray-700"
                  >
                    View in detail{" "}
                    <BsArrowRightShort className="inline-block align-text-bottom ml-1" />
                  </button>
                </span>
              </th>
              <th className="bg-gray-700 text-white border border-l-0 px-4 py-2 rounded-tr-md">
                <span className="flex items-center">
                  🚀 Physics syllabus for Class 12th
                  <button
                    id="class12"
                    disabled={true}
                    onClick={handleClick}
                    className="bg-white px-2 mx-1 rounded-sm text-sm text-gray-700"
                  >
                    View in detail{" "}
                    <BsArrowRightShort className="inline-block align-text-bottom ml-1" />
                  </button>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
              length: Math.max(class11Physics.length, class12Physics.length),
            }).map((_, index) => (
              <tr className="bg-white" key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {class11Physics[index] && (
                    <span className="border border-gray-400 rounded-full px-2 py-1 text-gray-700 mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class11Physics[index]}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {class12Physics[index] && (
                    <span className="border border-gray-400 rounded-full px-2 py-1 text-gray-700 mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class12Physics[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PhysicsSyllabus;
