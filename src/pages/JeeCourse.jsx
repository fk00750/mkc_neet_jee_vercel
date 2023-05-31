import React, { useState } from "react";
import { Navbar, Footer } from "../Components/HomeComponents";
import JeeCourseDetails from "../Components/JeeCourseComponents/JeeMains/CourseDetails";
import JeeAdvanceCourseDetails from "../Components/JeeCourseComponents/JeeAdvance/CourseDetails";

function JeeCourse() {
  const [showMain, setShowMain] = useState(true);
  const [showAdvance, setShowAdvance] = useState(false);

  const handleMainClick = () => {
    setShowMain(true);
    setShowAdvance(false);
  };

  const handleAdvanceClick = () => {
    setShowMain(false);
    setShowAdvance(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Buttons */}
      <div className="flex justify-center my-4">
        <button
          className={`mr-4 py-2 px-4 rounded ${
            showMain ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={handleMainClick}
        >
          JEE MAIN
        </button>
        <button
          className={`py-2 px-4 rounded ${
            showAdvance ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={handleAdvanceClick}
        >
          JEE ADVANCE
        </button>
      </div>

      {/* Jee(MAIN) Course Section */}
      {showMain && <JeeCourseDetails />}

      {/* Jee(ADVANCED) Course Section */}
      {showAdvance && <JeeAdvanceCourseDetails />}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default JeeCourse;
