import React from "react";
import { userIcons } from "../Data/Data";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="shadow-lg font-inter fixed left-0 right-0 z-20 bg-white">
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        <button className="text-gray-500 md:hidden" onClick={toggleSidebar}>
          <RxHamburgerMenu size={25} />
        </button>

        <h1 className="hidden md:flex text-3xl font-semibold bg-gradient-to-r from-[#668D12] to-[#ACC43F] bg-clip-text text-transparent uppercase">
          <i> rewadify</i>
        </h1>
        <h2 className="hidden md:flex text-xl md:text-2xl font-bold text-center md:text-left">
          Welcome,Eniyavan👋
        </h2>

        <ul className="flex items-center justify-center space-x-4 md:space-x-8">
          {userIcons.map((item, index) => (
            <li
              key={index}
              className={`bg-[#F2F8DF] px-3 py-1 rounded-full ${item.style}`}
            >
              {item.content || item.icon}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
