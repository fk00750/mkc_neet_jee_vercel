import React from "react";
import { useNavigate } from "react-router-dom";

function ChemistrySyllabus() {
  const class11Chemistry = [
    "Some Basic Concepts of Chemistry",
    "Structure of Atom",
    "Classification of Elements and Periodicity in Properties",
    "Chemical Bonding and Molecular Structure",
    "States of Matter: Gases and Liquids",
    "Thermodynamics",
    "Equilibrium",
    "Redox ReactionsThermodynamics",
    "Hydrogen",
    "s-Block Element (Alkali and Alkaline earth metals)",
    "Some p-Block Elements",
    "Organic Chemistry- Some Basic Principles and Techniques",
    "Hydrocarbons",
    "Environmental Chemistry",
  ];

  const class12Chemistry = [
    "Solid State",
    "Solutions",
    "Electrochemistry",
    "Chemical Kinetics",
    "Surface Chemistry",
    "General Principles and Processes of Isolation of Elements",
    "p-Block Elements",
    "d- and f-Block Elements",
    "Haloalkanes and Haloarenes",
    "Alcohols, Phenols and Ethers",
    "Aldehydes, Ketones and Carboxylic Acids",
    "Organic Compounds Containing Nitrogen",
    "Biomolecules",
    "Polymers",
    "Chemistry in Everyday Life",
  ];

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "class11") {
      navigate("/chemistry-detailed-syllabus-class-11");
    } else if (id === "class12") {
      navigate("/chemistry-detailed-syllabus-class-12");
    }

    window.scrollTo(0, 0);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Chemistry Syllabus</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-white">
          <thead>
            <tr>
              <th className="bg-gray-700 text-white border border-r-0 px-4 py-2 rounded-tl-md">
                ⚗️ Chemistry syllabus for Class 11th
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
                ⚗️ Chemistry syllabus for Class 12th
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
              length: Math.max(
                class11Chemistry.length,
                class12Chemistry.length
              ),
            }).map((_, index) => (
              <tr className="bg-white" key={index}>
                <td className="border border-gray-500 px-4 py-2">
                  {class11Chemistry[index] && (
                    <span className="px-2 py-1 text-gray-700 border border-gray-400 rounded-full mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class11Chemistry[index]}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {class12Chemistry[index] && (
                    <span className="px-2 py-1 text-gray-700 border border-gray-400 rounded-full mr-2">
                      {index + 1}.
                    </span>
                  )}
                  {class12Chemistry[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChemistrySyllabus;
