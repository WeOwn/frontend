import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ megaMenuData, isOpen, openDropdown, closeDropdown }) => {
  return (
    <div className={styles.megaDropdown} onMouseLeave={closeDropdown}>
      <div className={styles.grid}>
        {megaMenuData.map((item, index) => (
          <div key={index} className={styles.megaCategory}>
            <h4 className={styles.heading}>{item.category}</h4>
            <ul>
              {item.subcategories.map((subcat, subIndex) => (
                <li key={subIndex}>
                  <div className={styles.subcategory}>
                    <h6 style={{ fontSize: "0.9rem" }}>{subcat.heading}</h6>
                    <p style={{ fontSize: "0.75rem" }}>{subcat.para}</p>
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

export default Dropdown;
