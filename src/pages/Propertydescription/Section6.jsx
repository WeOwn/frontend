import React from "react";
import user from "./user.svg";
import stardesign from "./stardesign.svg";

const Section6 = () => {
  const reviews = [
    {
      heading: "Exceptional Service!",
      para: "Our Experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "Exceptional Service!",
      para: "Our Experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      location: "USA, California",
      userimg: "",
    },
    {
      heading: "Exceptional Service!",
      para: "Our Experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
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
        Reviews About Seaside Serenity Villa
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
          View All Reviews
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          //   width: "95vw",
          overflow: "auto",
          marginTop: "4rem",
        }}
      >
        {reviews.map((review, index) => {
          return (
            <div
              style={{
                padding: "2rem",

                borderRadius: "10px",
                backgroundColor: "#F9F9F9",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div style={{ fontWeight: "600", whiteSpace: "nowrap" }}>
                {review.heading}
              </div>
              <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                {review.para}
              </p>

              <div
                style={{
                  paddingTop: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    borderRadius: "999px",
                    height: "3rem",
                    width: "3rem",
                  }}
                >
                  <img
                    src={user}
                    alt="userimg"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "999px",
                    }}
                  />
                </div>
                <div>
                  <p style={{ fontWeight: "550", whiteSpace: "nowrap" }}>
                    {review.name}
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontSize: "0.8rem",
                      marginTop: "0.5rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section6;
