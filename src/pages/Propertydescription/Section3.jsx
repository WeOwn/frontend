import React from "react";
import styles from "./styles.module.css";
import housegrid1 from "./housegrid1.svg";
import housegrid2 from "./housegrid2.svg";
import home1 from "./home1.svg";
import "@google/model-viewer/dist/model-viewer";
import houseinterior3 from "./house_compressed.glb";
import SocietyGlb from "./Society_compressed.glb";

const Section3 = () => {
  const list1 = [
    {
      heading: "Property Transfer Tax",
      price: "$25,000",
      para: "Based on the sales price and local regulations",
    },
    {
      heading: "Legal Fees",
      price: "$3,000",
      para: "Approximate cost for legal services, including the transfer",
    },
  ];

  const list12 = [
    {
      heading: "Home Inspection",
      price: "$500",
      para: "Recommended for due dilligence",
    },
    {
      heading: "Property Insurance",
      price: "$1,200",
      para: "Annual cost for comprhensive property insurance",
    },
  ];
  const list13 = [
    {
      heading: "Mortgage Fees",
      price: "Varies",
      para: "if applicable, consult with your lender for specific details",
    },
  ];
  const list2 = [home1, home1, home1, home1, home1, home1, home1, home1, home1];
  return (
    <div>
      <div className={styles.section3div1}>
        <div>
          <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>
            Comprehensive Pricing Details
          </h4>
          <p style={{ marginTop: "0.9rem", fontWeight: "550", width: "80%" }}>
            At Estatein, transparency is key. We want you to have a clear
            undertanding of all costs associated with your property investment.
            Below, we break down the pricing for Seaside Sereanity Villa to help
            you make an informed decision
          </p>
        </div>
        <div
          style={{
            padding: "1.5rem 2rem",
            border: "1px solid #7065f0",
            borderRadius: "10px",
            color: "#7065f0",
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>Note</span>
          <span
            style={{
              padding: "0.2rem 0.5rem",
              borderLeft: "1px solid #7065f0",

              fontWeight: "550",

              fontSize: "0.9rem",
            }}
          >
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </span>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <p style={{ fontSize: "0.9rem", fontWeight: "550" }}>Listing Price</p>
          <p
            style={{ fontSize: "2rem", fontWeight: "600", marginTop: "0.5rem" }}
          >
            $1,250,000
          </p>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Additonal Fees
          </p>
          <div
            style={{
              padding: "0.8rem 1rem",
              border: "1px solid black",
              borderRadius: "10px",
              fontSize: "0.9rem",
              fontWeight: "550",
            }}
          >
            Learn More
          </div>
        </div>

        <div
          style={{
            marginTop: "4rem",
            width: "95%",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {list1.map((obj, index) => {
            return (
              <div
                style={{
                  backgroundColor: "rgba(112, 101, 240, 0.09)",
                  padding: "1rem 4rem 1rem 1rem",
                  borderRadius: "10px",
                  // width: "49.5%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p style={{ color: "#7065f0", fontSize: "0.9rem" }}>
                  {obj.heading}
                </p>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <span style={{ color: "#7065f0", fontWeight: "600" }}>
                    {obj.price}
                  </span>
                  <div
                    style={{
                      backgroundColor: "#7065f0",
                      color: "white",
                      borderRadius: "999px",
                      padding: "0.5rem 0.8rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <p style={{ whiteSpace: "nowrap" }}>{obj.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "4rem",
            width: "95%",
            marginInline: "auto",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {list12.map((obj, index) => {
            return (
              <div
                style={{
                  backgroundColor: "rgba(112, 101, 240, 0.09)",
                  padding: "1rem 4rem 1rem 1rem",
                  borderRadius: "10px",
                  // width: "49.5%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p style={{ color: "#7065f0", fontSize: "0.9rem" }}>
                  {obj.heading}
                </p>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <span style={{ color: "#7065f0", fontWeight: "600" }}>
                    {obj.price}
                  </span>
                  <div
                    style={{
                      backgroundColor: "#7065f0",
                      color: "white",
                      borderRadius: "999px",
                      padding: "0.5rem 0.8rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    <p style={{ whiteSpace: "nowrap" }}>{obj.para}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {list13.map((obj, index) => {
          return (
            <div
              style={{
                backgroundColor: "rgba(112, 101, 240, 0.09)",
                padding: "1rem 4rem 1rem 1rem",
                borderRadius: "10px",
                width: "95%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "4rem",
              }}
            >
              <p style={{ color: "#7065f0", fontSize: "0.9rem" }}>
                {obj.heading}
              </p>
              <div
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span style={{ color: "#7065f0", fontWeight: "600" }}>
                  {obj.price}
                </span>
                <div
                  style={{
                    backgroundColor: "#7065f0",
                    color: "white",
                    borderRadius: "999px",
                    padding: "0.5rem 0.8rem",
                    fontSize: "0.9rem",
                  }}
                >
                  <p style={{ whiteSpace: "nowrap" }}>{obj.para}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.section2imgdivp} style={{ marginTop: "6rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div
            style={{
              backgroundColor: "#7065f0",
              display: "",
              padding: "0.8rem 2.5rem",
              borderRadius: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
              }}
            >
              3D Images
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#7065f0",
              }}
            >
              Floor Plan
            </button>
          </div>
        </div>
        <div className={styles.section2imgdiv1}>
          {list2.map((img, index) => {
            return (
              <div style={{ width: "10%" }}>
                <img src={img} alt="home_img" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div className={styles.section2imgdiv2}>
          <div style={{ width: "100%" }}>
            <model-viewer
              src={houseinterior3}
              ios-src=""
              poster={housegrid1}
              alt="A 3D model of a House interior"
              shadow-intensity="1"
              scale="3000 3000 3000"
              camera-controls
              // auto-rotate
              ar
              style={{ width: "100%", height: "500px" }}
            ></model-viewer>
            {/* <img src={housegrid1} alt="home_img" style={{ width: "100%" }} /> */}
          </div>
          <div style={{ width: "100%" }}>
            <model-viewer
              src={SocietyGlb}
              ios-src=""
              poster={housegrid2}
              alt="A 3D model of an Society"
              shadow-intensity="1"
              scale="100 100 100"
              camera-controls
              // auto-rotate
              ar
              style={{ width: "100%", height: "500px" }}
            ></model-viewer>
            {/* <img src={housegrid2} alt="home_img" style={{ width: "100%" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
