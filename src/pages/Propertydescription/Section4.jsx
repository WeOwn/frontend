import React from "react";
import homelogo from "./homelogo.svg";
import zoomlogo from "./zoomlogo.svg";
import locationimg from "./locationimg.svg";

const Section4 = () => {
  const list1 = [
    "Restaurants",
    "Pools",
    "Markets",
    "Schools",
    "Hospital",
    "Metro",
  ];

  return (
    <div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>
        Explore Neighbourhood - Map View
      </h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "grey", width: "80%" }}>
          Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way
        </p>
        <div
          style={{
            backgroundColor: "#F6F6F6",
            padding: "0.8rem 1rem",
            border: "1px solid #E3E3E3",
            borderRadius: "5px",
            fontSize: "0.9rem",
            fontWeight: "550",
          }}
        >
          Full Map View
        </div>
      </div>

      {/* Map container <div></div> */}
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <img src={locationimg} alt="img" style={{ width: "100%" }} />
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          width: "98%",
          marginInline: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {list1.map((btnname, index) => {
            return (
              <div
                style={{
                  padding: "0.3rem 0.5rem",
                  border: "1px solid #E3E3E3",
                  borderRadius: "15px",
                  fontSize: "0.75rem",
                  fontWeight: "550",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    padding: "0.5rem 0.3rem",
                    // backgroundColor: "rgba(112, 101, 240, 0.14)",
                    border: "1px solid #E3E3E3",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={homelogo} alt="logo_img" style={{ width: "70%" }} />
                </div>
                <span> {btnname}</span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            padding: "0.5rem 0.3rem",
            backgroundColor: "rgba(112, 101, 240, 0.14)",

            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={zoomlogo} alt="logo_img" style={{ width: "70%" }} />
        </div>
      </div>
    </div>
  );
};

export default Section4;
