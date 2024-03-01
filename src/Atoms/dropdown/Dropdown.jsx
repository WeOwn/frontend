import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ megaMenuData, isOpen, onClose }) => {
  return (
    <div className={`${styles.megaDropdown} ${isOpen ? styles.show : ''}`}>
      {megaMenuData.map((item, index) => (
        <div key={index} className={styles.megaCategory}>
          <h4>{item.category}</h4>
          <ul>
            {item.subcategories.map((subcat, subIndex) => (
              <li key={subIndex} onClick={onClose}>{subcat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
