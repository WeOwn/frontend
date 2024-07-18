import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Propertycard } from "../../components/propertyCard/Propertycard";
import stardesign2 from "./stardesign2.svg";
import IntroContainer from "../../Atoms/introContainer/IntroContainer";
import PropertyCardSlider from "../../components/propertyCardSlider";
import api from "../../service/apiGateway";

const Section8 = ({ builder }) => {
  const List1 = [
    {
      id: "1",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "2",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
    {
      id: "3",
      img: "imglink",
      heading: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
      detail1: "4-Bedrooms",
      detail2: "3-Bathrooms",
      detail3: "Villa",
      price: "$550,000",
    },
  ];

  const [data, setdata] = useState(null);
  const [projects, setProjects] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get(`/builder/profile/${builder}`);

      setdata(response.data);

      const projectRequests = response?.data?.projects?.map((projectId) => {
        return api.get(`/property/${projectId}`);
      });

      const projectResponses = await Promise.all(projectRequests);
      const filteredProjects = projectResponses.filter(
        (project) => project.data !== null
      );
      setProjects([...filteredProjects]);
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [builder]);

  console.log("projects section8-> ", projects);
  return (
    <div>
      <IntroContainer
        stardesign={stardesign2}
        heading={`Projects By ${data?.name}`}
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
