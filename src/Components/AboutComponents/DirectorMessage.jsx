import React from "react";
import DirectorImage from "../../../public/logoBG.png";
import { Footer, Navbar } from "../HomeComponents";

function DirectorMessage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 lg:flex lg:flex-row md:flex md:flex-row md:space-x-24">
        {/* Director Image */}
        <img
          src={DirectorImage}
          alt="Director"
          className="w-40 rounded-full mb-4"
        />

        {/* Director Message */}
        <div className="max-w-lg bg-white shadow-lg rounded-lg px-6 py-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Director's Message
          </h2>
          <p className="text-gray-700">
            Prayagraj is a city known as Educational Hub, in this city we earned
            a trust and believe of thousands of parents and students. Now
            another big responsibly came on my shoulder to educate the JEE &
            NEET aspirants in right manner to make them qualify their
            completion. Only this is my dream. we understand what exactly a
            candidate needs during his preparation. So now to accept all
            challenges and assure all NEET & JEE competitors that their dream is
            my dream we work together and one day we shall definitely you I will
            achieves our goals.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DirectorMessage;