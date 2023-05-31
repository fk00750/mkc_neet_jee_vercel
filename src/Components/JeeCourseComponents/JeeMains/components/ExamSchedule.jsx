import React from "react";

function ExamSchedule() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Schedule of Exam</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">EXAM</th>
              <th className="px-4 py-2">NOTIFICATION</th>
              <th className="px-4 py-2">EXAM DETAIL</th>
            </tr>
          </thead>
          <tfoot></tfoot>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">JEE MAIN - (I)</td>
              <td className="px-4 py-2 text-center">DECEMBER</td>
              <td className="px-4 py-2 text-center">JANUARY</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">JEE MAIN - (II)</td>
              <td className="px-4 py-2 text-center">FEBRUARY</td>
              <td className="px-4 py-2 text-center">APRIL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamSchedule;
