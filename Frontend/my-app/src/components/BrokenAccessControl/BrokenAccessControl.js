// BrokenAccessControl.js
import React from 'react';
import styles from './BrokenAccessControl.module.css';
const BrokenAccessControl = () => {
  console.log('BrokenAccessControl component rendered');
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Broken Access Control</h1>
      <p className={styles.description}>
        Broken Access Control occurs when a user can perform actions they're not supposed to. 
        In this simulation....:
      </p>
    </div>
  );
};

export default BrokenAccessControl;