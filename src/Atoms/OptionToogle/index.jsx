import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css"; // Import the CSS file

const options = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Top Builders", value: "topBuilder" },
  { label: "Group Investment", value: "ginvestment" },
  { label: "Compare", value: "compare" },
];

const OptionToogle = ({ onChange = () => {} }) => {
  const [active, setActive] = useState(options[0].label);

  function changeHandler(option) {
    setActive(option.label);
    onChange(option);
    console.log(option);
  }

  return (
    <div className={classNames(styles.flexRow)}>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            changeHandler(option);
          }}
          className={classNames(styles.text, {
            [styles.active]: active === option.label,
          })}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default OptionToogle;
