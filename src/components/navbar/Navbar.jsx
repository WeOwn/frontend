import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './logo.png'; 
import styles from './styles.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
      <img src={LogoImage} alt="Logo" />
    </div>
    <div className={styles.navCenter}>
      <ul className={styles.navOptions}>
        <li><Link to="/">View & Buy</Link></li>
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
