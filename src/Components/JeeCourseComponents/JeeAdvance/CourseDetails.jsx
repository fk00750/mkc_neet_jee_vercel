import { useState } from "react";
import FeeStructure from "../../../pages/FeeStructure";
import JeeTable from "../../CollegeNumComponents/NumOfJee";
import Fee from "../Fee";
import Syllabus from "../Syllabus";
import Overview from "./Overview";
import Notification from './components/ExamSchedule'


const content =
  "Our JEE(MAIN+Advanced) Classroom Course is Cover Entire Syllabus as per standard of competition. MKC Provide unique Teaching Methodology to Crack the competition in prescribe  Timeline. Our Entire Team is dedicated and focus toward JEE(MAIN+ADVANCE) Concept.";

function CourseDetails() {
  const [activeTab, setActiveTab] = useState("overview");

const content = "Our JEE(MAIN+Advanced) Classroom Course is Cover Entire Syllabus as per standard of competition. MKC Provide unique Teaching Methodology to Crack the competition in prescribe  Timeline. Our Entire Team is dedicated and focus toward JEE(MAIN+ADVANCE) Concept."
const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8 overflow-x-hidden">
      {/* Navigation buttons */}
      <div className="flex flex-wrap justify-center mb-4 mx-2">
        <button
          className={`flex-grow mb-2 sm:mb-0 mr-2 ${
            activeTab === "overview" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("overview")}
        >
          OVERVIEW
        </button>
        <button
          className={`flex-grow mb-2 sm:mb-0 mr-2 ${
            activeTab === "course" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("course")}
        >
          Course
        </button>
        <button
          className={`flex-grow mb-2 sm:mb-0 mr-2 ${
            activeTab === "notification" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("notification")}
        >
          NOTIFICATION
        </button>
        <button
          className={`flex-grow mb-2 sm:mb-0 mr-2 ${
            activeTab === "syllabus" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("syllabus")}
        >
          SYLLABUS
        </button>
        <button
          className={`flex-grow mb-2 sm:mb-0 mr-2 ${
            activeTab === "fee" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("fee")}
        >
          FEE STRUCTURE
        </button>
        <button
          className={`flex-grow mb-2 sm:mb-0 text-sm ${
            activeTab === "admission" ? "font-bold" : "font-normal"
          } px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => handleTabClick("admission")}
        >
          College & Seats
        </button>
      </div>
      
      {/* Contents */}
      <div>
        <div
          id="overview_content"
          className={`${activeTab === "overview" ? "block" : "hidden"}`}
        >
          <Overview />
        </div>
        <div
          id="course_content"
          className={`${activeTab === "course" ? "block" : "hidden"}`}
        >
          <FeeStructure EXAM={"JEE(MAIN+ADVANCED)"} Content={content} />
        </div>
        <div
          id="notification_content"
          className={`${activeTab === "notification" ? "block" : "hidden"}`}
        >
          <Notification />
        </div>
        <div
          id="syllabus_content"
          className={`${activeTab === "syllabus" ? "block" : "hidden"}`}
        >
          <Syllabus />
        </div>
        <div
          id="fee_content"
          className={`${activeTab === "fee" ? "block" : "hidden"}`}
        >
          <Fee />
        </div>
        <div
          id="admission_content"
          className={`${activeTab === "admission" ? "block" : "hidden"}`}
        >
          <JeeTable />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
