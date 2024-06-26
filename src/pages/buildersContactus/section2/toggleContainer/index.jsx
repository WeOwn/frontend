import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

const ToggleContainer = ({ onChange = () => {} }) => {
  const options = [
    { label: "All" },
    { label: "Regional" },
    { label: "International" },
  ];
  const [active, setActive] = useState(options[0].label);

  function changeHandler(option) {
    setActive(option.label);
    onChange(option);
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

export default ToggleContainer;
