import React from "react";
import { useNavigate } from "react-router-dom";

function BiologySyllabus() {
  const class11Biology = [
    "Diversity in Living World",
    "Structural Organisation in Animals and Plants",
    "Cell Structure and Function",
    "Plant Physiology",
    "Human physiology",
  ];

  const class12Biology = [
    "Reproduction",
    "Genetics and Evolution",
    "Biology and Human Welfare",
    "Biotechnology and Its Applications",
    "Ecology and environment",
  ];

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "class11") {
      navigate("/biology-detailed-syllabus-class-11");
    } else if (id === "class12") {
      navigate("/biology-detailed-syllabus-class-12");
    }

    window.scrollTo(0, 0);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Biology Syllabus</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-white">
          <thead>
            <tr>
              <th className="bg-gray-700 text-white border border-r-0 px-4 py-2 rounded-tl-md">
                🧠 Biology syllabus for Class 11th
                <button
                  id="class11"
                  onClick={handleClick}
                  disabled={true}
                  className="bg-white px-2 mx-1 rounded-sm text-sm text-gray-700"
                >
                  View in detail
                </button>
              </th>
              <th className="bg-gray-700 text-white border border-l-0 px-4 py-2 rounded-tr-md">
                🧠 Biology syllabus for Class 12th
                <button
                  id="class12"
                  onClick={handleClick}
                  disabled={true}
                  className="bg-white px-2 mx-1 rounded-sm text-sm text-gray-700"
                >
                  View in detail
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
              length: Math.max(class11Biology.length, class12Biology.length),
            }).map((_, index) => (
              <tr className="bg-white" key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {class11Biology[index] && (
                    <span className="border border-gray-400 rounded-full px-2 py-1 text-gray-700 mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class11Biology[index]}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {class12Biology[index] && (
                    <span className="border border-gray-400 rounded-full px-2 py-1 text-gray-700 mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class12Biology[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BiologySyllabus;
