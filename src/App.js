import React, { useContext, useReducer, useEffect } from "react";

import Header from "./components/header";
import IcoFilter from "./images/filter.svg";
import IcoAdd from "./images/add.svg";
import VehicleList from "./components/VehicleList";

import VehicleContext from "./context";
import VehicleReducer from "./reducer";
import { useApi } from "./hooks/useApi";

export default function App() {
  const initialAppState = useContext(VehicleContext);
  const [state, dispatch] = useReducer(VehicleReducer, initialAppState);
  const allVehiclesData = useApi("http://localhost:3001/vehicles");

  useEffect(() => {
    dispatch({ type: "GET_VEHICLES", payload: allVehiclesData });
  }, [allVehiclesData]);

  return (
    <VehicleContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header />
        <div className="flex mb-4 pt-20 px-6 w-full max-w-screen-xl mx-auto">
          <div className="w-1/4">
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <h2 className="text-lg font-bold">Vehicle</h2>
              <div className="inline-flex">
                <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border border-gray-500 rounded-l">
                  <img src={IcoFilter} alt="Apply Filter" className="h-5" />
                </button>
                <button className="bg-transparent hover:bg-gray-200 py-2 px-4 border-gray-500 border rounded-r">
                  <img src={IcoAdd} alt="Apply Filter" className="h-5" />
                </button>
              </div>
            </div>
            <div className="results">
              <VehicleList />
            </div>
          </div>
          <div className="w-3/4"></div>
        </div>
      </div>
    </VehicleContext.Provider>
  );
}
