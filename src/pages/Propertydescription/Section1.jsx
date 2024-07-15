import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Button from "../../Atoms/Button";
import heart from "./heart.svg";
import location from "./location.svg";

const Section1 = ({ onChange = () => {}, name }) => {
  const options = [
    { label: "Overview" },
    { label: "Highlights" },
    { label: "More About Project" },
    { label: "Floor Plan" },
    { label: "Tour This Project" },
    { label: "Aminities" },
    { label: "Contact Seller" },
  ];
  const [active, setActive] = useState(options[0].label);

  function changeHandler(option) {
    setActive(option.label);
    onChange(option);
  }

  return (
    <div className={styles.section1maindiv}>
      <div className={classNames(styles.toggleContainer)}>
        {options.map((option, index) => (
          <div
            key={index}
            style={{ height: "2rem" }}
            onClick={() => {
              changeHandler(option);
            }}
            className={classNames(styles.option, {
              [styles.active]: active === option.label,
            })}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className={styles.section2intro} style={{ paddingTop: "2rem" }}>
        <div className={styles.section2heading}>
          <h4
            style={{ fontSize: "1.5rem", fontWeight: "650", flexWrap: "wrap" }}
          >
            {name}
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
            <div style={{ width: "1rem" }}>
              <img src={location} alt="img" style={{ width: "100%" }} />
            </div>

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
            <div style={{ width: "1rem" }}>
              <img src={heart} alt="img" style={{ width: "100%" }} />
            </div>
          </div>
          <Link to="/contact_builders" style={{}}>
            <Button type="primary2">Contact Builder</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
