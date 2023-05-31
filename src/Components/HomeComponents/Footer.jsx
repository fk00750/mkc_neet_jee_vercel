import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "logo" || "logo_name":
        navigate("/");
        break;
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="md:col-span-2 lg:col-span-3">
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
          <p className="text-sm mb-4">
            Major Kalshi Classes, a renowned coaching institute for NEET and JEE
            exams, has recently launched its new website with the aim of
            providing a seamless and comprehensive online learning experience to
            aspiring medical and engineering students.
          </p>
          <p className="text-sm">
            Address: 105/244, Shapath Building, Tagore Town, Prayagraj, Uttar
            Pradesh - 211002
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Admissions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">Phone: (+91) 9696330033</p>
          <p className="text-sm mb-2">Email: support@majorkalshiclasses.com</p>
          <p className="text-sm">Follow us on social media:</p>
          <div className="flex space-x-2 mt-2">
            <a
              href="https://www.facebook.com/majorkalshiclasses"
              className="text-sm text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/MajKalshiClases"
              className="text-sm text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/major_kalshi_classes"
              className="text-sm text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Major Kalshi Classes. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
