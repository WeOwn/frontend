import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import stardesign2 from "./stardesign2.svg";
import Button from "../../Atoms/Button";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import PropertyCardSlider from "../../components/propertyCardSlider";
import api from "../../service/apiGateway";
import useGetSimilarProperties from "../../hooks/useGetSimilarProperties";

const Section9 = ({ id }) => {
  // const [properties, setAllProperties] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const propertiesResponse = await api.get(
  //       "/property/list?min-price=0&page=page-1"
  //     );
  //     // console.log("All properties:", propertiesResponse.data.data);
  //     setAllProperties(propertiesResponse.data.data);
  //   } catch (error) {
  //     console.error("Error occurred while fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log("properties section9-> ", properties);

  // const { fetched, loading, error, data } = useGetSimilarProperties(id);
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchdata = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/property/similar/${id}`);
      console.log("reviews", response?.data);
      setData(response?.data);
      setFetched(true);
    } catch (error) {
      console.log("error while fetching similar properties", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchdata();
  }, [id]);

  return (
    <div>
      <IntroContainer
        stardesign={stardesign2}
        heading="Similar Properties"
        desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way `}
        btntext="View All Similar Projects"
      />
      <PropertyCardSlider projects={data?.data} />
    </div>
  );
};

export default Section9;
