import React, { useState } from "react";
import OtpModal from "../../components/OtpModal";
import styles from "./style.module.css";
import bannerImage from "./home.png";
import googleLogo from "./google.png";
import axios from "axios";
import { Link } from "react-router-dom";
import otpService from "../../service/otpService";

function Login() {
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }

    try {
      const response = await otpService.getOtp(phone);

      if (response.status === 200) {
        // Handle the response data as needed

        console.log("API Response:", response.data);

        // Display OTP modal
        setShowOtp(true);
      } else {
        // Handle error responses
        console.error("API Error:", response.status, response.statusText);
        alert("Failed to request OTP. Please try again.");
      }
    } catch (error) {
      console.error("API Request Error:", error);
      alert("Failed to request OTP. Please try again.");
    }

    // console.log("Form submitted:", {
    //   firstName,
    //   lastName,
    //   phone,
    //   termsAccepted,
    // });
  };

  const closeOtpModal = () => {
    setShowOtp(false);
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.bannerimage}>
        <img className={styles.homeimg} src={bannerImage} alt="Banner Image" />

        <div className={styles.blurdiv}>
          <h1>Welcome To Weown</h1>
          <br></br>
          <h1>We're glad you're here</h1>
        </div>
      </div>

      <div
        className={`${styles["signup-page"]} ${
          showOtp ? styles["blur-background"] : ""
        }`}
      >
        <div className={styles.headingRow}>
          <header className={styles.header}>
            <div className={styles.logo}>Login into your account</div>
            <div className={styles["welcome-title"]}>
              Enter your credentials to login
            </div>
          </header>
          <div className={styles.language}>
            <button className={styles["languageButton"]}>
              Change language
            </button>
          </div>
        </div>
        <main className={styles.main}>
          <form className={styles["signup-form"]} onSubmit={handleSubmit}>
            <div className={styles.inputPhone}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                name="phone"
                className={styles.nameInput}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className={styles["terms-checkbox"]}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className={styles.checkedField}
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">Remember me</label>
            </div>
            <button type="submit" className={styles["register-button"]}>
              Login
            </button>
          </form>

          <div className={styles["login-link"]}>
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
          <div className={styles["social-login"]}>
            <button className={styles["google-login"]}>
              <img
                src={googleLogo}
                alt="Google Logo"
                className={styles["google-logo"]}
              />
              Continue with Google
            </button>
          </div>
        </main>
      </div>

      {showOtp && (
        <OtpModal
          onClose={closeOtpModal}
          onSubmit={(apiEndpoint, data) => {
            console.log("API endpoint:", apiEndpoint);
            console.log("Data to send:", data);
          }}
          userData={{
            phoneNumber: phone,
          }}
          apiEndpoint="https://weownbackend.azurewebsites.net/user/signup"
        />
      )}
    </div>
  );
}

export default Login;
