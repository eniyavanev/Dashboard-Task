// src/Components/Sidebar/Sidebar.js
import React from "react";
import Shop from "../../assets/Images/sidebar-img.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:block absolute md:static bg-gray-50 h-screen w-full md:w-1/4 lg:w-1/5 px-6 py-[10%] font-inter shadow-lg`}
    >
      <button
        onClick={closeSidebar}
        className="md:hidden absolute top-4 right-4 text-xl"
      >
        <IoCloseOutline size={30} />
      </button>
      <section>
        {/* Shop Info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={Shop}
            alt="Shop Logo"
            className="w-24 md:w-32 rounded-lg border-2 border-gray-300"
          />
          <p className="text-lg font-bold mt-4 flex items-center space-x-2 capitalize">
            <span>Kannan Departmental</span>
            <IoIosArrowDown className="text-gray-500" />
          </p>
          <small className="text-sm text-gray-400 mt-1">Shop ID: 1234567890</small>
        </div>

        {/* Navigation Menu */}
        <div className="mt-10">
          <ul className="space-y-6">
            <li className="sidebar_item flex items-center text-md font-medium text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-2">
              <MdOutlineDashboard size={25} className="text-[#668D12]" />
              <span className="ml-4">Dashboard</span>
            </li>
            <li className="sidebar_item flex items-center text-md font-medium text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-2">
              <FiTruck size={25} className="text-[#668D12]" />
              <span className="ml-4">Orders</span>
            </li>
            <li className="sidebar_item flex items-center text-md font-medium text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-2">
              <MdAddShoppingCart size={25} className="text-[#668D12]" />
              <span className="ml-4">My Products</span>
            </li>
            <li className="sidebar_item flex items-center text-md font-medium text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-2">
              <MdOutlinePerson size={25} className="text-[#668D12]" />
              <span className="ml-4">Profile</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
