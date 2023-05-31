import React from "react";
import aboutBg from "../../../public/aboutbg1.jpg";

function Header() {
  return (
    <div className="container mx-auto py-4">
      <div className="p-4 flex flex-col md:flex-row items-center">
        {/* About Content */}
        <div className="md:w-1/2 md:pr-4 text-center md:text-left mb-16">
          <h1 className="text-6xl text-center font-Gagalin mb-4">About Us</h1>
          <p className="text-gray-700 text-center">
            Major Kalshi Classes is a renowned coaching institute for NEET and
            JEE exams, dedicated to providing quality education and support to
            aspiring medical and engineering students. With experienced faculty,
            comprehensive study materials, personalized attention, and a focus
            on overall development, they strive to help students excel in their
            exams and achieve their goals. We offers easy access to course
            information, study materials, mock tests, and effective
            communication channels, reflecting their commitment to delivering an
            enhanced learning experience.
          </p>
        </div>
        {/* Image */}
        <div className="md:w-1/2 md:pl-4">
          <img src={aboutBg} alt="About Background" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Header;
