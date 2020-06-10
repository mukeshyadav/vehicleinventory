import { useState, useEffect } from "react";

export function useApi(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData(data);
  }, []);

  const getApiData = async () => {
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData);
  };
  return data;
}
