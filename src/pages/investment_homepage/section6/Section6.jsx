import React from "react";
import styles from "./styles.module.css";
import stardesign from "./stardesign.svg";
import IntroContainer from "../../../Atoms/introContainer/IntroContainer";

const Section6 = () => {
  const faqs = [
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "How do I search for properties on Estatien?",
      para: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
  ];

  return (
    <div className={styles.maindiv}>
      <IntroContainer
        stardesign={stardesign}
        heading="Frequently Asked Questions"
        btntext={`View All FAQ's`}
        desc={`Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way`}
        descStyle={{}}
      />
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
                backgroundColor: "#7065f0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2rem",
                color: "white",
              }}
            >
              <div style={{ fontWeight: "600" }}>{faq.heading}</div>
              <p style={{ fontSize: "0.9rem" }}>{faq.para}</p>

              <div
                style={{
                  backgroundColor: "white",
                  //   border: "1px solid #E1E1E1",
                  padding: "0.8rem 1rem",

                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  color: "#7065f0",
                  whiteSpace: "nowrap",
                }}
              >
                Read More
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
