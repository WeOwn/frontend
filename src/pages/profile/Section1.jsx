import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const Section1 = ({ onChange = () => {} }) => {
  const [value, setValue] = useState(0);
  const options = [
    { id: 1, label: "Recent Searches" },
    { id: 2, label: "Viewed" },
    { id: 3, label: "Shortlisted" },
    { id: 4, label: "Contacted" },
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
          key={option.id}
          style={{ height: "2rem" }}
          onClick={() => {
            changeHandler(option);
          }}
          className={classNames(styles.option, {
            [styles.active]: active === option.label,
          })}
        >
          {value + " " + option.label}
        </div>
      ))}
    </div>
  );
};

export default Section1;
