import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNeetDropdownOpen, setNeetDropdownOpen] = useState(false);
  const [isJeeDropdownOpen, setJeeDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isPreFoundationDropdownOpen, setPreFoundationDropdownOpen] =
    useState(false);

  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNeetDropdownToggle = () => {
    setNeetDropdownOpen(!isNeetDropdownOpen);
  };

  const handleJeeDropdownToggle = () => {
    setJeeDropdownOpen(!isJeeDropdownOpen);
  };

  const handleAboutDropdownToggle = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const handlePreFoundationDropdownToggle = () => {
    setPreFoundationDropdownOpen(!isPreFoundationDropdownOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "neet_course":
        navigate("/neet-course");
        break;
      case "jee_course":
        navigate("/jee-course");
        break;
      case "neet_syllabus":
        navigate("/neet-syllabus");
        break;
      case "jee_syllabus":
        navigate("/jee-syllabus");
        break;
      case "neet_notification":
      case "jee_notification":
        navigate("/notification");
        break;
      case "neet_fee":
        navigate("/neet-fee-structure");
        break;
      case "jee_fee":
        navigate("/jee-fee-structure");
        break;
      case "neet_admission":
      case "jee_admission":
        navigate("/admission");
        break;
      case "logo":
        navigate('/')
      case "logo_name":
        navigate("/");
        break;
      case "about_mkc":
        navigate("/about");
        break;
      case "contact_mkc":
        navigate("/contact");
        break;
      case "pre_foundation":
        navigate("/pre-foundation");
        break;
      case "chairperson_message":
        navigate("/chairperson-message");
        break;
      case "director_message":
        navigate("/director-message");
        break;
      case "pre_foundation_nineten":
        navigate("/pre-foundation-class-nine-ten");
        break;
      case "pre_foundation_ten":
        navigate("/pre-foundation-class-ten");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex justify-between bg-gray-500 items-center py-2 px-4">
        <div className="flex items-center">
          <span className="text-white mr-2">
            <FaPhone />
          </span>
          <a href="tel:+919696330033" className="text-white">
            +919696330033
          </a>
        </div>
        <div className="flex space-x-2 lg:hidden">
          <a
            href="https://mkcerp.com/CBT548/UserLogin.aspx?ClientID=54800"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Login
          </a>
          <a
            href="https://majorkalshiclasses.com/apply-online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Pay now
          </a>
        </div>
      </div>

      <nav className="bg-black text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center mx-auto">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="h-16 mr-3"
                alt="MKC Logo"
                id="logo"
                onClick={handleClick}
              />
              <div className="flex flex-col items-center justify-center">
                <span
                  onClick={handleClick}
                  id="logo_name"
                  className="self-center text-2xl font-semibold whitespace-nowrap"
                >
                  MKC
                </span>
                <span className="text-xs">(NEET+JEE)</span>
              </div>
            </a>
            <button
              type="button"
              className="inline-flex items-center  p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={handleMobileMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 ">
              <li>
                <button
                  className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={handleAboutDropdownToggle}
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  About
                  <svg
                    className={`w-5 h-5 ml-1 ${
                      isAboutDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {isAboutDropdownOpen && (
                    <div className="absolute z-10 mt-36 ml-20 md:ml-0 lg:ml-0 font-normal bg-white rounded-lg divide-y shadow w-44">
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onClick={handleClick}
                            id="chairperson_message"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Chairperson's Message
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={handleClick}
                            id="director_message"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Academic Director's Message
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={handleNeetDropdownToggle}
                  onMouseEnter={() => setNeetDropdownOpen(true)}
                  onMouseLeave={() => setNeetDropdownOpen(false)}
                >
                  NEET
                  <svg
                    className={`w-5 h-5 ml-1 ${
                      isNeetDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {isNeetDropdownOpen && (
                    <div className="absolute z-10 mt-20 font-normal bg-white rounded-lg divide-y shadow w-44">
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onClick={handleClick}
                            id="neet_course"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Course
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={handleJeeDropdownToggle}
                  onMouseEnter={() => setJeeDropdownOpen(true)}
                  onMouseLeave={() => setJeeDropdownOpen(false)}
                >
                  JEE
                  <svg
                    className={`w-5 h-5 ml-1 ${
                      isJeeDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {isJeeDropdownOpen && (
                    <div className="absolute z-10 mt-20 font-normal bg-white divide-y rounded-lg shadow w-44">
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onClick={handleClick}
                            id="jee_course"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Course
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="relative flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 md:w-auto  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={handlePreFoundationDropdownToggle}
                  onMouseEnter={() => setPreFoundationDropdownOpen(true)}
                  onMouseLeave={() => setPreFoundationDropdownOpen(false)}
                >
                  Pre-Foundation
                  <svg
                    className={`w-5 h-5 ml-1 ${
                      isPreFoundationDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {isPreFoundationDropdownOpen && (
                    <div className="absolute z-10 mt-28 font-normal bg-white rounded-lg divide-y shadow w-44">
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            onClick={handleClick}
                            id="pre_foundation_nineten"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            2 year- IX & X
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={handleClick}
                            id="pre_foundation_ten"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            1 year- X
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <a
                  id="contact_mkc"
                  onClick={handleClick}
                  className="block cursor-pointer py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://majorkalshiclasses.com/apply-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 pl-3 pr-4 text-black bg-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 md:py-1 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pay Now
                </a>
              </li>
              <li>
                <a
                  href="https://mkcerp.com/CBT548/UserLogin.aspx?ClientID=54800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 lg:mt-0 md:mt-0 py-2 pl-3 pr-4 text-black bg-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:px-2 md:py-1 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  LogIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
