import React, { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Button from "../../Atoms/Button";
import heart from "./heart.svg";
import location from "./location.svg";
import Slider from "../../components/slider/Slider";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Scrollspy from "react-scrollspy";

const Section1 = ({
  onChange = () => {},
  
  
  handlesectionScroll,
 
  

  section,
}) => {
  const options = [
    { label: "Overview", id:1 },
    { label: "Highlights", id:2 },
    { label: "More About Project", id:2 },
    { label: "Floor Plan", id:2 },
    { label: "Pricing Details", id:3 },
    { label: "Map View", id:4 },
    { label: "Contact Builder", id:5 },
    { label: "Reviews", id:6 },

  ];
  const [active, setActive] = useState(options[0].label);
  const [shift, setShift] = useState(0);

  function changeHandler(option) {
    handlesectionScroll(option.id);
    // setActive(option.label);
    // onChange(option);
  }
  const box = document.querySelector("#overflowbox");
  const scrollprev = () => {
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft - width,
      behavior: "smooth",
    });
  };
  const scrollnext = () => {
    const width = box.clientWidth;
    box.scrollTo({
      left: box.scrollLeft + width,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.section1maindiv} >
      {/* <div onClick={scrollprev} className={styles.leftarr}>
        <MdArrowBackIosNew size={12} />
      </div>
      <div onClick={scrollnext} className={styles.rightarr}>
        <MdArrowForwardIos size={12} />
      </div> */}
     
      <div className={classNames(styles.toggleContainer)} id="overflowbox">
        {options.map((option, index) => (
          <div
            key={option.id}
            style={{
              borderBottom: section === option.id ? "3px solid #7065f0" : null,
              color: section === option.id ? "#7065f0" : null,
              // transform: section === index + 1 ? "scale(1.1)" : null,
              height: "2.8rem",
            }}
            onClick={() => {
              changeHandler(option);
            }}
            // className={classNames(styles.option, {
            //   [styles.active]: active === option.label,
            // })}
            className={styles.option}
          >
        {option.label}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Section1;
