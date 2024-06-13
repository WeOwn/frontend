import React from "react";
import { useState, useEffect } from "react";
import styles from "./stylesmob.module.css";
import illustration from "./Illustrationmob.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

import cloud from "./cloud.png";
import arrow from "./arrow.png";
import phone from "./phone.png";
import contact1 from "./contact1mob.png";
import contact2 from "./contact2.png";
import contact3 from "./contact3.png";
import Cellular from "./Cellular.png";
import Wifi from "./Wifi.png";
import Battery from "./Battery.png";
import line from "./line.png";
import line1 from "./line1.png";
import google_logo from "./google_logo.png";
import apple_logo from "./apple_logo.png";
import ellipse from "./ellipse.png";
import Modal from "../../components/Modal1/Modalmob";
import ThankyouModal from "../../components/Modal1/ThankyouModalmob";

const Homemob = () => {
  const [thankyou, setThankyou] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setThankyou(true);
  };

  const openModal = () => {
    setisOpen(true);
  };

  const closeModal = () => {
    setisOpen(false);
    setThankyou(false);
  };
  const [time, setTime] = useState(new Date());

  const [leftmonths, setLeftmonths] = useState("00");
  const [leftdays, setLeftdays] = useState("00");
  const [lefthours, setLefthours] = useState("00");

  const month_days = [30, 31, 30, 31, 31, 30];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setLefthours(
      Math.floor(24 - time.getHours())
        .toString()
        .padStart(2, "0")
    );

    setLeftdays(
      (month_days[time.getMonth() - 3] - time.getDate() + 1)
        .toString()
        .padStart(2, "0")
    );
    setLeftmonths((9 - time.getMonth()).toString().padStart(2, "0"));

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  return (
    <div>
      {thankyou && (
        <div style={{ position: "absolute", zIndex: "10" }}>
          <ThankyouModal onClose={() => closeModal()} />
        </div>
      )}
      {isOpen && <Modal onClose={() => closeModal()} />}

      {!isOpen && (
        <div className={styles.maindiv}>
          <div className={styles.griddiv}>
            <div className={styles.firstdiv}>
              <p
                style={{
                  fontSize: "1rem",

                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  paddingTop: "1rem",
                }}
              >
                <img src={line1} alt="line_img" />
                <span>Coming Soon</span>
                <img src={line1} alt="line_img" />
              </p>
              <div className={styles.timerdiv}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.3rem",
                  }}
                >
                  <div className={styles.rectangle}>{leftmonths[0]}</div>

                  <div className={styles.rectangle}>{leftmonths[1]}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.3rem",
                  }}
                >
                  <div className={styles.rectangle}>{leftdays[0]}</div>
                  <div className={styles.rectangle}>{leftdays[1]}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.3rem",
                  }}
                >
                  <div className={styles.rectangle}>{lefthours[0]}</div>
                  <div className={styles.rectangle}>{lefthours[1]}</div>
                </div>
              </div>
              <div className={styles.monthtextdiv}>
                <div>MONTHS</div>
                <div>DAYS</div>
                <div>HOURS</div>
              </div>
            </div>
            <div className={styles.seconddiv}>
              <div className={styles.cloudp}>
                <img
                  src={cloud}
                  alt="cloud_img"
                  style={{ marginTop: "2rem" }}
                  className={styles.cloud}
                />
                <img
                  src={cloud}
                  alt="cloud_img"
                  className={`${styles.cloud} ${styles.cloud2}`}
                />
                <img
                  src={cloud}
                  alt="cloud_img"
                  className={`${styles.cloud} ${styles.cloud3}`}
                />
              </div>
              <div className={styles.ellipse}>
                <img
                  src={ellipse}
                  alt="img"
                  style={{ height: "100%", width: "100%", zIndex: "0" }}
                />
              </div>
              <div style={{ position: "relative", zIndex: "10" }}>
                <div className={styles.phonediv}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div
                      style={{
                        fontWeight: "bolder",
                        fontSize: "0.5rem",
                        lineHeight: "1rem",
                      }}
                    >
                      {`${hours}:${minutes}:${seconds}`}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "0.2rem",
                        alignItems: "center",
                      }}
                    >
                      <img src={Cellular} alt="img" style={{ height: "40%" }} />
                      <img src={Wifi} alt="img" style={{ height: "40%" }} />
                      <img src={Battery} alt="img" style={{ height: "40%" }} />
                    </div>
                  </div>
                  <img
                    src={contact1}
                    alt="conatct_img"
                    className={styles.contact1div}
                  />
                  <div
                    style={{
                      marginTop: "1rem",
                      marginLeft: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.3rem",
                    }}
                  >
                    <div className={styles.joinus_div}>
                      <img src={line} alt="line" style={{ width: "25%" }} />
                      <div style={{ color: "gray", fontSize: "0.5rem" }}>
                        Join Us
                      </div>
                      <img src={line} alt="line" style={{ width: "25%" }} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        marginLeft: "20%",
                      }}
                    >
                      <div className={styles.phone_logo}>
                        <img
                          src={google_logo}
                          alt="google_logo"
                          style={{
                            height: "50%",
                            width: "50%",
                          }}
                        />
                      </div>
                      <div className={styles.phone_logo}>
                        <img
                          src={apple_logo}
                          alt="apple_logo"
                          style={{
                            height: "50%",
                            width: "50%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.contact2div}>
                  <img
                    src={contact2}
                    alt="conatct_img"
                    style={{
                      height: "100%",
                      width: "90%",
                    }}
                  />
                </div>
                <div className={styles.contact3div}>
                  <img
                    src={contact3}
                    alt="conatct_img"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.third2div}>
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  Get Notified
                </h1>
                <h1
                  style={{
                    fontWeight: "bolder",
                    color: "white",
                    fontSize: "1.5rem",
                    marginTop: "0rem",
                  }}
                >
                  When we Launch
                </h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className={styles.searchp_div}>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email address"
                      className={styles.searchText}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      // className=" rounded-l-full w-10 "
                    />
                    <button
                      type="submit"
                      style={{
                        border: "none",
                        borderRadius: "50%",
                        height: "2.8rem",
                        width: "2.8rem",
                        backgroundColor: "#7065F0",
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={arrow}
                        alt="search_logo"
                        style={{
                          marginTop: "0.3rem",
                          marginLeft: "0.3rem",
                        }}
                      />
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <button
                  // type="button"
                  style={{
                    position: "relative",

                    // marginTop: "1rem",
                    width: "7rem",
                    height: "2.4rem",
                    borderRadius: "9999px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: "1",
                  }}
                  onClick={openModal}
                >
                  <img src={phone} alt="img" style={{ height: "1rem" }} />
                  <span style={{ fontSize: "0.75rem", color: "#7065f0" }}>
                    Contact Us
                  </span>
                </button>
              </div>
              <div className={styles.instagram_div}>
                <div>
                  <button
                    style={{
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <img
                      src={instagram}
                      alt="instagram_logo"
                      style={{ height: "70%", width: "70%" }}
                    />
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <img
                      src={linkedin}
                      alt="linkedin_logo"
                      style={{ height: "60%", width: "60%" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirddiv}>
            <div>
              <img
                src={illustration}
                alt="illustration_logo"
                className={styles.illustration}
              />
            </div>
          </div>
          {/* <div
        style={{ display: "inline-block", height: "6.3vh", width: "100%" }}
      ></div> */}
        </div>
      )}
    </div>
  );
};

export default Homemob;
