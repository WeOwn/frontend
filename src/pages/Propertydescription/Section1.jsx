import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const Section1 = ({ onChange = () => {} }) => {
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
    console.log(option);
  }

  return (
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
  );
};

export default Section1;
