import React from "react";
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
// import "@google/model-viewer";
import "@google/model-viewer/dist/model-viewer";
// import houseinterior3 from "./houseinterior3.glb";
// import SocietyGlb from "./SocietyGlb.glb";

const Section2 = () => {
  const list1 = [home1, home1, home1, home1, home1, home1, home1, home1, home1];
  const list2 = [
    "Expansive oceanfront terrace for outdoor entertaining",
    "Gourmnet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inpspired bathroom and ocean-facing balcony",
    "Private garage and apmle storage space",
  ];
  return (
    <div className={styles.section2main}>
      <div className={styles.section2intro}>
        <div className={styles.section2heading}>
          <h4 style={{ fontSize: "1.5rem", fontWeight: "650" }}>
            Seaside Serenity Villa
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
            <span>Mailibu, California</span>
          </div>
        </div>
        <div className={styles.section2buttondiv}>
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
              }}
            >
              Save
            </span>
            <img src={heart} alt="img" style={{ width: "1rem" }} />
          </div>
          <div
            style={{
              backgroundColor: "#7065f0",
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
              Contact Builder
            </button>
          </div>
        </div>
      </div>

      <div className={styles.section2imgdivp}>
        <div className={styles.section2imgdiv1}>
          {list1.map((img, index) => {
            return (
              <div className={styles.rowimg}>
                <img src={img} alt="home_img" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <div className={styles.section2imgdiv2}>
          <div style={{ width: "100%" }}>
            {/*<model-viewer
              src={SocietyGlb}
              ios-src=""
              poster={housegrid1}
              alt="A 3D model of a House interior"
              shadow-intensity="1"
              camera-controls
              // auto-rotate
              ar
              style={{ width: "100%", height: "500px" }}
            ></model-viewer> */}
            <img src={housegrid1} alt="home_img" style={{ width: "100%" }} />
          </div>
          <div style={{ width: "100%" }}>
            {/* <model-viewer
              src={houseinterior3}
              ios-src=""
              poster={housegrid2}
              alt="A 3D model of an astronaut"
              shadow-intensity="1"
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
                }}
              >
                Customize
              </span>
              <img src={customize} alt="img" style={{ width: "1rem" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5rem",
                backgroundColor: "rgba(112, 101, 240, 0.12)",
                padding: "0.6rem 1rem 0.6rem 0.6rem",
                borderRadius: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div style={{ width: "25%" }}>
                  <img src={user} alt="user img" style={{ width: "100%" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                    }}
                  >
                    Shapoorji Pallonj
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "bolder",
                      color: "#7065f0",
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
        <div className={styles.section2description}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>Description</h4>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: "600",
              lineHeight: "1.2rem",
            }}
          >
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is a
            epotime of coastal living
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5rem",
                // justifyContent: "space-between",
                paddingTop: "1rem",
                borderTop: "1px solid #E3E3E3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
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
                    <img src={shape1} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Bedrooms
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>04</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape2} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Bathrooms
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>03</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape3} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Area
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>
                  2,500 square feet
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4.2rem",
                // justifyContent: "space-between",
                paddingTop: "1rem",
                borderTop: "1px solid #E3E3E3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
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
                    <img src={shape4} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Swimming Pools
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>05</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape5} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Location
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>Delhi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape6} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Type
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>
                  Residential
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                // justifyContent: "space-between",
                paddingTop: "1rem",
                borderTop: "1px solid #E3E3E3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
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
                    <img src={shape1} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Construction Stage
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>
                  Pre-launch
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape2} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Accessibility
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>
                  Elevators
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  // backgroundColor: "yellow",
                  padding: "0 0 0 1rem",
                  borderLeft: "1px solid #E3E3E3",
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
                    <img src={shape3} alt="img" style={{ width: "100%" }} />
                  </span>
                  <span style={{ fontSize: "0.9rem", fontWeight: "550" }}>
                    Area
                  </span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: "650" }}>
                  25,000 square feet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section2features}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            Key Features and Amenities
          </h4>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {list2.map((text, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: " 1rem",
                    borderLeft: "1px solid #7065f0",
                    background: "linear-gradient(to right, #E3E3E3, #FFFFFF)",
                  }}
                >
                  <img src={light} alt="img" style={{ width: "1rem" }} />
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      lineHeight: "1.2rem",
                    }}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
