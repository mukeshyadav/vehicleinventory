import React, { useContext } from "react";
import vehicleContext from "../../context";

export default function VehicleDetails() {
  const { state } = useContext(vehicleContext);

  return (
    <div className="pt-12 pb-16 lg:p-12 w-full">
      {!state.currentVehicle && "Please select a vehicle for details"}
      {state.currentVehicle && (
        <div className="something">
          <p>
            Brand: {state.currentVehicle[0]?.brand} || Year:
            {state.currentVehicle[0]?.year}
          </p>
          <p>Model: {state.currentVehicle[0]?.model}</p>
          <p>Price: {state.currentVehicle[0]?.price}</p>
          <p>Qty: {state.currentVehicle[0]?.qty}</p>
        </div>
      )}
    </div>
  );
}
