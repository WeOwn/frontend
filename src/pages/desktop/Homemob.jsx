import React, { useState, useEffect } from "react";
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
import ContactFormModal from "./ContactFormModal";
import FeedbackFormModal from "./FeedbackFormModal";
import ThankyouModal from "../../components/Modal1/ThankyouModal";

const Homemob = () => {
  const [thankyou, setThankyou] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [time, setTime] = useState(new Date());
  const [leftmonths, setLeftmonths] = useState("12");
  const [leftdays, setLeftdays] = useState("00");
  const [lefthours, setLefthours] = useState("00");

  const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
      (month_days[time.getMonth()] - time.getDate())
        .toString()
        .padStart(2, "0")
    );

    setLeftmonths("12");

    return () => clearInterval(interval);
  }, [time]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsWaitlistOpen(true);
  };

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistOpen(false);
  };

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className={styles.maindiv}>
      {thankyou && (
        <div style={{ zIndex: "10", position: "absolute", width: "100%" }}>
          <ThankyouModal 
            onClose={() => {
              setThankyou(false);
              setIsWaitlistOpen(false);
              setEmail("");
            }} 
          />
        </div>
      )}
      
      {isContactOpen && (
        <div style={{ zIndex: "10", position: "absolute", width: "100%" }}>
          <ContactFormModal 
            onClose={closeContactModal}
            setThankyou={setThankyou}
          />
        </div>
      )}

      {isWaitlistOpen && (
        <div style={{ zIndex: "10", position: "absolute", width: "100%" }}>
          <FeedbackFormModal 
            onClose={closeWaitlistModal}
            setThankyou={setThankyou}
            initialEmail={email}
          />
        </div>
      )}

      <div>
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
            style={{
              marginTop: "5rem",
              left: "45%",
            }}
            className={styles.cloud}
          />
          <img
            src={cloud}
            alt="cloud_img"
            style={{ marginTop: "0.5rem", left: "65%" }}
            className={styles.cloud}
          />
        </div>

        <div
          style={{
            paddingTop: "0.5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              marginRight: "5rem",
              width: "7rem",
              height: "2.4rem",
              borderRadius: "9999px",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "white",
            }}
            onClick={openContactModal}
          >
            <img src={phone} alt="img" style={{ height: "1rem" }} />
            <span style={{ fontSize: "0.75rem", color: "#7065f0" }}>
              Contact Us
            </span>
          </button>
        </div>
      </div>
      <div className={styles.griddiv}>
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
          <div className={styles.monthtextdiv}>
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
              Join Our Waitlist
            </h1>
            <h1
              style={{
                fontWeight: "bolder",
                color: "white",
                fontSize: "2.5rem",
                marginTop: "0rem",
              }}
            >
              Be The First To Know
            </h1>
<form onSubmit={handleEmailSubmit}>
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
      style={{ // Add these styles
        border: 'none',
        outline: 'none',
        background: 'transparent',
        width: '70%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '1rem'
      }}
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        src={arrow}
        alt="search_logo"
        style={{
          height: "1rem",
          width: "1rem"
        }}
      />
    </button>
  </div>
</form>
          </div>
        </div>
        <div className={styles.seconddiv}>
          <div className={styles.ellipse}>
            <img
              src={ellipse}
              alt="img"
              style={{ height: "100%", width: "100%", zIndex: "0" }}
            />
          </div>
          <div style={{ position: "relative", zIndex: "10" }}>
            <div className={styles.phonediv}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    fontWeight: "bolder",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                  }}
                >
                  {`${hours}:${minutes}:${seconds}`}
                </div>
                <div>
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
                alt="contact_img"
                className={styles.contact1div}
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img src={line} alt="line" style={{ width: "20%" }} />
                  <div style={{ color: "gray", fontSize: "0.75rem" }}>
                    Join Us
                  </div>
                  <img src={line} alt="line" style={{ width: "20%" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginLeft: "25%",
                  }}
                >
                  <div
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      border: "1px solid gray",
                      borderRadius: "0.5rem",
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
            <div className={styles.contact2div}>
              <img
                src={contact2}
                alt="contact_img"
                style={{
                  height: "100%",
                  width: "90%",
                }}
              />
            </div>
            <div className={styles.contact3div}>
              <img
                src={contact3}
                alt="contact_img"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirddiv}>
        <div className={styles.instagram_div}>
          <button
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <img
              src={instagram}
              alt="instagram_logo"
              style={{ height: "80%", width: "80%" }}
            />
          </button>
          <button
            style={{ cursor: "pointer", background: "none", border: "none" }}
          >
            <img
              src={linkedin}
              alt="linkedin_logo"
              style={{ height: "70%", width: "70%" }}
            />
          </button>
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

export default Homemob;
