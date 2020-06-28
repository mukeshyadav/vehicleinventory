import React from "react";

const vehicleContext = React.createContext({
  vehicles: [],
  currentVehicle: null
});

export default vehicleContext;
