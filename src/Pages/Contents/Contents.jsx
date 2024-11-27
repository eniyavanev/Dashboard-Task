import React from "react";

import SlideAction from "../../Components/SlideAction/SlideAction";
import MyOrders from "../../Components/Myorders/Myorders";
import Transaction from "../../Components/TransactionTab/Transaction";

const Contents = () => {
  return (
    <div className="mt-[110px] px-4">
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        <div className="md:w-[65%] w-[100%] flex flex-col gap-6">
          <SlideAction />
          <Transaction />
        </div>

        
        <div className="md:w-[60%]  w-[100%] md:self-start">
          <MyOrders />
        </div>
      </div>
    </div>
  );
};

export default Contents;
