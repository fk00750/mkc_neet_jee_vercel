import React from "react";
import NeetExamPatternData from "../../json/NeetExamPettern.json";
import LatestNeetExamPatternData from "../../json/LatestNeetExamPattern.json";
import Eligibility from './OverviewComponents/Eligibility'
import ExamPattern from './OverviewComponents/ExamPattern'
import LatestExamPattern from './OverviewComponents/LatestExamPattern'
import MarkingScheme from "./OverviewComponents/MarkingScheme";

function Overview() {
  return (
    <div>
      {/* Eligibility Section */}
      <Eligibility />

      {/* Exam Pattern Overview */}
      <ExamPattern data={NeetExamPatternData}/>

      {/* Latest Exam Pattern */}
      <LatestExamPattern data={LatestNeetExamPatternData}/>

      {/* Marking Scheme */}
      <MarkingScheme />
    </div>
  );
}

export default Overview;
