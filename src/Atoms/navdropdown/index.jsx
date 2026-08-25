import React from "react";
import styles from "./styles.module.css";

const index = ({ navdropdownlist, closeDropdown }) => {
  return (
    <div className={styles.megaDropdown} onMouseLeave={closeDropdown}>
      <div className={styles.grid}>
        {navdropdownlist.map((item, index) => (
          <div key={index} className={styles.megaCategory}>
            <h4 className={styles.heading}>{item.category}</h4>
            <ul>
              {item.subcategories.map((subcat, subIndex) => (
                <li key={subIndex}>
                  <div className={styles.subcategory}>
                    <h6>{subcat.heading}</h6>
                    <p>{subcat.para}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
