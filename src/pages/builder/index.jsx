import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import api from "../../service/apiGateway";
import { useParams } from "react-router-dom";

const Index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const fetchdata = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/builder/profile/${id}`);
      // const data=response.data.data;
      // console.log("desc response-> ", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const {
    images,
    _id,
    email,
    name,
    projects,
    location,
    description,
    ratings,
    organization,
  } = data;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  return (
    <div className={styles.wrapper}>
      <div className={styles.maindiv}>
        <div className={styles.section1}>
          <Section1
            image={images?.length > 0 ? images[0] : null}
            name={name}
            description={description}
            location={location}
            ratings={ratings}
            projectCount={projects?.length}
          />
        </div>
        <div className={styles.section2}>
          <Section2 projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Index;
