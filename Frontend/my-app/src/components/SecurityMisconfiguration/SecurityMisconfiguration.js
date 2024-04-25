// SecurityMisconfiguration.js
import React from 'react';
import styles from './SecurityMisconfiguration.module.css';
import SMdescription from "./SMdescription";
import MyComponent from "../SecurityMisconfiguration/walkthrough";
import ErrorEd from "../SecurityMisconfiguration/SM_ErrorEd";
import ReactDOM from "react-dom";
import InsecureAdd from "./SM_InsecureAdd";
import SecureAdd from "./SM_SecureAdd";


const SecurityMisconfiguration = () => {
  const [isDescriptionVisible, setDescriptionVisible] = React.useState(true);
  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  const openAddUserInsecurePopup = () => {
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

    ReactDOM.render(<InsecureAdd closePopup={closePopup} />, containerDiv);
  };


  const openAddUserSecurePopup = () => {
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

    ReactDOM.render(<SecureAdd closePopup={closePopup} />, containerDiv);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Security Misconfiguration</h1>
      <div className={styles.description}>
        <h2>
          What are Security Misconfigurations?&nbsp;&nbsp;&nbsp;
          <button className={styles.button} onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide" : "Show"}
          </button>
          {isDescriptionVisible && <SMdescription />}
        </h2>
        </div>
        <h3>
          Perform an attack
        </h3>
        <p> - Please follow the Walkthrough section below to learn how to
          exploit security misconfigurations in an attack
          on this web application.<br></br>
          - Your goal will be to find out the login credentials for an
          existing user in our database using the "Add User Insecurely" button below.
          <br></br>
          - Don't forget to reset the database before you begin!
          <br></br>
          <br></br>
          - <b>Note: </b>Please do not use real-world credentials! This web app is
          meant to be insecure and any information entered is at risk
          of being found by others.
          <br></br><br></br>
        <button onClick={openAddUserInsecurePopup}>Add User Insecurely</button>&nbsp;&nbsp;
        <button onClick={openAddUserSecurePopup}>Add User Securely</button>
        </p>
      <div>
        <h3>Walkthrough</h3>
        <MyComponent />
      </div>
      <div>
        <h3>How is this insecure, and how can we make it better?</h3>
        <ErrorEd />
      </div>
    </div>
  );
};

export default SecurityMisconfiguration;