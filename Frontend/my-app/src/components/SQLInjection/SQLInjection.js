// SQLInjection.js
import React from "react";
import styles from "./SQLInjectionmodule.css";
const SQLInjection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SQL Injection</h1>
      <p className={styles.description}>
        SQL Injection occurs when an attacker can manipulate a SQL query to
        execute unintended commands on the database. In this simulation, ....:
      </p>
    </div>
  );
};

export default SQLInjection;
