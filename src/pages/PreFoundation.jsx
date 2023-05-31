import React from "react";
import { Navbar, Footer } from "../Components/HomeComponents";

function PreFoundation({
  Content,
  Class,
  CourseDuration,
  AdmissionFee,
  TotalFee,
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="mx-2">
        <h1 className="text-center my-4 text-4xl font-sans font-bold">
          Pre-Foundation Class {Class}
        </h1>

        <div class="container mx-auto py-8">
          <h1 class="text-3xl font-bold mb-4">Class {Class}</h1>
          <p class="text-gray-900 text-lg mb-8">{Content}</p>
          <div class="mb-8">
            <h2 class="text-2xl font-bold mb-2">Features</h2>
            <ul class="list-disc list-inside ml-8 text-gray-800">
              <li class="mb-2">Interactive learning materials</li>
              <li class="mb-2">Dedicated faculty members</li>
              <li class="mb-2">Regular assessments and feedback</li>
              <li class="mb-2">Personalized attention to each student</li>
            </ul>
          </div>

          <div class="mb-8">
            <h2 class="text-3xl font-bold text-blue-600 mb-4">
              Syllabus For {Class}
            </h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white shadow-md rounded-md">
                <thead>
                  <tr>
                    <th class="text-left px-4 py-2 bg-gray-200 text-gray-700">
                      Subject
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-gray-100">
                    <td class="border px-4 py-2">Math</td>
                  </tr>
                  <tr class="bg-gray-200">
                    <td class="border px-4 py-2">Science</td>
                  </tr>
                  <tr class="bg-gray-100">
                    <td class="border px-4 py-2">Social Science</td>
                  </tr>
                  <tr class="bg-gray-200">
                    <td class="border px-4 py-2">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold text-blue-600 mb-4">
              Class {Class} Fee
            </h2>
            <table class="w-full bg-white shadow-md rounded-md overflow-hidden">
              <tbody>
                <tr class="bg-gray-100">
                  <th class="px-4 py-2">Duration of Course</th>
                  <td class="px-4 py-2">{CourseDuration} year</td>
                </tr>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2">Registration Fee</th>
                  <td class="px-4 py-2">525</td>
                </tr>
                <tr class="bg-gray-100">
                  <th class="px-4 py-2">Admission Fee</th>
                  <td class="px-4 py-2">{AdmissionFee}</td>
                </tr>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2">Net Payable Fee</th>
                  <td class="px-4 py-2">{AdmissionFee + 525}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PreFoundation;
