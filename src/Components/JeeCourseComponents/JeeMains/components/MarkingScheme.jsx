import React from "react";

function MarkingScheme() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Marking Scheme</h1>

      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">Marking Scheme for MCQs</h3>
        <div className="flex items-center justify-between py-2 border-b">
          <div className="w-3/4">Correct Answer or the Most Appropriate Answer</div>
          <div className="w-1/4 text-right">Four marks (+4)</div>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div className="w-3/4">Unanswered / Marked for Review</div>
          <div className="w-1/4 text-right">No marks (-1)</div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="w-3/4">Incorrect Answer</div>
          <div className="w-1/4 text-right">Minus one mark (-1)</div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2">
          Marking Scheme for questions for which the answer is a Numerical Value
        </h3>
        <div className="flex items-center justify-between py-2 border-b">
          <div className="w-3/4">Correct Answer</div>
          <div className="w-1/4 text-right">Four marks (+4)</div>
        </div>
        <div className="flex items-center justify-between py-2 border-b">
          <div className="w-3/4">Unanswered / Marked for Review</div>
          <div className="w-1/4 text-right">No marks (-1)</div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="w-3/4">Incorrect Answer</div>
          <div className="w-1/4 text-right">Minus one mark (-1)</div>
        </div>
      </div>
    </div>
  );
}

export default MarkingScheme;
