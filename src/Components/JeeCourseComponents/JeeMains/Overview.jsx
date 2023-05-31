import React from "react";
import ExamSchedule from "./components/ExamSchedule";
import ExamScheme from "./components/ExamScheme";
import ExamPattern from "./components/ExamPattern";
import MarkingScheme from "./components/MarkingScheme";

function Overview() {
  return (
    <div>
      {/* Exam Schedule Section */}
      <ExamSchedule />

      {/* Exam Scheme Overview */}
      <ExamScheme />

      {/* Exam Pattern Overview */}
      <ExamPattern />

      {/* Marking Scheme  */}
      <MarkingScheme />
    </div>
  );
}

export default Overview;
