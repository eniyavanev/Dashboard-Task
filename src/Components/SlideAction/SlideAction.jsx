import React from "react";
import Slider from "react-slick";
import { FaMoneyBill, FaUserFriends, FaHistory } from "react-icons/fa";
import { TbTransactionRupee, TbReportSearch } from "react-icons/tb";
import { BsFillGiftFill } from "react-icons/bs";
import { PiNotepadBold } from "react-icons/pi";
import { RiRefund2Fill } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideAction = () => {
  const actions = [
    { icon: <PiNotepadBold />, label: "Request to REWARDIFY" },
    { icon: <FaUserFriends />, label: "Refer & Earn" },
    { icon: <TbReportSearch />, label: "Reports" },
    { icon: <RiRefund2Fill />, label: "Refund Transaction" },
    { icon: <FaMoneyBill />, label: "Make Payment" },
    { icon: <TbTransactionRupee />, label: "Settlements" },
    { icon: <FaHistory />, label: "Transaction History" },
    { icon: <BsFillGiftFill />, label: "Gift Cards" },
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 4, 
    centerMode: false, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
      <Slider {...settings}>
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg p-4 w-[160px] h-[160px] transition-transform transform hover:scale-105"
          >
            <div className="text-2xl text-primary">{action.icon}</div>
            <span className="text-xs font-semibold text-center mt-2">
              {action.label}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideAction;
