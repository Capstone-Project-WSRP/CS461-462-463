// SSRF.js
import React from 'react';
import styles from './SSRF.module.css';
const SSRF = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Server-Side Request Forgery (SSRF)</h1>
      <p className={styles.description}>
        SSRF occurs when an attacker can make the server perform requests on their behalf, potentially to internal resources.
        In this simulation, ....:
      </p>
    </div>
  );
};

export default SSRF;