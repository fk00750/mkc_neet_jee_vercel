import React from "react";

function FeeTable() {
  return (
    <div className="container mx-auto  px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Fee Structure</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-1">CATEGORY</th>
              <th className="py-2">REGISTRATION FEE</th>
              <th className="py-2">DURATION</th>
              <th className="py-2">ADMISSION FEE</th>
              <th className="py-2">NET PAYABLE AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border-b border-gray-300 px-4 py-2">Foundation</td>
              <td className="border-b border-gray-300 px-4 py-2">525/-</td>
              <td className="border-b border-gray-300 px-4 py-2">2 years</td>
              <td className="border-b border-gray-300 px-4 py-2">1,60,000/-</td>
              <td className="border-b border-gray-300 px-4 py-2">1,60,525/-</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 px-4 py-2">Foundation</td>
              <td className="border-b border-gray-300 px-4 py-2">525/-</td>
              <td className="border-b border-gray-300 px-4 py-2">1 year</td>
              <td className="border-b border-gray-300 px-4 py-2">80,000/-</td>
              <td className="border-b border-gray-300 px-4 py-2">80,525/-</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border-b border-gray-300 px-4 py-2">Target/Dropper</td>
              <td className="border-b border-gray-300 px-4 py-2">525/-</td>
              <td className="border-b border-gray-300 px-4 py-2">1 year</td>
              <td className="border-b border-gray-300 px-4 py-2">70,000/-</td>
              <td className="border-b border-gray-300 px-4 py-2">70,525/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeTable;
