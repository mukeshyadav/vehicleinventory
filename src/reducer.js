export default function vehicleReducer(state, action) {
  switch (action.type) {
    case "GET_VEHICLES":
      const vehicles = [...state.vehicles, ...action.payload];
      return { ...state, vehicles: vehicles };
    case "SET_CURRENT_VEHICLE":
      const currentVehicle = state.vehicles.filter(
        vehicle => action.payload === vehicle.id
      );
      return { ...state, currentVehicle: currentVehicle };
    case "ADD_VEHICLE":
      return state;
      break;
    default:
      return state;
  }
}
