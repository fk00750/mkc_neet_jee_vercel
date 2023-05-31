import React from "react";

function ExamPattern({
  Paper,
  Section1_typeOfQues,
  Section2_typeOfQues,
  Section3_typeOfQues,
}) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">{`JEE Advance ${Paper} Pattern (Same for Physics, Chemistry and Mathematics)`}</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Section</th>
                <th className="border p-2">Types of Questions</th>
                <th className="border p-2">No. of Questions</th>
                <th className="border p-2">Maximum marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Section 1</td>
                <td className="border p-2">{Section1_typeOfQues}</td>
                <td className="border p-2">6</td>
                <td className="border p-2">18</td>
              </tr>
              <tr>
                <td className="border p-2">Section 2</td>
                <td className="border p-2">{Section2_typeOfQues}</td>
                <td className="border p-2">6</td>
                <td className="border p-2">18</td>
              </tr>
              <tr>
                <td className="border p-2">Section 3</td>
                <td className="border p-2">{Section3_typeOfQues}</td>
                <td className="border p-2">6</td>
                <td className="border p-2">18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ExamPattern;
