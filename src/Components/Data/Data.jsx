import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdAddShoppingCart,
  MdOutlinePerson,
} from "react-icons/md";
import { FiTruck } from "react-icons/fi";

// Header Icons
export const userIcons = [
  { content: "XCoins: 300🪙", style: "text-[10px] md:text-lg font-medium" },
  { icon: <FaHandHoldingUsd />, style: "text-xl md:text-2xl" },
  { icon: <IoIosNotifications />, style: "text-xl md:text-2xl" },
  { icon: <IoPerson />, style: "text-xl md:text-2xl" },
];

// Sidebar Icons
export const menuItems = [
  {
    icon: <MdOutlineDashboard size={25} className="text-[#668D12]" />,
    label: "Dashboard",
  },
  { icon: <FiTruck size={25} className="text-[#668D12]" />, label: "Orders" },
  {
    icon: <MdAddShoppingCart size={25} className="text-[#668D12]" />,
    label: "My Products",
  },
  {
    icon: <MdOutlinePerson size={25} className="text-[#668D12]" />,
    label: "Profile",
  },
];

// Store
export const stores = [
  {
    id: 12345,
    name: "Annapoorna Hotel",
    location: "Sitra, Coimbatore",
  },
  {
    id: 22345,
    name: "Annapoorna Hotel",
    location: "L&T, Coimbatore",
  },
];
