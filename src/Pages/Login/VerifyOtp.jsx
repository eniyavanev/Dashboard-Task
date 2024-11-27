import React, { useState, useEffect, useRef } from "react";
import Button from "../../Components/Button/Button";
import Logo from "../../assets/Images/logo1.png";
import Background from '../../assets/Images/loginbg1.png'

const VerifyOtp = () => {
  const [seconds, setSeconds] = useState(55);
  const [timerExpired, setTimerExpired] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    if (seconds > 0 && !timerExpired) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (seconds === 0) {
      setTimerExpired(true);
    }
  }, [seconds, timerExpired]);

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setSeconds(55);
    setTimerExpired(false);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-8 text-center space-y-6">
          <img src={Logo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />

          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Verify Your Details
          </h1>
          <p className="text-gray-600 text-lg mb-4">Enter OTP number below</p>

          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="password"
                maxLength="1"
                className="w-16 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <Button className="w-full bg-white text-[#668D12] font-semibold py-3 rounded-lg text-xl border-2 border-[#668D12] transform hover:scale-105 transition-all duration-300">
            Verify and Continue
          </Button>

          <p
            className={`text-sm mt-4 ${
              timerExpired ? "text-red-500" : "text-gray-400"
            }`}
          >
            Didn't receive OTP? Resend in{" "}
            {seconds < 10 ? `0:0${seconds}` : `0:${seconds}`}
          </p>

          {timerExpired && (
            <button
              onClick={handleResend}
              className="text-[#668D12] font-semibold mt-4"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
