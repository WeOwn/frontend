import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
// import house1 from "./house1.svg";
// import house2 from "./house2.svg";
// import house3 from "./house3.svg";
// import bighouse1 from "./bighouse1.svg";
// import bighouse2 from "./bighouse2.svg";
import Toggle from "./Toggle.jsx";

import Homecard from "../../components/homecard";
import { useParams } from "react-router-dom";
import api from "../../service/apiGateway";
import { IoFemale } from "react-icons/io5";

const Section2 = ({ projects }) => {
  const [builderprojects, setbuilderProjects] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log("projects-> ", projects);

  const fetchdata = async () => {
    console.log("Fetching data...");
    try {
      const projectRequests = projects?.map((projectId) => {
        console.log(`Requesting project with ID: ${projectId}`);
        return api.get(`/property/${projectId}`);
      });

      const projectResponses = await Promise.all(projectRequests);
      console.log("Project responses received:", projectResponses);

      setbuilderProjects(projectResponses?.map((res) => res.data));
      console.log(
        "Builder projects set:",
        projectResponses?.map((res) => res.data)
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    if (projects?.length) fetchdata();
  }, [projects?.length]); // Ensure this dependency array is empty

  console.log("builder project-> ", builderprojects);

  const list = [
    {
      id: 1,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 2,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(81, 144, 157, 0), rgba(81, 144, 157, 1))",
    },
    {
      id: 3,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(78, 99, 55, 0), rgba(78, 99, 55, 1))",
    },
    {
      id: 4,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 5,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
    {
      id: 6,

      bgopacitycolor:
        "linear-gradient(to bottom, rgba(119, 123, 4, 0), rgba(119, 123, 4, 1))",
    },
  ];

  return (
    <div className={styles.section2Container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          // backgroundColor: "green",
        }}
      >
        <h4 style={{ whiteSpace: "wrap" }}>Popular Projects</h4>
        <div
          className={styles.section2fleximgdivp}
          // styles={{ backgroundColor: "red" }}
        >
          {builderprojects?.map((project, index) => {
            return (
              <div
                key={project?._id}
                style={{
                  width: "23%",
                  aspectRatio: "0.8",
                  borderRadius: "10px",
                }}
              >
                <Homecard
                  project={project}
                  type={"small"}
                  list={list[index % 6]}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <h4>All Projects</h4>
        <Toggle />
        <div className={styles.section2gridimgdivp}>
          {builderprojects?.map((project, index) => {
            return (
              <div
                key={project?._id}
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  borderRadius: "10px",
                }}
              >
                <Homecard project={project} type={"small"} list={list[index]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
