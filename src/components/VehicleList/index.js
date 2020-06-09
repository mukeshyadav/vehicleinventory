import React, { useContext, useEffect, useState } from "react";
import vehicleContext from "../../context";
import { useInfniteScroll } from "../../hooks/useInfiniteScroll";
import { useApi } from "../../hooks/useApi";

export default function VehicleList() {
  const { state, dispatch } = useContext(vehicleContext);
  const [isFetching, setIsFetching] = useInfniteScroll(fetchMoreListItems);
  const [currentPageIndex, setPageIndex] = useState(1);

  let allVehiclesData = useApi(
    `http://localhost:3001/vehicles?_page=${currentPageIndex}&_limit=5`
  );

  useEffect(() => {
    dispatch({ type: "GET_VEHICLES", payload: allVehiclesData });
  }, [currentPageIndex]);

  function fetchMoreListItems() {
    setTimeout(() => {
      setPageIndex(currentPageIndex + 1);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <div className="results">
      <ul>
        {state.vehicles.map(vehicle => (
          <li className="border-b pb-2 pt-2" key={vehicle.id}>
            {vehicle.model} ({vehicle.qty})
          </li>
        ))}
        {isFetching && "Fetching more vehicles..."}
      </ul>
    </div>
  );
}
