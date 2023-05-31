import React from "react";
import Advantage1 from "../images/test3.png";
import Advantage2 from "../images/test4.png";
import Advantage3 from "../images/test9.png";
import Advantage7 from "../images/test5.png";
import Advantage4 from "../images/test6.png";
import Advantage6 from "../images/test11.png";
import Advantage5 from "../images/test7.png";
import Advantage8 from "../images/test10.png";

function Feature({ title, image }) {
    return (
      <div className="mx-2 max-w-md  text-white rounded-lg overflow-hidden ">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <img src={image} alt="Feature" className="w-32 rounded-full border border-yellow-500 border-double h-32" />
          </div>
          <h2 className="text-2xl  font-bold mb-4 text-center text-gray-800">{title}</h2>
        </div>
      </div>
    );
  }

export default function Advantages() {
  const features = [
    {
      image: Advantage1,
      title: "Conceptual Classes",
    },
    {
      image: Advantage2,
      title: "No.1 Faculty",
    },
    {
      image: Advantage3,
      title: "Digital Classroom",
    },
    {
      image: Advantage4,
      title: "Latest Study Material",
    },
    {
      image: Advantage5,
      title: "OMR Base Test",
    },
    {
      image: Advantage6,
      title: "CBT Based Test",
    },
    {
      image: Advantage7,
      title: "Doubt Clearing Session",
    },
    {
      image: Advantage8,
      title: "Focus on Strategy",
    },
    // Add more features as needed
  ];

  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl font-sans font-bold mb-8 mx-1">
            - Advantage of MKC -
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
