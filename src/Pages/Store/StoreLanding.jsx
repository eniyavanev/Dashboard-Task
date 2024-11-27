import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Logo from "../../assets/Images/storeLogo.png";
import Background from '../../assets/Images/loginbg1.png'

const StoreLanding = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-xl shadow-lg w-11/12 sm:w-96 p-8 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <img src={Logo} alt="Logo" className="w-48 h-36 object-contain" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">
              No stores are linked to this account
            </h1>
            <p className="text-lg text-gray-600">
              Enter your account details correctly or register your store with
              us.
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/selectstore">
              <Button className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white py-3 rounded-lg transform transition-transform hover:scale-105">
                Register your Store with us
              </Button>
            </Link>

            <div className="rounded-md bg-gradient-to-r from-[#668D12] to-[#ACC43F] p-[1px]">
              <Button className="w-full bg-white text-[#668D12] font-semibold py-3 px-4 rounded-md ">
                Login with a different account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLanding;
