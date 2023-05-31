import React from "react";

function LatestExamPattern({ data }) {
  return (
    <div className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Latest Exam Pattern</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Subjects</th>
              <th className="px-4 py-2">Sections</th>
              <th className="px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>
              Object.entries(item).map(([subject, subjectData]) => (
                <tr
                  key={subject}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="px-4 py-2">{subject}</td>
                  <td className="px-4 py-2">
                    {subjectData.Section.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        {Object.keys(section)}: {Object.values(section)}
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-2">
                    {subjectData.Marks.map((mark, markIndex) => (
                      <div key={markIndex}>
                        {Object.keys(mark)}: {Object.values(mark)}
                      </div>
                    ))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestExamPattern;
