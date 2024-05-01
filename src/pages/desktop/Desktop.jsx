import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import illustration from "./Illustration.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

import cloud from "./cloud.png";
import arrow from "./arrow.png";
import phone from "./phone.png";
import contact1 from "./contact1.png";
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
import Modal from "../../components/Modal1/Modal";

const Desktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
    <div className={styles.maindiv}>
      {isOpen && (
        <div style={{ zIndex: "10", position: "absolute" }}>
          <Modal onClose={() => closeModal()} />
        </div>
      )}
      <div>
        <div style={{ position: "relative" }}>
          <img
            src={cloud}
            alt="cloud_img"
            style={{ marginTop: "2rem", left: "6rem" }}
            className={styles.cloud}
          />
          <img
            src={cloud}
            alt="cloud_img"
            style={{ marginTop: "6rem", left: "38rem" }}
            className={styles.cloud}
          />
          <img
            src={cloud}
            alt="cloud_img"
            style={{ marginTop: "1rem", right: "20rem" }}
            className={styles.cloud}
          />
        </div>

        <div>
          <button
            style={{
              position: "absolute",
              right: "6rem",
              top: "1rem",
              width: "7rem",
              height: "2.2rem",
              borderRadius: "9999px",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={openModal}
          >
            <img src={phone} alt="img" style={{ height: "1rem" }} />
            <span style={{ fontSize: "0.75rem", color: "#7065f0" }}>
              Conatct Us
            </span>
          </button>
        </div>
      </div>
      <div className={styles.firstdiv}>
        <p
          style={{
            fontSize: "1rem",

            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src={line1} alt="line_img" /> <span>Coming Soon</span>
        </p>
        <div className={styles.timerdiv}>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className={styles.rectangle}>{leftmonths[0]}</div>

            <div className={styles.rectangle}>{leftmonths[1]}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className={styles.rectangle}>{leftdays[0]}</div>
            <div className={styles.rectangle}>{leftdays[1]}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className={styles.rectangle}>{lefthours[0]}</div>
            <div className={styles.rectangle}>{lefthours[1]}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "7.3rem",
            marginLeft: "2rem",
            alignItems: "center",
            fontSize: "1rem",
            marginTop: "1rem",
            color: "white",
            fontFamily: "monospace",
          }}
        >
          <div>MONTHS</div>
          <div>DAYS</div>
          <div>HOURS</div>
        </div>
        <div>
          <h1
            style={{
              fontWeight: "bolder",
              color: "white",
              fontSize: "2.5rem",
              marginTop: "2rem",
            }}
          >
            Join waitlist
          </h1>
          <h1
            style={{
              fontWeight: "bolder",
              color: "white",
              fontSize: "2.5rem",
              marginTop: "-2rem",
            }}
          >
            When we Launch
          </h1>
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
      </div>
      <div className={styles.seconddiv}>
        <div
          style={{
            height: "29rem",
            width: "29rem",
            position: "absolute",
            zIndex: "0",
            marginLeft: "-7rem",
            marginTop: "-1rem",
          }}
        >
          <img
            src={ellipse}
            alt="img"
            style={{ height: "100%", width: "100%", zIndex: "0" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: "10" }}>
          <div
            style={{
              height: "25rem",
              width: "12rem",
              backgroundColor: "white",
              boxShadow: "0 25px 50px -12px",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontWeight: "bolder",
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                }}
              >
                {`${hours}:${minutes}:${seconds}`}
              </div>
              <div style={{ marginLeft: "20%" }}>
                <img
                  src={Cellular}
                  alt="img"
                  style={{ marginRight: "0.2rem" }}
                />
                <img src={Wifi} alt="img" style={{ marginRight: "0.2rem" }} />
                <img src={Battery} alt="img" />
              </div>
            </div>
            <img
              src={contact1}
              alt="conatct_img"
              style={{
                marginTop: "3rem",
                marginLeft: "-1.7rem",
                height: "50%",
                width: "16rem",
              }}
            />
            <div
              style={{
                marginTop: "1rem",
                marginLeft: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img src={line} alt="line" style={{ width: "25%" }} />
                <div style={{ color: "gray", fontSize: "0.75rem" }}>
                  Join Us
                </div>
                <img src={line} alt="line" style={{ width: "25%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginLeft: "2.5rem",
                }}
              >
                <div
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    border: "1px solid gray",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={google_logo}
                    alt="google_logo"
                    style={{
                      height: "50%",
                      width: "50%",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    border: "1px solid gray",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
          <div
            style={{
              height: "8rem",
              position: "absolute",
              borderRadius: "1.5rem",
              top: "17rem",
              left: "-5rem",
              width: "8rem",
              boxShadow: "0 25px 50px -12px",
              backgroundColor: "white",
            }}
          >
            <img
              src={contact2}
              alt="conatct_img"
              style={{
                height: "100%",
                width: "90%",
              }}
            />
          </div>
          <div
            style={{
              height: "8rem",
              position: "absolute",
              borderRadius: "1.5rem",
              top: "3rem",
              right: "-5rem",
              width: "8rem",
              boxShadow: "0 25px 50px -12px",
              backgroundColor: "white",
            }}
          >
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
      <div className={styles.thirddiv}>
        <div className={styles.instagram_div}>
          <img
            src={instagram}
            alt="instagram_logo"
            style={{ cursor: "pointer", height: "100%", width: "100%" }}
          />
          <img
            src={linkedin}
            alt="linkedin_logo"
            style={{ cursor: "pointer", height: "100%", width: "100%" }}
          />
        </div>
        <div>
          <img
            src={illustration}
            alt="illustration_logo"
            className={styles.illustration}
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
