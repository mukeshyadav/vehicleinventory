import React, { useContext } from "react";
import vehicleContext from "../../context";

export default function VehicleList() {
  const { state, dispath } = useContext(vehicleContext);
  return (
    <ul>
      {state.vehicles.map(vehicle => (
        <li className="border-b pb-2 pt-2" key={vehicle.id}>
          {vehicle.model} ({vehicle.qty})
        </li>
      ))}
    </ul>
  );
}
