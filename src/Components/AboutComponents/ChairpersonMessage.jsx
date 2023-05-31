import React from "react";
import { Footer, Navbar } from "../HomeComponents";
import ChairPersonImage from '../../images/mkc_chairpersonImage.png'

/**
 * Refactor
 */
function ChairpersonMessage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="my-2 w-fit mx-2 lg:mx-auto px-4 flex flex-col items-center justify-center py-10 lg:flex lg:flex-row md:flex md:flex-row md:space-x-24">
        {/* Director Image */}
        <img
          src={ChairPersonImage}
          alt="Director"
          className="w-40 rounded-full mb-4"
        />

        {/* Director Message */}
        <div className="max-w-lg bg-white shadow-lg rounded-lg px-6 py-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Chairperson's Message
          </h2>
          <p className="text-gray-700">
            Nothing is impossible in the world "this sentence is a motivation
            for all competitive aspirants, but to achieve any good result the
            only thing that matters is your dedication towards your study.
            Educating students is the Nobel work. We here at MKC not only teach
            but also make him develop whole personality of student to succeed in
            his life. MKC is already a trusted name among the students since
            last 16 years, in the category of Indian Defence Exam Preparation,
            now we decided after a huge success in Defence industry that our
            Experience And methodology will also help NEET & JEE aspirants. The
            vision to launch this course is to increase the success ratio and to
            Provide quality education to the candidate.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChairpersonMessage;
