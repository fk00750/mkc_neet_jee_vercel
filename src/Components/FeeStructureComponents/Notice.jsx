import React from "react";

function Notice() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="bg-blue-200 p-4 rounded-md">
        <div className="flex items-center justify-center mb-4">
          <p className="text-xl">
            <span className="text-2xl font-bold text-blue-800 mr-2">📌 Note:</span>
            Additional Scholarship on the Basis of the 10th & 12th Result
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="border border-blue-800 text-blue-800 px-2 py-1">🏅 Board Marks (90% Above) - 20% Scholarship</span>
          <span className="border border-blue-800 text-blue-800 px-2 py-1">🏅 Board Marks (80% - 90%) - 10% Scholarship</span>
        </div>
      </div>
    </div>
  );
}

export default Notice;
