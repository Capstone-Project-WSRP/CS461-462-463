// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.createdBy}>
        Created by Devin Black, Lucas Craig Brown, Justice Kane, Stacey Cattel
      </div>
      <div className={styles.date}>Fall 2023</div>
    </footer>
  );
};

export default Footer;
