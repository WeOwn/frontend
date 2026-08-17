import React, { useState } from "react";
import styles from "./LeadModal.module.css";
import api from "../../service/apiGateway";

const LeadModal = ({ propertyId, refCode, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return setError("Please enter your name");
    if (phone.trim().length < 10) return setError("Please enter a valid 10-digit phone number");
    setError("");
    setSubmitting(true);
    try {
      await api.post("/leads/capture", {
        propertyId,
        ref: refCode || "",
        name: name.trim(),
        phone: phone.trim().replace(/[^0-9]/g, ""),
      });
      setDone(true);
      setTimeout(onClose, 2200);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        {done ? (
          <div className={styles.successWrap}>
            <div className={styles.successIcon}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Thank You, {name.split(" ")[0]}!</h3>
            <p className={styles.successText}>
              Our team will reach out with exclusive pricing and launch details shortly.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.iconWrap}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 9h8" />
                <path d="M8 13h5" />
              </svg>
            </div>
            <h3 className={styles.title}>Get Exclusive Property Details</h3>
            <p className={styles.subtitle}>
              Enter your name and phone number to receive the complete brochure, pricing and launch experience access.
            </p>

            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.input}
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Phone Number</label>
              <input
                className={styles.input}
                placeholder="e.g. 9876543210"
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button className={styles.submitBtn} onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Submitting..." : "Submit & Get Details"}
            </button>
            <button className={styles.skipBtn} onClick={onClose}>
              Skip for now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
