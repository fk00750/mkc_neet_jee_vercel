import React from "react";
import IIT from '../../json/IitCollege.json'
import NIT from '../../json/NitCollege.json'


function JeeTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-2">
      <div>
        <h2 className="text-2xl font-bold mb-4">IIT</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">State</th>
                <th className="py-2 px-4 border-b">Seats</th>
              </tr>
            </thead>
            <tbody>
              {IIT[0].IITs.map((iit) => (
                <tr key={iit.No} className="text-center">
                  <td className="py-2 px-4 border-b">{iit.No}</td>
                  <td className="py-2 px-4 border-b">{iit.Name}</td>
                  <td className="py-2 px-4 border-b">{iit.State}</td>
                  <td className="py-2 px-4 border-b">{iit.Seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">NIT</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">No</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">State</th>
                <th className="py-2 px-4 border-b">Seats</th>
              </tr>
            </thead>
            <tbody>
              {NIT[0].NITs.map((nit) => (
                <tr key={nit.No} className="text-center">
                  <td className="py-2 px-4 border-b">{nit.No}</td>
                  <td className="py-2 px-4 border-b">{nit.Name}</td>
                  <td className="py-2 px-4 border-b">{nit.State}</td>
                  <td className="py-2 px-4 border-b">{nit.Seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default JeeTable;
