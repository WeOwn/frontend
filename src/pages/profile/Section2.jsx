import React from "react";
import Search from "./Search.svg";

const Section2 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        // width: "20rem",
      }}
    >
      <div>
        <img src={Search} alt="img" style={{ width: "100%" }} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",

            width: "fit-content",
          }}
        >
          You haven't searched anything yet!
        </h4>

        <p style={{ marginTop: "1rem" }}>
          You will see your search history here, once you start searching for
        </p>
        <p style={{ marginTop: "0.3rem" }}>
          properties, projects, localities or cities.
        </p>
      </div>
    </div>
  );
};

export default Section2;
