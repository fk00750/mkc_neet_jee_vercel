import React, { useState } from "react";
import Card from "../Card";
import Card1 from "../Card1";
import Card2 from "../Card2";
import Card3 from "../Card3";
import PreFoundationBanner from "../PreFoundationComponents/Banner";
import Biology from "../SubjectsComponent/Biology";
import Chemistry from "../SubjectsComponent/Chemistry";
import Math from "../SubjectsComponent/Math";
import Physics from "../SubjectsComponent/Physics";

/**
 * Refactor the following code, when the pre foundation button is clicked our newly created pre foundation banner should appear
 */
function SubjectSection() {
  const [selectedSubjects, setSelectedSubjects] = useState([
    "Physics",
    "Chemistry",
    "Biology",
  ]);
  const [selectedExam, setSelectedExam] = useState("NEET");
  const [showPreFoundationBanner, setShowPreFoundationBanner] = useState(false);

  const handleSubjectChange = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === "NEET") {
      setSelectedSubjects(["Physics", "Chemistry", "Biology"]);
      setSelectedExam("NEET");
      setShowPreFoundationBanner(false);
    } else if (id === "JEE") {
      setSelectedSubjects(["Physics", "Chemistry", "Math"]);
      setSelectedExam("JEE");
      setShowPreFoundationBanner(false);
    } else if (id === "Pre-Foundation") {
      setSelectedSubjects([]);
      setSelectedExam("Pre-Foundation");
      setShowPreFoundationBanner(true);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-center font-sans font-bold text-2xl lg:text-4xl md:text-3xl mb-8">
          Supercharge Your Success: Unlock Your Potential with NEET, JEE, and
          Pre-Foundation Courses!
        </h1>
        <div className="flex justify-center space-x-4 mb-2 mx-2">
          <button
            id="NEET"
            className={`${
              selectedExam === "NEET" ? "bg-blue-500" : "bg-gray-500"
            } px-4 rounded-md text-xl text-white `}
            onClick={handleSubjectChange}
          >
            NEET
          </button>
          <button
            id="JEE"
            className={`${
              selectedExam === "JEE" ? "bg-green-500" : "bg-gray-500"
            } px-4 rounded-md text-xl text-white`}
            onClick={handleSubjectChange}
          >
            JEE
          </button>
          <button
            id="Pre-Foundation"
            className={`${
              selectedExam === "Pre-Foundation"
                ? "bg-yellow-600"
                : "bg-gray-500"
            } px-4 rounded-md text-xl text-white`}
            onClick={handleSubjectChange}
          >
            Pre-Foundation
          </button>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center justify-center md:flex-row lg:flex-row space-y-2 sm:justify-start">
          {selectedSubjects.includes("Physics") && (
            <div className="mx-2 w-full sm:w-auto">
              <Card />
            </div>
          )}
          {selectedSubjects.includes("Chemistry") && (
            <div className="mx-2 w-full sm:w-auto">
              {/* <Chemistry /> */}
              <Card1 />

            </div>
          )}
          {selectedSubjects.includes("Biology") && (
            <div className="mx-2 w-full sm:w-auto">
              {/* <Biology /> */}
              <Card2 />

            </div>
          )}
          {selectedSubjects.includes("Math") && (
            <div className="mx-2 w-full sm:w-auto">
              {/* <Math /> */}
              <Card3 />
            </div>
          )}
          {showPreFoundationBanner && (
            <div className="container mx-auto">
              <div className="flex justify-center">
                <PreFoundationBanner />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectSection;
