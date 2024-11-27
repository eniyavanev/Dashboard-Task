import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { stores } from "../../Components/Data/Data";

import Background from '../../assets/Images/loginbg1.png'


const Store = () => {
  const [selectedStore, setSelectedStore] = useState(null);

 

  const handleSelect = (id) => {
    setSelectedStore(id);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60">
        
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white rounded-xl shadow-xl w-11/12 sm:w-96 p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Select Your Store
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Your number is connected with 2 stores.
          </p>

          <div className="space-y-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className={`flex items-center gap-4 p-4 border rounded-lg ${
                  selectedStore === store.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <img src={store.image} alt=""  className="w-14 h-14 rounded-md"/>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {store.name}
                  </h3>
                  <p className="text-sm text-gray-500">{store.location}</p>
                  <p className="text-sm text-gray-500">Store ID: {store.id}</p>
                </div>
                <input
                  type="radio"
                  name="store"
                  className="w-5 h-5 text-[#668D12] focus:ring-[#668D12]"
                  checked={selectedStore === store.id}
                  onChange={() => handleSelect(store.id)}
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Button
              disabled={!selectedStore}
              className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#668D12] to-[#ACC43F] transform transition-transform duration-200 hover:scale-105"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
