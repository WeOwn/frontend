import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import home1 from "./home1.svg";
import housegrid1 from "./housegrid1.svg";
import housegrid2 from "./housegrid2.svg";
import logo1 from "./logo1.svg";
import logo2 from "./logo2.svg";
import user from "./user.svg";
import shape1 from "./shape1.svg";
import shape2 from "./shape2.svg";
import shape3 from "./shape3.svg";
import shape4 from "./shape4.svg";
import shape5 from "./shape5.svg";
import shape6 from "./shape6.svg";
import light from "./light.svg";
import location from "./location.svg";
import heart from "./heart.svg";
import share from "./share.svg";
import customize from "./customize.svg";
import group from "./Group.svg";
import down_arrow from "./down_arrow.svg";
// import "@google/model-viewer";
import "@google/model-viewer/dist/model-viewer";
import houseinterior3 from "./Houseglb.glb";
import SocietyGlb from "./Society_compressed.glb";

const Section2 = () => {
  const descriptionlist = [
    {
      id: 1,
      img: shape1,
      type: "Bedrooms",
      about: "04",
    },
    {
      id: 2,
      img: shape2,
      type: "Bathrooms",
      about: "03",
    },
    {
      id: 3,
      img: shape3,
      type: "Area",
      about: "2,500 Square Feet",
    },
    {
      id: 4,
      img: shape4,
      type: "Swimming pools",
      about: "05",
    },
    {
      id: 5,
      img: shape5,
      type: "Location",
      about: "Delhi",
    },
    {
      id: 6,
      img: shape6,
      type: "Type",
      about: "Residential",
    },
    {
      id: 7,
      img: shape1,
      type: "Construction Stage",
      about: "Pre-launch",
    },
    {
      id: 8,
      img: shape2,
      type: "Accessibility",
      about: "Elevators",
    },
    {
      id: 9,
      img: shape3,
      type: "Area",
      about: "2,500 Square Feet",
    },
  ];
  const list1 = [home1, home1, home1, home1, home1, home1, home1, home1, home1];
  const list2 = [
    "Expensive oceanfront terrace for outdoor entertaining",
    "Gourmnet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inpspired bathroom and ocean-facing balcony",
    "Private garage and apmle storage space",
  ];

  const [divWidth, setDivWidth] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    const updateDivWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
      }
    };

    // Initial width calculation
    updateDivWidth();

    // Optional: Update width on window resize
    window.addEventListener("resize", updateDivWidth);
    return () => window.removeEventListener("resize", updateDivWidth);
  }, []);

  return (
    <div className={styles.section2main}>
      <div className={styles.section2intro}>
        <div className={styles.section2heading}>
          <h4
            style={{ fontSize: "1.5rem", fontWeight: "650", flexWrap: "wrap" }}
          >
            Prestige Tech Platina
          </h4>
          <div
            style={{
              border: "1px solid #E3E3E3",
              borderRadius: "5px",
              padding: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img src={location} alt="img" style={{ width: "1rem" }} />
            <span style={{ whiteSpace: "noWrap" }}>
              Outer Ring Road, Banglore
            </span>
          </div>
        </div>
        <div className={styles.section2buttondiv}>
          <div
            style={{
              backgroundColor: "#7065f0",
              padding: "0.8rem 2.5rem",
              borderRadius: "10px",
              width: "fit-content",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                whiteSpace: "noWrap",
                fontSize: "0.9rem",
              }}
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.section2imgdivp}>
        <div className={styles.section2imgdiv1}>
          {list1.map((img, index) => {
            return (
              <div style={{ minWidth: "5rem" }}>
                <img src={img} alt="home_img" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div className={styles.section2imgdiv2}>
          <div style={{ width: "100%" }}>
            {/* <model-viewer
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
            ></model-viewer> */}
            <img src={housegrid1} alt="home_img" style={{ width: "100%" }} />
          </div>
          <div style={{ width: "100%" }}>
            {/* <model-viewer
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
            ></model-viewer> */}
            <img src={housegrid2} alt="home_img" style={{ width: "100%" }} />
          </div>
        </div>

        <div className={styles.section2imgdiv3}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
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
              <img src={logo1} alt="logo_img" style={{ width: "70%" }} />
            </div>
            <div
              style={{
                padding: "0.5rem 0.3rem",
                backgroundColor: "rgba(112, 101, 240, 0.14)",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={logo2} alt="logo_img" style={{ width: "70%" }} />
            </div>
            <div
              style={{
                backgroundColor: "#7065f0",
                padding: "0.6rem 1rem",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <img src={share} alt="logo_img" style={{ width: "0.8rem" }} />
              <span style={{ color: "white", fontSize: "0.9rem" }}>Share</span>
            </div>
            <div
              style={{
                backgroundColor: "rgba(112, 101, 240, 0.12)",
                padding: "0.6rem 1.5rem",
                borderRadius: "5px",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "grey",
                  fontSize: "0.9rem",
                  whiteSpace: "noWrap",
                }}
              >
                Save
              </span>
              <img src={heart} alt="img" style={{ width: "1rem" }} />
            </div>
            <div
              style={{
                backgroundColor: "rgba(112, 101, 240, 0.12)",
                padding: "0.6rem 1.5rem",
                borderRadius: "5px",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "grey",
                  fontSize: "0.9rem",
                  whiteSpace: "noWrap",
                }}
              >
                Customize
              </span>
              <img src={customize} alt="img" style={{ width: "1rem" }} />
            </div>
          </div>
          <div>
            <div className={styles.profilebuttondivp}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  // flexWrap: "wrap",
                }}
              >
                <div style={{ width: "25%" }}>
                  <img src={user} alt="user img" style={{ width: "100%" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      whiteSpace: "noWrap",
                    }}
                  >
                    Shapoorji Pallonj
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "bolder",
                      color: "#7065f0",
                      whiteSpace: "noWrap",
                    }}
                  >
                    Builder
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#7065f0",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    whiteSpace: "noWrap",
                    fontSize: "0.9rem",
                  }}
                >
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section2descriptionp}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <h4
              style={{
                // fontSize: "1.1rem",
                // fontWeight: "600",
                whiteSpace: "noWrap",
              }}
            >
              Overview
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                lineHeight: "1.2rem",
                marginTop: "1rem",
              }}
            >
              This is a rare opportunity to purchase 1,71,402 sf in a LEED
              Platinum building – Prestige Tech Platina on Outer Ring Road in
              Bangalore tenanted to a US-based company on a 9-year lease (7-year
              lock-in), at a price of ₹10,600 per sf implying a 10% yield and a
              17.5% IRR.
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                lineHeight: "1.2rem",
                marginTop: "1.5rem",
              }}
            >
              Prestige Tech Platina is a LEED Platinum building on the main
              Outer Ring Road and is part of the larger Prestige Tech Park
              campus with MNC tenants like JP Morgan Chase, Adobe, Schneider
              Electric and Juniper Networks. We believe this is a great
              opportunity to acquire a LEED Platinum asset developed by the
              Prestige group at a low purchase price of ₹10,600 per sf with a
              7-year lock-in in Bangalore’s largest micro-market.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <span style={{ fontSize: "0.75rem" }}>
                Estimated property value
              </span>
              <div
                style={{
                  border: "1px solid #F1F2F2",
                  paddingBlock: "0.5rem",
                  fontSize: "0.75rem",
                }}
              >
                <span
                  style={{
                    borderRight: "1px solid #F1F2F2",
                    padding: "0.5rem",
                  }}
                >
                  ₹
                </span>
                <span style={{ padding: "0.5rem", color: "#999999" }}>
                  2,19,50,00,000
                </span>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <span style={{ fontSize: "0.75rem" }}>Current market value</span>
              <div
                style={{
                  border: "1px solid #F1F2F2",
                  paddingBlock: "0.5rem",
                  fontSize: "0.75rem",
                }}
              >
                <span
                  style={{
                    borderRight: "1px solid #F1F2F2",
                    padding: "0.5rem",
                  }}
                >
                  ₹
                </span>
                <span style={{ padding: "0.5rem", color: "#999999" }}>
                  2,19,50,00,000
                </span>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <span style={{ fontSize: "0.75rem" }}>
                Target investment amount
              </span>
              <div
                style={{
                  border: "1px solid #F1F2F2",
                  paddingBlock: "0.5rem",
                  fontSize: "0.75rem",
                }}
              >
                <span
                  style={{
                    borderRight: "1px solid #F1F2F2",
                    padding: "0.5rem",
                  }}
                >
                  ₹
                </span>
                <span style={{ padding: "0.5rem", color: "#999999" }}>
                  2,19,50,00,000
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section2description}>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                whiteSpace: "noWrap",
              }}
            >
              Description
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                lineHeight: "1.2rem",
              }}
            >
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is a epotime of coastal living
            </p>

            <div className={styles.section2grid}>
              {descriptionlist.map((obj, index) => {
                return (
                  <div
                    style={{
                      paddingBlock: "1rem",
                      borderTop: "1px solid #E3E3E3",
                    }}
                  >
                    <div
                      key={obj.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingInline: "1rem",
                        borderRight:
                          index !== 2 && index !== 5 && index !== 8
                            ? "1px solid #E3E3E3"
                            : "",
                        // backgroundColor: "yellow",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ width: "1rem" }}>
                          <img
                            src={obj.img}
                            alt="img"
                            style={{ width: "100%" }}
                          />
                        </span>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "550",
                            whiteSpace: "noWrap",
                          }}
                        >
                          {obj.type}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "650",
                          whiteSpace: "noWrap",
                        }}
                      >
                        {obj.about}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.section2features}>
          <div className={styles.section2features1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid #E3E3E3",
                width: "80%",
                // marginInline: "auto",
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  whiteSpace: "noWrap",
                }}
              >
                Prestiae Tech Platina
              </span>
              <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                Outer Ring Road, Banglore
              </span>
            </div>

            <div className={styles.section2features1grid}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRight: "1px solid #E3E3E3",
                }}
              >
                <div
                  style={{
                    padding: "0.8rem",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "#F1F2F2",
                  }}
                >
                  <img
                    src={group}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  10.00%
                </span>
                <span style={{ fontSize: "0.8rem" }}>HIGH RENTAL YIELD</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    padding: "0.8rem",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "#F1F2F2",
                  }}
                >
                  <img
                    src={group}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  10.00%
                </span>
                <span style={{ fontSize: "0.8rem" }}>HIGH RENTAL YIELD</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRight: "1px solid #E3E3E3",
                }}
              >
                <div
                  style={{
                    padding: "0.8rem",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "#F1F2F2",
                  }}
                >
                  <img
                    src={group}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  10.00%
                </span>
                <span style={{ fontSize: "0.8rem" }}>HIGH RENTAL YIELD</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    padding: "0.8rem",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "#F1F2F2",
                  }}
                >
                  <img
                    src={group}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  10.00%
                </span>
                <span style={{ fontSize: "0.8rem" }}>HIGH RENTAL YIELD</span>
              </div>
            </div>
          </div>

          <div className={styles.section2features2}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span style={{ fontSize: "0.8rem", fontWeight: "550" }}>
                Monthly Cash Flow
              </span>
              <div
                style={{ width: "0.5rem", marginTop: "-0.25rem" }}
                className={styles.rotate180}
              >
                <img
                  src={down_arrow}
                  alt="img"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>

            <div>
              <div className={styles.slider} ref={divRef}>
                <div
                  className={styles.progress1}
                  style={{ left: 0, width: `${(18741 / 22782) * divWidth}px` }}
                ></div>
                <div
                  className={styles.progress2}
                  style={{
                    left: `${(18741 / 22782) * divWidth}px`,
                    width: `${(2167 / 22782) * divWidth}px`,
                  }}
                ></div>
                <div
                  className={styles.progress3}
                  style={{
                    left: `${((18741 + 2167) / 22782) * divWidth}px`,
                    width: `${(1874 / 22782) * divWidth}px`,
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    // position: "absolute",
                    // top: "2rem",
                    left: "50%",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.65rem" }}>Monthly Rent</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: "550" }}>
                    ₹ 18741
                  </span>
                </div>
                <div
                  style={{
                    // position: "absolute",
                    // top: "2rem",
                    left: "50%",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.65rem" }}>
                    Property Management Fee
                  </span>
                  <span style={{ fontSize: "0.75rem", fontWeight: "550" }}>
                    ₹ 2167
                  </span>
                </div>

                <div
                  style={{
                    // position: "absolute",
                    // top: "2rem",
                    left: "50%",

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "0.65rem" }}>10% TDS</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: "550" }}>
                    ₹ 1874
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section2features3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#999999", fontSize: "0.9rem" }}>
                  Min Investment
                </span>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  ₹30 Lakhs
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#999999", fontSize: "0.9rem" }}>
                  Gross Entry Yield
                </span>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  0%
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#999999", fontSize: "0.9rem" }}>
                  Target IRR**
                </span>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  16-18%
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: "#999999", fontSize: "0.9rem" }}>
                  Target Multiple**
                </span>
                <span style={{ fontWeight: "650", fontSize: "1.1rem" }}>
                  1.6x
                </span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#7065f0",
                padding: "0.8rem 2.5rem",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "fit-content",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  whiteSpace: "noWrap",
                }}
              >
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
