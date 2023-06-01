import React from "react";
import { useState } from "react";
import OTPBanner from "../OTPbanner";

function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [OTP, setOTP] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Courses = [
      {
        name: "JEE(MAIN+ADVANCE)",
        code: "459",
        batchId: "809",
      },
      {
        name: "NEET(UG)",
        code: "460",
        batchId: "809",
      },
      {
        name: "PRE Foundation (9 and 10)",
        code: "467",
        batchId: "809",
      },
      {
        name: "PRE Foundation (10)",
        code: "468",
        batchId: "809",
      },
    ];

    const selectedCourseObj = Courses.find(
      (course) => course.name === selectedCourse
    );

    if (selectedCourseObj) {
      const selectedCourseCode = selectedCourseObj.code;

      const data = {
        sname: name,
        smobile: phoneNumber,
        scourse: selectedCourseCode,
        squery: message,
        enquirypage: "mkcneet",
        sstate: selectedState,
      };

      console.log(data);

      try {
        const response = await fetch(
          "https://menu.majorkalshiclasses.com/enq/enquiry",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          const data = await response.text();
          console.log(data);
          setName("");
          setPhoneNumber("");
          setSelectedCourse("");
          setSelectedState("");
          setMessage("");

          // Make a POST request to fetch the OTP
          try {
            const response = await fetch(
              "https://menu.majorkalshiclasses.com/otp",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  mobile: phoneNumber,
                }),
              }
            );

            if (response.ok) {
              const data = await response.json();

              setOTP(data.otp);
              setFormSubmitted(true);
            }
          } catch (error) {
            console.error("Error while fetching OTP:", error);
          }

          ////
        } else {
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log(`Course '${selectedCourse}' not found.`);
    }
  };

  return (
    <div className="bg-white mx-auto px-2 py-2 rounded-md mb-16">
      <h1 className="text-center text-white rounded-md py-1 mb-5 bg-gray-700 px-2 mx-4">
        Talk To Our Expert
      </h1>

      {formSubmitted && (
        <div className="fixed top-5 left-0 right-0 flex justify-center text-white px-4 py-2">
          {/* Add your OTPBanner content here */}
          <OTPBanner OTP={OTP} />
        </div>
      )}

      <form className="mx-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-78 lg:top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[1-9][0-9]{9}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={phoneNumber}
              onChange={(e) => {
                e.preventDefault();
                setPhoneNumber(e.target.value);
              }}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 lg:top-1 lg:text-base -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contact number
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="floating_state"
              id="floating_state"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              value={selectedState}
              onChange={(e) => {
                e.preventDefault();
                setSelectedState(e.target.value);
              }}
            >
              <option value="">Select State</option>
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              {/* Remaining options */}
            </select>
            <label
              htmlFor="floating_state"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Select State
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="floating_course"
              id="floating_course"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              value={selectedCourse}
              onChange={(e) => {
                e.preventDefault();
                setSelectedCourse(e.target.value);
              }}
            >
              <option value="">Select Course</option>
              <option value="NEET(UG)">NEET(UG)</option>
              <option value="JEE(MAIN+ADVANCE)">JEE(MAIN+ADVANCE)</option>
              <option value="PRE Foundation (9 and 10)">
                PRE Foundation (9 and 10)
              </option>
              <option value="PRE Foundation (10)">PRE Foundation (10)</option>
              {/* Remaining options */}
            </select>
            <label
              htmlFor="floating_course"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Select Course
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            name="floating_message"
            id="floating_message"
            className="block py-2.5 px-0 w-full lg:h-10 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={message}
            onChange={(e) => {
              e.preventDefault();
              setMessage(e.target.value);
            }}
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Your Query
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
