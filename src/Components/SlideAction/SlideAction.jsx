import React from "react";
import { actions } from "../Data/Data";

const SlideAction = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[100%] mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-100 rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <div className="text-4xl text-blue-500">{action.icon}</div>
            <span className="text-sm font-medium text-center mt-2">
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideAction;
