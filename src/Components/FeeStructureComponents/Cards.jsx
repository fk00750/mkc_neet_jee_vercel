import React from "react";

const Content = [
  {
    heading: "Foundation Course After Class X",
    subheading: "Duration: 2 years",
  },
  {
    heading: "Foundation Course After Class XI",
    subheading: "Duration: 1 year",
  },
  {
    heading: "Foundation Course After Class XII",
    subheading: "Duration: 1 year",
  },
];

function Cards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center"
          >
            <h1 className="text-2xl font-bold mb-4">{`🔅 ${item.heading}`}</h1>
            <h3 className="text-lg text-white">{item.subheading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
