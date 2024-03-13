import React, { useState } from "react"; // Import useState.
import Search from "./search";
import AddUser from "./addUser.jsx";
import BACdescription from "./BACdescription.jsx";
import MyComponent from "./walkthrough.jsx";
import styles from "./BrokenAccessControl.module.css";

const BrokenAccessControl = () => {
  // State to manage visibility of BACdescription.
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  // Toggle function.
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  console.log("BrokenAccessControl component rendered");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Broken Access Control</h1>
      <p className={styles.description}>
        <Search />
        <AddUser />
        <h2>What is Broken Access Control</h2>

        {/* Conditionally rendering "BACdescription" based on "isDescriptionVisible". */}
        {isDescriptionVisible && <BACdescription />}
        {/* Button to toggle the description. */}
        <button onClick={toggleDescription}>
          {isDescriptionVisible ? "Hide" : "Show"}
        </button>
        <br></br>
      </p>
      <p>
        <h3>Perform this Attack</h3>
        <MyComponent />
      </p>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default BrokenAccessControl;
