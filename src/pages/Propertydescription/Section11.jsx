import React from "react";
import styles from "./styles.module.css";
import EMI from "./EMI.svg";
import stardesign2 from "./stardesign2.svg";

const Section11 = () => {
  const faqs = [
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      heading: "EMI Calculator",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
  ];

  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign2}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650", whiteSpace: "wrap" }}>
        Let's Get To Numbers
      </h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "#525252" }} className={styles.desc}>
          Explore Our handpicked selection of feautered properties. Each
          lisiting offers a glimpse into exceptional homes and investments
          available through Estatein. Click "View Details" for more information.
        </p>
        <div
          style={{
            backgroundColor: "#EAEAEA",
            border: "1px solid #E1E1E1",
            padding: "0.8rem 1rem",
            // flexWrap: "nowrap",
            borderRadius: "10px",
            fontSize: "0.9rem",
          }}
        >
          View Details
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          //   alignItems: "center",
          gap: "2rem",
          width: "100%",
          overflow: "auto",
          marginTop: "4rem",
        }}
      >
        {faqs.map((faq, index) => {
          return (
            <div
              style={{
                padding: "2rem",
                // width: "45%",
                // height: "rem",
                borderRadius: "10px",
                backgroundColor: "rgba(112, 101, 240, 0.13)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <div style={{ height: "4rem" }}>
                <img
                  src={EMI}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ fontWeight: "600", whiteSpace: "nowrap" }}>
                {faq.heading}
              </div>
              <p style={{ fontSize: "0.9rem" }}>{faq.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section11;
