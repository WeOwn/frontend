import React from "react";
import styles from "./styles.module.css";

const SearchBardrop = ({ list }) => {
  return (
    <div className={styles.dropdownContainer}>
      {list.map((element, index) => {
        return <div className={styles.list}>{element}</div>;
      })}
    </div>
  );
};

export default SearchBardrop;
