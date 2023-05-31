import React from "react";

function Header({ EXAM,Content }) {
  return (
    <div className="bg-gray-800 py-8 text-white mx-4 my-2 rounded-md">
      <div className="container mx-auto text-center">
        <h1 className="text-xl  md:text-4xl lg:text-5xl font-bold">
          {EXAM}
        </h1>
      </div>
      <div className="container mx-auto mt-6 text-center text-gray-300">
        <p className="text-sm md:text-base">
          {Content}
        </p>
      </div>
    </div>
  );
}

export default Header;
