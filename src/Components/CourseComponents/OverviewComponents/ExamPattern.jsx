import React from "react";

function ExamPattern({ data }) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Exam Pattern Overview</h1>
      <span>NEET(UG) exam pattern is given below.</span>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Particulars</th>
              <th className="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>
              Object.entries(item).map(([key, value]) => (
                <tr key={key} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="px-4 py-2">{key}</td>
                  <td className="px-4 py-2">{value}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamPattern;
