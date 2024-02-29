import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to WSRP React App</h1>
      <p className={styles.description}>
        This is a Website Security Research Project (WSRP) simulation built with
        React for educational purposes.
      </p>
      <h1>Instructions</h1>
      <p className={styles.description}>
        There is no instructions yet because there is no working code as of now
        but as the project continues there will be more added this part of the
        application.
      </p>
      <h2 className={styles.title}>Vulnerabilities:</h2>
      <ul className={styles.description}>
        <li className={styles.description}>
          <Link className={styles.link} to="/broken-access-control">
            Broken Access Control
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/security-misconfiguration">
            Security Misconfiguration
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ssrf">
            Server-Side Request Forgery (SSRF)
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/sql-injection">
            SQL Injection
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
