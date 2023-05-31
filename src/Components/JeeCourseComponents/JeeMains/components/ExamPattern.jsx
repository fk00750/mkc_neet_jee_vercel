import React from "react";

function ExamPattern() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Exam Pattern</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-300 text-black">
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Section A</th>
              <th className="px-4 py-2">Section B</th>
              <th className="px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Mathematics</td>
              <td className="px-4 py-2 text-center">20*</td>
              <td className="px-4 py-2 text-center">10*</td>
              <td className="px-4 py-2 text-center">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Physics</td>
              <td className="px-4 py-2 text-center">20*</td>
              <td className="px-4 py-2 text-center">10*</td>
              <td className="px-4 py-2 text-center">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Chemistry</td>
              <td className="px-4 py-2 text-center">20*</td>
              <td className="px-4 py-2 text-center">10*</td>
              <td className="px-4 py-2 text-center">100</td>
            </tr>
            <tr className="bg-gray-300 text-black">
              <td className="px-4 py-2 font-bold">Total</td>
              <td className="px-4 py-2 text-center" colSpan="2">
                90
              </td>
              <td className="px-4 py-2">300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamPattern;
