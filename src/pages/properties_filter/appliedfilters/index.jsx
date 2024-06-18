import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import close from "./close.svg";
import { removeFilter, removerangeSlider } from "../../../redux/filterslice";

const Index = () => {
  const dispatch = useDispatch();
  const rangeSlider = useSelector((store) => store.filters.rangeSlider);
  const handleremovefilter = (name) => {
    dispatch(removeFilter(name));
  };
  const handleremoverangeSlider = () => {
    dispatch(removerangeSlider());
  };
  const appliedfilters = useSelector((store) => store.filters.appliedfilters);
  return (
    <div className={styles.filtersdiv}>
      {rangeSlider?.length > 0 &&
        (rangeSlider[0] !== 0 || rangeSlider[1] !== 100) && (
          <div
            className={styles.filter}
            onClick={() => handleremoverangeSlider()}
          >
            {rangeSlider[0] === 0 ? (
              <span>{`Upto ${rangeSlider[1]}`} </span>
            ) : rangeSlider[1] === 100 ? (
              <span>{`Starting from ${rangeSlider[0]}`} </span>
            ) : (
              <span>{rangeSlider[0] + " - " + rangeSlider[1]}</span>
            )}

            <div className={styles.imgdiv}>
              <img src={close} alt="img" style={{ width: "100%" }} />
            </div>
          </div>
        )}
      {appliedfilters &&
        appliedfilters?.map((filter, index) => {
          return (
            <div
              className={styles.filter}
              onClick={() => handleremovefilter(filter)}
            >
              <span>{filter}</span>

              <div className={styles.imgdiv}>
                <img src={close} alt="img" style={{ width: "100%" }} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
