import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Section1 = ({ onChange = () => {} }) => {
  const userDetails = useSelector((store) => store.user);
  // const [value, setValue] = useState(0);
  const options = [
    { id: 1, label: "Recent Searches", value:0 },
    { id: 2, label: "Viewed", value: userDetails?.propertiesViewed?.length },
    { id: 3, label: "Shortlisted",value:0 },
    { id: 4, label: "Contacted",value:0 },
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
          key={option.id}
          style={{ height: "2rem" }}
          onClick={() => {
            changeHandler(option);
          }}
          className={classNames(styles.option, {
            [styles.active]: active === option.label,
          })}
        >
          {option.value + " " + option.label}
        </div>
      ))}
    </div>
  );
};

export default Section1;
