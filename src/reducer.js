import { act } from "react-dom/test-utils";

export default function vehicleReducer(state, action) {
  switch (action.type) {
    case "GET_VEHICLES":
      const vehicles = [...state.vehicles, ...action.payload];
      return { ...state, vehicles: vehicles };
      break;
    case "ADD_VEHICLE":
      return state;
      break;
    default:
      return state;
  }
}
