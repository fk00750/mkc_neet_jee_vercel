import React from "react";
import CourseDetails from "../Components/CourseComponents/CourseDetails";
import { Footer, Navbar } from "../Components/HomeComponents";

function Course() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* Neet Course Section  */}
      <div>
        {/* <Header /> */}
        <CourseDetails />
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

export default Course;
