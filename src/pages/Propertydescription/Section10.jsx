import React from "react";
import stardesign from "./stardesign.svg";

const Section10 = () => {
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
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650", whiteSpace: "wrap" }}>
        Frequently Asked Questions
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
        <p style={{ color: "#999999", width: "80%" }}>
          Find answers to common questions about Estateins's services, property
          listing, and the real estate process. We're here to provide clarity
          and assist you every tep of the way
        </p>
        <div
          style={{
            backgroundColor: "#EAEAEA",
            border: "1px solid #E1E1E1",
            padding: "0.8rem 1rem",

            borderRadius: "10px",
            fontSize: "0.9rem",
          }}
        >
          View All FAQ's
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

export default Section10;
