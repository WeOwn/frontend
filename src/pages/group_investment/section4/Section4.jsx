import React from "react";
import styles from "./styles.module.css";
import stardesign from "../stardesign.svg";
import timelogo1 from "./timelogo1.svg";
import timelogo2 from "./timelogo2.svg";
import horizontaldivider from "./horizontaldivider.svg";

const Section4 = () => {
  const timeperiod = [
    {
      id: 1,
      title: "Lease Start Date",
      date: "01 April 2023",
      logo: timelogo1,
    },
    {
      id: 2,
      title: "Lock-in Period",
      date: "7 Years",
      logo: timelogo2,
    },
    {
      id: 3,
      title: "Lease End Date",
      date: "01 April 2032",
      logo: timelogo1,
    },
  ];
  const tenanthightlights = [
    {
      id: 1,
      title: "Total Area",
      number: "171402 sq.ft",
    },
    {
      id: 2,
      title: "Rent Per sq.ft",
      number: "$96",
    },
    {
      id: 3,
      title: "Lease Period",
      number: "9 Years",
    },
    {
      id: 4,
      title: "Escalation",
      number: "15%",
    },
  ];

  return (
    <div className={styles.maindiv}>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={stardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4
        style={{
          // fontSize: "1.1rem",
          // fontWeight: "600",
          whiteSpace: "noWrap",
        }}
      >
        Tenant Details
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "4rem",
        }}
      >
        <div
          style={{ height: "1px", backgroundColor: "#E3E3E3", width: "50%" }}
        />
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "fit-content",
          }}
        >
          <div style={{ paddingBlock: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                borderRight: "1px solid #E3E3E3",
                paddingRight: "2rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                Name
              </span>
              <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                Indian Based Tech Comapny
              </span>
            </div>
          </div>
          <div style={{ paddingBlock: "1rem" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                Country
              </span>
              <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                India
              </span>
            </div>
          </div>
        </div>
        <div
          style={{ height: "1px", backgroundColor: "#E3E3E3", width: "70%" }}
        />
        <div
          style={{
            width: "fit-content",
            paddingRight: "2rem",
          }}
        >
          <div style={{ paddingBlock: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                Description
              </span>
              <div>
                <p style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  A customre service software and services company based in
                  California with 18 global offices and
                </p>
                <p style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  15,000+ employees.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "1px", backgroundColor: "#E3E3E3", width: "50%" }}
        />
        <div
          style={{
            width: "fit-content",
            paddingRight: "2rem",
          }}
        >
          <div style={{ paddingBlock: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                Time period
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {timeperiod.map((obj, index) => {
                  return (
                    <div
                      key={obj.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div style={{ width: "2rem" }}>
                          <img
                            src={obj.logo}
                            alt="img"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.8rem",
                              whiteSpace: "nowrap",
                              color: "#999999",
                            }}
                          >
                            {obj.title}
                          </span>
                          <span
                            style={{
                              fontSize: "1rem",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {obj.date}
                          </span>
                        </div>
                      </div>
                      {index !== timeperiod.length - 1 && (
                        <div>
                          <img src={horizontaldivider} alt="img" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: "1px", backgroundColor: "#E3E3E3", width: "70%" }}
        />
        <div
          style={{
            width: "fit-content",
            paddingRight: "2rem",
          }}
        >
          <div style={{ paddingBlock: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                Tenant Highlights
              </span>
              <div className={styles.tenanthightlightsgriddiv}>
                {tenanthightlights.map((obj, index) => {
                  return (
                    <div
                      key={obj.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        paddingInline: "1.5rem",
                        borderRight:
                          index !== tenanthightlights.length - 1
                            ? "1px solid #E3E3E3"
                            : "",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.8rem",
                          whiteSpace: "nowrap",
                          color: "#999999",
                        }}
                      >
                        {obj.title}
                      </span>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {obj.number}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
