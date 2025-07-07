import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Bocuket-Place</div>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <a href="#home" className={styles.navItem}>Home</a>
        <a href="#about" className={styles.navItem}>About Us</a>
        <a href="#delivery" className={styles.navItem}>Delivery</a>
        <a href="#contact" className={styles.navItem}>Contact</a>
      </nav>

      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
};

export default Header;
