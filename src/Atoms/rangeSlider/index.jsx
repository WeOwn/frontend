import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setrangeSlider } from "../../redux/filterslice";

const Index = () => {
  const dispatch = useDispatch();
  const rangeSlider = useSelector((store) => store.filters.rangeSlider);
  const minRange = rangeSlider[0];
  const maxRange = rangeSlider[1];
  const leftposition = `${(minRange / 100) * 100}%`;
  const rightposition = `${100 - (maxRange / 100) * 100}%`;
  // const [minRange, setMinRange] = useState(minvalue);
  // const [maxRange, setMaxRange] = useState(maxvalue);

  const handleMinRange = (e) => {
    const value = parseInt(e.target.value);
    if (maxRange - value >= 10 && value >= 0) {
      dispatch(setrangeSlider([value, maxRange]));
      // setMinRange(value);
    }
  };
  const handleMaxRange = (e) => {
    const value = parseInt(e.target.value);
    if (value - minRange >= 10 && value <= 100) {
      dispatch(setrangeSlider([minRange, value]));
      // setMaxRange(value);
    }
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.slider}>
        <div
          className={styles.progress}
          style={{
            left: leftposition,
            right: rightposition,
          }}
        ></div>

        <div
          className={styles.rectangle1}
          style={{
            left: leftposition,
          }}
        >
          {minRange}
        </div>
        <div
          className={styles.rectangle2}
          style={{
            right: rightposition,
          }}
        >
          {maxRange}
        </div>

        <input
          type="range"
          // min={0}
          // max={100}
          value={minRange}
          onChange={(e) => handleMinRange(e)}
          className={styles.minrange}
        />
        <input
          type="range"
          // min={0}
          // max={100}
          value={maxRange}
          onChange={(e) => handleMaxRange(e)}
          className={styles.maxrange}
        />
      </div>

      <div className={styles.rangeinput}></div>

      <div className={styles.inputp}>
        <input
          type="number"
          placeholder="Min Budget"
          className={styles.input}
          value={minRange === 0 ? "Min Budget" : minRange}
          onChange={(e) => handleMinRange(e)}
        />
        <input
          type="number"
          placeholder="Max Budget"
          className={styles.input}
          value={maxRange === 100 ? "Max Budget" : maxRange}
          onChange={(e) => handleMaxRange(e)}
        />
      </div>
    </div>
  );
};

export default Index;
