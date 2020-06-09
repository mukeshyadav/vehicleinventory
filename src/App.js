import React, { useContext, useReducer } from "react";

import Header from "./components/header";

import VehicleList from "./components/VehicleList";
import Filters from "./components/Filter";

import VehicleContext from "./context";
import VehicleReducer from "./reducer";

export default function App() {
  const initialAppState = useContext(VehicleContext);
  const [state, dispatch] = useReducer(VehicleReducer, initialAppState);

  return (
    <VehicleContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <Header />
        <div className="flex mb-4 pt-20 px-6 w-full max-w-screen-xl mx-auto">
          <div className="w-1/4">
            <Filters />
            <VehicleList />
          </div>
          <div className="w-3/4"></div>
        </div>
      </div>
    </VehicleContext.Provider>
  );
}
