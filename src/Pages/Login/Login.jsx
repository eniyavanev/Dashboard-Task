import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { generateOtpApi } from "../../api/login";
import Logo from "../../assets/Images/logo1.png";
import Background from '../../assets/Images/loginbg1.png'
const Login = () => {
  const [contactNo, setContactNo] = useState("");
  const [dialCode, setDialcode] = useState("+91");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await generateOtpApi({ dialCode, contactNo });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-8 text-center space-y-6">
          <img src={Logo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />

          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Get Started with Rewardify
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Enter your mobile number or Shop ID to get started
          </p>

          <input
            type="text"
            className="w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#668D12]"
            placeholder="Enter Shop ID / Mobile Number"
            autoComplete="off"
            name="contactNo"
            onChange={(e) => setContactNo(e.target.value)}
            required
          />

          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white font-semibold py-3 rounded-lg text-xl border-2 border-[#668D12] transform hover:scale-105 transition-all duration-300"
          >
            Send OTP
          </Button>

          <p className="text-sm text-gray-400 mt-4">
            By clicking, you agree to our{" "}
            <a href="#" className="text-black font-medium">
              Terms & Conditions
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

export default Login;
