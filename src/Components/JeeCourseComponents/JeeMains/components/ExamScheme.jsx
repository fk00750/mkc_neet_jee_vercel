import React from "react";

function ExamScheme() {
  const examData = [
    {
      paper: "Paper 1: B.E/B.Tech",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      typesOfQuestions: [
        "Objective Type Multiple Choice Questions (MCQs) and Questions for which the answer is a numerical value, with equal weightage to Mathematics, Physics, and Chemistry",
      ],
      modeOfExamination: ["Computer Based Test (CBT) mode only"],
    },
    {
      paper: "Paper 2A: B. Arch",
      subjects: ["Part-1: Mathematics", "Part-II: Aptitude Test", "Part-III: Drawing Test"],
      typesOfQuestions: [
        "Part-1: Objective Type Multiple Choice Questions (MCQ) and Questions for which the answer is a numerical value",
        "Part-II: Objective Type Multiple Choice Questions (MCQs)",
        "Part-III: Questions to test drawing Pen and Paper Based (offline) mode to be",
      ],
      modeOfExamination: [
        "Part-1: Computer Based Test (CBT) mode only",
        "Part-II: Computer Based Test (CBT) mode only",
        "Part-III: Pen and Paper Based (offline) mode to be attempted on a Drawing sheet of A4 size",
      ],
    },
    {
      paper: "Paper 28: B. Planning",
      subjects: ["Part-1: Mathematics", "Part-II: Aptitude Test", "Part-III: Planning-Based Questions"],
      typesOfQuestions: [
        "Part-1: Objective Type Multiple Choice Questions (MCQ) and Questions for which the answer is a numerical value",
        "Part-II: Objective Type Multiple Choice Questions (MCQs)",
        "Part-III: Objective Type Multiple Choice Questions (MCQs)",
      ],
      modeOfExamination: [
        "Part-1: Computer Based Test (CBT) mode only",
        "Part-II: Computer Based Test (CBT) mode only",
        "Part-III: Computer Based Test (CBT) mode only",
      ],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Exam Scheme</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">PAPER</th>
              <th className="px-4 py-2">SUBJECTS</th>
              <th className="px-4 py-2">TYPE OF QUESTIONS</th>
              <th className="px-4 py-2">MODE OF EXAMINATION</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2">{item.paper}</td>
                <td className="px-4 py-2">
                  {item.subjects.map((subject, index) => (
                    <div key={index}>{subject}</div>
                  ))}
                </td>
                <td className="px-4 py-2">
                  {item.typesOfQuestions.map((question, index) => (
                    <div key={index}>{question}</div>
                  ))}
                </td>
                <td className="px-4 py-2">
                  {item.modeOfExamination.map((mode, index) => (
                    <div key={index}>{mode}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamScheme;
