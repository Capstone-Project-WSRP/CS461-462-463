import React, { useState } from "react"; // Import useState.
import Search from "./SQLInjectionSearch";
import styles from "./SQLInjection.module.css";
import SQLdescription from "./SQLdescription.jsx";
import MyComponent from "./walkthrough.jsx";

const SQLInjection = () => {
    // State to manage visibility of BACdescription.
    const [isDescriptionVisible, setDescriptionVisible] = useState(true);

    // Toggle function.
    const toggleDescription = () => {
      setDescriptionVisible(!isDescriptionVisible);
    };


  console.log("SQLInjection component rendered");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SQL Injection</h1>
      <p className={styles.description}>
        <Search />
        <br></br>
        <h2>
          What are SQL Injections?&nbsp;&nbsp;&nbsp;
          {/* Button to toggle the description. */}
          <button className={styles.fetch} onClick={toggleDescription}>
              {isDescriptionVisible ? "Hide" : "Show"}
          </button>
        </h2>
        {/* Conditionally rendering "SQLdescription" based on "isDescriptionVisible". */}
        {isDescriptionVisible && <SQLdescription />}
      </p>
      <p>
        <h2>Perform this Attack</h2>
        <MyComponent />
      </p>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default SQLInjection;