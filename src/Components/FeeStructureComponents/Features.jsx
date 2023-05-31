import React from "react";

const Content = [
  {
    icon: "📖",
    text: "Regular Class",
  },
  {
    icon: "🖥",
    text: "Digital Classroom",
  },
  {
    icon: "📝",
    text: "Regular Test",
  },
  {
    icon: "📚",
    text: "Study Material",
  },
  {
    icon: "📮",
    text: "Doubt Session",
  },
  {
    icon: "👩‍🏫",
    text: "Revision Classes",
  },
  {
    icon: "🗓",
    text: "Monthly Unit Test",
  },
  {
    icon: "⏱",
    text: "All India Mock Test",
  },
  {
    icon: "🖨",
    text: "CBT Lab Material",
  },
  {
    icon: "📑",
    text: "Board Pattern Test",
  },
];

function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">MKC Unique Features</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Content.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center"
          >
            <span className="text-2xl mr-4">{item.icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
