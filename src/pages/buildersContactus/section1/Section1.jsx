import React from "react";
import styles from "./styles.module.css";
import blackstardesign from "../blackstardesign.svg";

const Section1 = () => {
  return (
    <div>
      <div style={{ width: "3rem", marginLeft: "-1rem" }}>
        <img
          src={blackstardesign}
          alt="img"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h4 style={{ fontSize: "2rem", fontWeight: "650" }}>Let's Connect</h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <p style={{ color: "#999999" }} className={styles.desc}>
          We're excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you're a prospective client, partner, or simply curious about
          our services, we're here to answer your questions and provide the
          assistance you need.
        </p>
      </div>

      <div className={styles.formdivp}>
        <form>
          <div className={styles.formgrid}>
            <div style={{ width: "100%" }}>
              <label htmlFor="firstName" style={{ fontWeight: "650" }}>
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
              <label htmlFor="lastName" style={{ fontWeight: "650" }}>
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
              <label htmlFor="email" style={{ fontWeight: "650" }}>
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
              <label htmlFor="phoneNumber" style={{ fontWeight: "650" }}>
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
            <div style={{ width: "100%" }}>
              <label htmlFor="inquiryType" style={{ fontWeight: "650" }}>
                Inquiry Type
              </label>
              <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                <select
                  id="inquiryType"
                  name="options"
                  required
                  style={{ width: "100%", border: "none", outline: "none" }}
                >
                  <option value="" disabled selected>
                    Select Inquiry Type
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="inquiryType" style={{ fontWeight: "650" }}>
                How Did You Hear About Us?
              </label>
              <div className={styles.inputdiv} style={{ marginTop: "1rem" }}>
                <select
                  id="inquiryType"
                  name="options"
                  required
                  style={{ width: "100%", border: "none", outline: "none" }}
                >
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ width: "100%", marginTop: "3rem" }}>
            <label htmlFor="message" style={{ fontWeight: "650" }}>
              Message
            </label>
            <div
              className={styles.inputdiv}
              style={{ marginTop: "1rem", height: "8rem" }}
            >
              <textarea
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Message here..."
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
              marginTop: "3rem",
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
  );
};

export default Section1;
