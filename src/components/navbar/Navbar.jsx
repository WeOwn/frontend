// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './logo.png';
import styles from './styles.module.css';
import Dropdown from '../../Atoms/dropdown/Dropdown';


function Navbar() {

   
  const megaMenuData = [
    {
      category: 'Category 1',
      subcategories: ['Subcategory 1.1', 'Subcategory 1.2', 'Subcategory 1.3'],
    },
    {
      category: 'Category 2',
      subcategories: ['Subcategory 2.1', 'Subcategory 2.2', 'Subcategory 2.3'],
    },
    
  ];

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    
      const closeDropdown = () => {
        setDropdownOpen(false);
      };
    

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={LogoImage} alt="Logo" />
      </div>
      <div className={styles.navCenter}>
        <ul className={styles.navOptions}>
        <li className={`${styles.navItem} ${styles.megaDropdownContainer}`} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
            <Link to="/">View & Buy</Link>
            <Dropdown megaMenuData={megaMenuData} isOpen={isDropdownOpen} onClose={closeDropdown} /> 
          </li>
          <li><Link to="/">Search Builders</Link></li>
          <li><Link to="/">Group Investment</Link></li>
          <li><Link to="/">List Property</Link></li>
          <li><Link to="/">Compare</Link></li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <Link to="/signup" className={styles.registerButton}>Register</Link>
        <Link to="/login" className={styles.loginButton}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
