// Footer.js
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  // Handler function to reset the database
  const handleResetDB = async (event) => {
    event.preventDefault();
    const url = `http://localhost:5000/resetDB`;
    try {
      const response = await fetch(url, {
        method: "GET", // Now using GET method
      });
      const data = await response.json();
      return alert(data.message);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    // Example: axios.post('/api/reset-db').then(() => alert('Database reset successfully!'));
  };

  return (
    <footer className={styles.footer}>
      {/* Reset DB Button */}
      <button className={styles.resetButton} onClick={handleResetDB}>
        Reset Database
      </button>
      <div className={styles.createdBy}>
        Created by Devin Black, Lucas Craig Brown, Justice Kane, Stacey Cattel
      </div>
      <div className={styles.date}>Fall 2023</div>
    </footer>
  );
};

export default Footer;
