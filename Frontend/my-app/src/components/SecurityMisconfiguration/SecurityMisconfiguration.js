// SecurityMisconfiguration.js
import React from 'react';
import styles from './SecurityMisconfiguration.module.css';
import SMdescription from "./SMdescription";
import MyComponent from "../SecurityMisconfiguration/walkthrough";
import ReactDOM from "react-dom";
import InsecureAdd from "./SM_InsecureAdd";


const SecurityMisconfiguration = () => {
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

    ReactDOM.render(<InsecureAdd closePopup={closePopup} />, containerDiv);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Security Misconfiguration</h1>
      <div className={styles.description}>
        <p>
          <button onClick={openAddUserPopup}>Add User</button>
        </p>
        <h2>
          What are Security Misconfigurations?&nbsp;&nbsp;&nbsp;
          <button className={styles.button} onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide" : "Show"}
          </button>
          {isDescriptionVisible && <SMdescription />}
        </h2>
      </div>
      <div>
        <h3>Perform this Attack</h3>
        <MyComponent />
      </div>
    </div>
  );
};

export default SecurityMisconfiguration;