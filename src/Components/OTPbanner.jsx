import React, { useState } from "react";

const OTPBanner = ({ OTP }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [isResendEnabled, setIsResendEnabled] = useState(true);
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    setError("");
  };

  const handleResendClick = () => {
    // Logic to resend OTP
    setIsResendEnabled(false); // Disable resend button for a certain period
    // Additional logic if needed
  };

  /**
   * Error: The enteredOTP type is number and OTP is string which causing incorrect OTP
   */
  const handleVerifyClick = () => {
    // Logic to verify OTP
    const enteredOTP = otp.join("")
    if (enteredOTP === OTP) {
      // OTP is correct
      setError("");
      setIsVerified(true);
      // Additional logic if needed
    } else {
      // OTP is incorrect
      setError("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="bg-blue-500 py-4 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {!isVerified && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="flex p-2 rounded-lg bg-blue-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white">
                <span className="md:hidden">OTP Verification</span>
                <span className="hidden md:inline">
                  Please enter the OTP code sent to your email.
                </span>
              </p>
            </div>
            <div>
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {isVerified ? (
          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold mb-2">Thank You!</h2>
            <p className="text-lg">Your Enquiry has been successfully submitted.</p>
          </div>
        ) : (
          <div>
            <div className="mt-4 flex items-center justify-center">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-${index}`}
                  value={value}
                  maxLength={1}
                  className="w-12 h-12 text-2xl mx-1 text-center rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-black"
                  onChange={(e) => handleOTPChange(index, e.target.value)}
                />
              ))}
            </div>
            {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  otp.join("").length === 4
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleVerifyClick}
                disabled={otp.join("").length !== 4}
              >
                Verify OTP
              </button>
              <button
                type="button"
                className={`ml-3 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isResendEnabled
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleResendClick}
                disabled={!isResendEnabled}
              >
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPBanner;
