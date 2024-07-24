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

const Section1 = ({
  onChange = () => {},
  name,
  stick,
  handlesectionScroll,
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
  section12,
  section,
}) => {
  const options = [
    { label: "Overview", section: null },
    { label: "Highlights", section: section2 },
    { label: "More About Project", section: section3 },
    { label: "Floor Plan", section: section4 },
    { label: "Tour This Project", section: section5 },
    { label: "Aminities", section: section6 },
    { label: "Section7", section: section7 },
    { label: "Contact Seller", section: section8 },
    { label: "Section9", section: section9 },
    { label: "Section10", section: section10 },
    { label: "Section11", section: section11 },
    { label: "Section12", section: section12 },
  ];
  const [active, setActive] = useState(options[0].label);
  const [shift, setShift] = useState(0);

  function changeHandler(option) {
    handlesectionScroll(option.section);
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

    <div className={styles.section1maindiv}>
      <div onClick={scrollprev} className={styles.leftarr}>
        <MdArrowBackIosNew size={12} />
      </div>
      <div onClick={scrollnext} className={styles.rightarr}>
        <MdArrowForwardIos size={12} />

      </div>
      <div className={classNames(styles.toggleContainer)} id="overflowbox">
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              borderBottom: section === index + 1 ? "4px solid #7065f0" : null,
              color: section === index + 1 ? "#7065f0" : null,
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
