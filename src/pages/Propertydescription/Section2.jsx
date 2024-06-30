import React, { useState } from "react";
import styles from "./styles.module.css";
import home1 from "./home1.svg";
import home2 from "./home2.svg";
import home3 from "./home3.svg";
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
import Play from "./Play.svg";
// import "@google/model-viewer";
import "@google/model-viewer/dist/model-viewer";
import { Link } from "react-router-dom";
import Button from "../../Atoms/Button";
// import houseinterior3 from "./Houseglb.glb";
// import SocietyGlb from "./Society_compressed.glb";

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

  const [launchimgid, setLaunchimgid] = useState(1);
  const list1 = [
    {
      id: 1,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 2,
      smallimg: home2,
      largeimg: home2,
    },
    {
      id: 3,
      smallimg: home3,
      largeimg: housegrid1,
    },
    {
      id: 4,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 5,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 6,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 7,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 1,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 8,
      smallimg: home1,
      largeimg: home1,
    },
    {
      id: 9,
      smallimg: home1,
      largeimg: home1,
    },
  ];
  const list2 = [
    "Expansive oceanfront terrace for outdoor entertaining",
    "Gourmnet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inpspired bathroom and ocean-facing balcony",
    "Private garage and apmle storage space",
  ];
  const [launchexpbtn, setLaunchexpbtn] = useState(false);
  const handleopenLaunchexp = () => {
    setLaunchexpbtn(true);
  };
  const handlecloseLaunchexp = () => {
    setLaunchexpbtn(false);
  };
  return (
    <div className={styles.section2main}>
      <div className={styles.section2intro}>
        <div className={styles.section2heading}>
          <h4
            style={{ fontSize: "1.5rem", fontWeight: "650", flexWrap: "wrap" }}
          >
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
            <span style={{ whiteSpace: "noWrap" }}>Mailibu, California</span>
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
                whiteSpace: "noWrap",
              }}
            >
              Save
            </span>
            <img src={heart} alt="img" style={{ width: "1rem" }} />
          </div>
          <Link to="/contact_builders" style={{}}>
            <Button type="primary2">Contact Builder</Button>
          </Link>
        </div>
      </div>

      <div className={styles.section2imgdivp}>
        <div style={{}} className={styles.section2imgdivbuttondivp}>
          <Button type="primary2">Hi-Res Images</Button>
          <div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#7065f0",
                whiteSpace: "noWrap",
                fontSize: "0.9rem",
              }}
            >
              Floor Plan
            </button>
          </div>
        </div>
        <div className={styles.section2imgdiv1}>
          {list1.map((obj, index) => {
            return (
              <div
                key={obj.id}
                style={{
                  // borderRadius: "10px",
                  // backgroundColor: "#FFFFFF",
                  minWidth: "5rem",
                  cursor: "pointer",
                }}
                onClick={() => setLaunchimgid(obj.id)}
              >
                <img
                  src={obj.smallimg}
                  alt="home_img"
                  style={{
                    width: "100%",

                    borderRadius: "5px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className={styles.section2imgdiv2}
          onMouseOver={handleopenLaunchexp}
          onMouseLeave={handlecloseLaunchexp}
        >
          <div style={{ width: "100%" }}>
            <img
              src={list1[launchimgid - 1].largeimg}
              alt="home_img"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
          {launchexpbtn && (
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles.launchexpbtndivp}></div>
              <div
                style={{
                  position: "absolute",
                  zIndex: "2",
                  backgroundColor: "#7065f0",
                  padding: "0.8rem 2.5rem",
                  borderRadius: "10px",
                  width: "fit-content",
                  display: "flex",
                  alignItems: "center",
                  opacity: "1",

                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: "1rem" }}>
                  <img src={Play} alt="img" style={{ width: "100%" }} />
                </div>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    whiteSpace: "noWrap",
                    cursor: "pointer",
                  }}
                  className={styles.buttontext}
                >
                  LAUNCH EXPERIENCE
                </button>
              </div>
            </div>
          )}
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
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is a
            epotime of coastal living
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
        <div className={styles.section2features}>
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
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
                      whiteSpace: "noWrap",
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
