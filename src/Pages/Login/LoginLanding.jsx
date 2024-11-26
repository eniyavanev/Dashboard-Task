import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const LoginLanding = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(your-image-url)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-8 text-center space-y-6">
          <img src="" alt="Logo" className="w-[90px] h-[90px] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Grow your Business Exponentially!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pay less on each transaction you make with our App.
          </p>

          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 0 ? "bg-gray-800" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <div className="space-y-4">
            <Link to="/login">
              <Button className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white py-3 rounded-lg text-xl font-semibold transform hover:scale-105 transition-all duration-300">
                Login
              </Button>
            </Link>
            <Button className="w-full bg-white text-[#668D12] font-semibold py-3 rounded-lg text-xl border-2 border-[#668D12] transform hover:scale-105 transition-all duration-300">
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            By clicking, you agree to our{" "}
            <a href="#" className="text-black font-medium">
              Terms & Condition
            </a>{" "}
            and{" "}
            <a href="#" className="text-black font-medium">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
