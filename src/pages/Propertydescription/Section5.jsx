import React from "react";
import styles from "./styles.module.css";

const Section5 = () => {
  return (
    <div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650", whiteSpace: "wrap" }}>
        Inquire About Seaside Serenity Villa
      </h4>
      <p
        style={{ marginTop: "0.9rem", fontWeight: "550" }}
        className={styles.desc}
      >
        Interested in this property? Fill out the form below, and our real
        estate expert will get back to you with more details, including
        scheduling a viewing and answering any questions you may have.
      </p>
      <div>
        <div
          style={{
            border: "1px solid grey",
            padding: "3rem 2rem",
            marginTop: "4rem",
            borderRadius: "10px",
          }}
        >
          <form>
            <div className={styles.formgrid}>
              <div style={{ width: "100%" }}>
                <label htmlFor="firstName" style={{ fontWeight: "550" }}>
                  First Name
                </label>
                <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="lastName" style={{ fontWeight: "550" }}>
                  Last Name
                </label>
                <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="email" style={{ fontWeight: "550" }}>
                  Email
                </label>
                <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="phoneNumber" style={{ fontWeight: "550" }}>
                  Phone
                </label>
                <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </div>
              </div>
            </div>

            <div style={{ width: "100%", marginTop: "2rem" }}>
              <label htmlFor="selectedProperty" style={{ fontWeight: "550" }}>
                Selected Property
              </label>
              <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                <input
                  id="selectedProperty"
                  name="selectedProperty"
                  type="text"
                  placeholder="Enter Selected Property"
                />
              </div>
            </div>

            <div style={{ width: "100%", marginTop: "2rem" }}>
              <label htmlFor="message" style={{ fontWeight: "550" }}>
                Message
              </label>
              <div
                className={styles.inputdiv}
                style={{ marginTop: "1rem", height: "12rem" }}
              >
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Your Message"
                  style={{
                    width: "100%",
                    height: "100%",
                    resize: "none",
                    border: "none",
                    outline: "none",
                    // borderColor: "black",
                    // row: "50",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2rem",
                flexWrap: "wrap",
                marginTop: "4rem",
              }}
            >
              <div
                style={{
                  // width: "70%",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  // flexWrap: "wrap",
                }}
              >
                <div>
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <p style={{ fontSize: "0.8rem" }}>
                  I agree with{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Terms of use
                  </span>{" "}
                  and{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Privacy Policy
                  </span>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#7065f0",
                  display: "",
                  padding: "0.8rem 1rem",
                  borderRadius: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "0.9rem",
                  }}
                >
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section5;
