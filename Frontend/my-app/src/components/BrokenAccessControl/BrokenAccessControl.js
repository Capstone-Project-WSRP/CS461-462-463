<<<<<<< HEAD
import React, { useState } from "react"; // Import useState.
import Search from "./search";
import AddUser from "./addUser.jsx";
import BACdescription from "./BACdescription.jsx";
=======
import React from "react";
import ReactDOM from "react-dom";
import AddUser from "./addUser";
import Search from "./search";
import BACdescription from "./BACdescription";
>>>>>>> main
import MyComponent from "./walkthrough.jsx";
import styles from "./BrokenAccessControl.module.css";

const BrokenAccessControl = () => {
<<<<<<< HEAD
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
=======
  const [isDescriptionVisible, setDescriptionVisible] = React.useState(true);
  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  const openAddUserPopup = () => {
    // Desired popup size
    const width = 300;
    const height = 350;

    // Calculate the position to center the popup
    const left = window.screenLeft + window.screen.availWidth / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popupWindow = window.open(
      "",
      "Add User",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    const closePopup = () => {
      if (popupWindow) {
        popupWindow.close();
      }
    };

    popupWindow.document.title = "Add User";
    const link = popupWindow.document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./popupStyles.css";
    popupWindow.document.head.appendChild(link);

    const containerDiv = popupWindow.document.createElement("div");
    containerDiv.id = "popupContainer";
    popupWindow.document.body.appendChild(containerDiv);

    ReactDOM.render(<AddUser closePopup={closePopup} />, containerDiv);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Broken Access Control</h1>
      <div className={styles.description}>
        <Search />
        <p>
          <button onClick={openAddUserPopup}>Add User</button>
        </p>
        <h2>
          What is Broken Access Control
          <button className={styles.button} onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide" : "Show"}
          </button>
          {isDescriptionVisible && <BACdescription />}
        </h2>
      </div>
      <div>
        <h3>Perform this Attack</h3>
        <MyComponent />
      </div>
>>>>>>> main
    </div>
  );
};

export default BrokenAccessControl;
