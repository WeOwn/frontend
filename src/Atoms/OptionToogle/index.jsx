import classNames from "classnames";
import React, { useState } from "react";
import styles from "./styles.module.css";

const options = {
  Buy: "buy",
  Rent: "rent",
  TopBuilders: "topBuilder",
  GroupInvestment: "ginvestment",
  Compare: "compare",
};

const OptionToogle = ({ onChange = () => {} }) => {
  const [active, setActive] = useState(Object.keys(options)[0]);

  function changeHandler(option) {
    console.log(option);
    setActive(option);
    onChange(options[option]);
  }

  return (
    <div
      className={classNames(styles.flexRow)}
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-around",
        alignItems: "center",
        height: "auto", // Adjust height based on content
        padding: "20px 0", // Adjust vertical padding
        background: "white",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      {Object.keys(options).map((option, index) => (
        <div
          key={index}
          onClick={() => {
            changeHandler(option);
          }}
          style={{
            cursor: "pointer",
            margin: "0 10px", // Adjust horizontal margin
            borderBottom: `3px solid ${
              active === option ? "#7065F0" : "transparent"
            }`, // Highlight active option
            color: `${active === option ? "#7065F0" : "black"}`,
          }}
          className={classNames(styles.text)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default OptionToogle;
