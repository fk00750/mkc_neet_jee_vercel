import React from "react";
import contactBg from "../../../public/contact.jpg";
import ContactForm from "./ContactForm";

function Header() {
  return (
    <div className="container mx-auto py-4">
      <div className="p-4 flex flex-col md:flex-row items-center">
        {/* About Content */}
        <div className="md:w-1/2 md:pr-4 text-center md:text-left">
          <ContactForm />
        </div>
        {/* Image */}
        <div className="md:w-1/2 md:pl-4">
          <img src={contactBg} alt="About Background" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Header;
