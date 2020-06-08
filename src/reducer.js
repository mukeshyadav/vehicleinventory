export default function vehicleReducer(state, action) {
  switch (action.type) {
    case "GET_VEHICLES":
      return { ...state, vehicles: action.payload };
      break;
    case "ADD_VEHICLE":
      return state;
      break;
    default:
      return state;
  }
}
