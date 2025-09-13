import React, { useEffect, useState } from "react";
import api from "../service/apiGateway";

const useGetPropertyDetails = ( id ) => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchdata = async () => {
    try {
      
      setLoading(true);
      const response = await api.get(`/property/${id}`);
      console.log("reviews", response?.data);
      setData(response?.data);
      setFetched(true);
      setLoading(false);
      console.log("response", response);
    } catch (error) {
      console.log("error while property details", error);
      setError(error);
      setLoading(false);
    } finally {
     
    }
  };

  useEffect(() => {
    if (id) fetchdata();
  }, [id]);

  return { fetched, loading, error, data };
};

export default useGetPropertyDetails;
