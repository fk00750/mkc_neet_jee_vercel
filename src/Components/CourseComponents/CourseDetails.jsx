import React, { useState } from "react";
import Overview from "./Overview";
import Notification from "./Notification";
import Syllabus from "./Syllabus";
import Fee from "./Fee";
import NumOfNeetCollegesAndSeats from "../CollegeNumComponents/NumOfNeet";
import FeeStructure from "../../pages/FeeStructure";

const content =
  "Our NEET(UG) Classroom Course is Cover Entire Syllabus as per standard of competition. MKC Provide unique Teaching Methodology to Crack the competition in prescribe  Timeline. Our Entire Team is dedicated and focus toward NEET(UG) Concept.";

function CourseDetails() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center font-Gagalin text-4xl my-4">NEET(UG)</h1>
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
          <FeeStructure EXAM={"NEET(UG)"} Content={content} />
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
          <NumOfNeetCollegesAndSeats />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
