import React from "react";
import doctorBg from "../../../public/doctor.png";

function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center my-4">
      <div className="relative w-96 h-96">
        <img
          src={doctorBg}
          alt="Doctor"
          className="w-full h-full object-cover"
        />
        <div className="absolute -top-12 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-6xl font-Gagalin mb-4 text-black">NEET(UG)</h1>
          <p className="text-xl font-mono text-black text-center mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequuntur officia nam ratione ut quo hic nobis rerum! Nostrum vel
            itaque, mollitia placeat ipsum pariatur quis optio eius excepturi
            ullam cum quibusdam eos provident laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
