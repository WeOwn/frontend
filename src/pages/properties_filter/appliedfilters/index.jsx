import React from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import close from "./close.svg";
import { removeFilters, removepriceRange } from "../../../redux/filterslice";

const Index = () => {
  const dispatch = useDispatch();
  const priceRange = useSelector((store) => store.filters.priceRange);
  const handleremovefilter = (name) => {
    dispatch(removeFilters({ type: "city", value: name }));
  };
  const handleremovepriceRange = () => {
    dispatch(removeFilters({ type: "priceRange" }));
  };
  const city = useSelector((store) => store.filters.city);
  return (
    <div className={styles.filtersdiv}>
      {priceRange?.length > 0 &&
        (priceRange[0] !== 0 || priceRange[1] !== 60000000) && (
          <div
            className={styles.filter}
            onClick={() => handleremovepriceRange()}
          >
            {priceRange[0] === 0 ? (
              <span>{`Upto ${priceRange[1]}`} </span>
            ) : priceRange[1] === 60000000 ? (
              <span>{`Starting from ${priceRange[0]}`} </span>
            ) : (
              <span>{priceRange[0] + " - " + priceRange[1]}</span>
            )}

            <div className={styles.imgdiv}>
              <img src={close} alt="img" style={{ width: "100%" }} />
            </div>
          </div>
        )}
      {/* {appliedfilters &&
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
        })} */}
      {city && (
        <div className={styles.filter} onClick={() => handleremovefilter(city)}>
          <span>{city}</span>

          <div className={styles.imgdiv}>
            <img src={close} alt="img" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
