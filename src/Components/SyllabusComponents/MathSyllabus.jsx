import React from "react";
import { useNavigate } from "react-router-dom";

function MathSyllabus() {
  const class11Maths = [
    "Sets and Functions	",
    "Algebra",
    "Coordinate Geometry",
    "Calculus",
    "Statistics and Probability",
  ];

  const class12Maths = [
    "Relations and Functions",
    "Algebra	",
    "Calculus",
    "Vectors and Three – Dimensional Geometry	",
    "Linear Programming	",
    "Probability",
  ];

  // While navigating to another page, the new page does not appear from top instead it appears from the point where it clicked
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
      <h2 className="text-2xl font-bold mb-4">Maths Syllabus</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-white">
          <thead>
            <tr>
              <th className="bg-gray-700 text-white border border-r-0 px-4 py-2 rounded-tl-md">
                📐 Maths syllabus for Class 11th
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
                📐 Maths syllabus for Class 12th
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
              length: Math.max(class11Maths.length, class12Maths.length),
            }).map((_, index) => (
              <tr className="bg-white" key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {class11Maths[index] && (
                    <span className="border border-gray-400 rounded-full px-2 py-1 text-gray-700 mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class11Maths[index]}
                </td>
                <td className="border border-gray-500  px-4 py-2">
                  {class12Maths[index] && (
                    <span className="border border-gray-500 px-2 py-1 text-gray-700 rounded-full mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class12Maths[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MathSyllabus;
