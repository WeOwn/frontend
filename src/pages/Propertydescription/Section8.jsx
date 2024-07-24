import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import PropertyCardSlider from "../../components/propertyCardSlider";
import api from "../../service/apiGateway";

const Section8 = ({ builder }) => {
  const [data, setdata] = useState(null);
  const [projects, setProjects] = useState(null);

  const fetchData = async () => {
    try {
      console.log("call");
      const response = await api.get(
        `/property/list?min-price=0&page=page-1&builder=${builder}`
      );
      console.log("projects->", response);

      setProjects(response?.data?.data);
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    if (builder) {
      fetchData();
    }
  }, [builder]);

  console.log("projects section8-> ", projects);
  return (
    <div>
      <IntroContainer
        stardesign={stardesign2}
        heading={`Projects By ${data?.name || "Builder"}`}
        desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way `}
        btntext="View All Projects"
        path={`/builder/${builder}`}
      />
      <PropertyCardSlider projects={projects} />
    </div>
  );
};

export default Section8;
