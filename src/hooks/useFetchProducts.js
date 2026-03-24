import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const fullUrl = `${BASE_URL}${url}`;
      console.log("URL:", fullUrl);

      const response = await axios.get(fullUrl);

      console.log("DATA:", response.data);

      const result = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setData(result);
      setError(null);

    } catch (err) {
      console.error("ERROR:", err);
      setError("Error al cargar datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};
