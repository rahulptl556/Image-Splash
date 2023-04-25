import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Image Splash</h1>
      <p className={styles.desc}>Download Premium 4k Images For Free </p>
    </header>
  );
};

export default Header;