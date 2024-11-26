// src/Pages/Dashboard/Dashboard.js
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import SlideAction from "../../Components/SlideAction/SlideAction";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className=" mt-[70px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SlideAction />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;




 
 

 


 

