import React from "react";

function MarkingScheme() {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">NEET Marking Scheme</h1>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          Every question in the NEET UG will carry 4 marks
        </li>
        <li className="mb-2">Each correct answer will fetch 4 marks</li>
        <li className="mb-2">
          For each incorrect response, there will be a one-mark deduction
        </li>
        <li className="mb-2">
          If there is more than one correct answer to a question, then all/any
          one will be considered correct
        </li>
        <li className="mb-2">
          Any un-attempted or unanswered question will not receive any marks
        </li>
        <li className="mb-2">
          Candidates will be awarded 4 marks in case a question is dropped,
          irrespective of whether the question was attempted or not
        </li>
      </ul>
    </div>
  );
}

export default MarkingScheme;
