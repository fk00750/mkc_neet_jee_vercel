import React from "react";
import aiimsData from "../../json/NeetCollege.json";

/**
 * Refactor the following Code for responsiveness
 */
const AiimsTable = () => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto mx-4">
        <table className="min-w-max w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Established</th>
              <th className="py-2 px-4 border-b">STATE/UT</th>
            </tr>
          </thead>
          <tbody>
            {aiimsData[0].NoOfAIIMS.map((aiims) => (
              <tr key={aiims.No} className="text-center">
                <td className="py-2 px-4 border-b">{aiims.No}</td>
                <td className="py-2 px-4 border-b">{aiims.Name}</td>
                <td className="py-2 px-4 border-b">{aiims.Established}</td>
                <td className="py-2 px-4 border-b">{aiims["STATE/UT"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AiimsTable;
