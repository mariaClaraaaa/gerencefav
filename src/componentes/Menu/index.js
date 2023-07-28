import React from 'react';
import styles from './Menu.module.css'
 

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;