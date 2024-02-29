// BrokenAccessControl.jsx
import React from "react";
import ReactDOM from "react-dom";
import AddUser from "./addUser"; // Your current AddUser component
import Search from "./search";
import BACdescription from "./BACdescription";
import MyComponent from "./walkthrough.jsx";
import styles from "./BrokenAccessControl.module.css";

const BrokenAccessControl = () => {
  const [isDescriptionVisible, setDescriptionVisible] = React.useState(true);
  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  const openAddUserPopup = () => {
    // Desired popup size
    const width = 300;
    const height = 300;

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

    const containerDiv = popupWindow.document.createElement("div");
    containerDiv.id = "popupContainer";
    popupWindow.document.body.appendChild(containerDiv);

    ReactDOM.render(<AddUser closePopup={closePopup} />, containerDiv);

    const style = popupWindow.document.createElement("style");
    style.textContent = `
      body { font-family: Arial, sans-serif; padding: 20px; }
      input, button { margin-top: 10px; display: block; }
      label { margin-top: 20px; }
    `;
    popupWindow.document.head.appendChild(style);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Broken Access Control</h1>
      <div className={styles.description}>
        <Search />
        <button onClick={openAddUserPopup}>Add User</button>
        <h2>What is Broken Access Control</h2>
        {isDescriptionVisible && <BACdescription />}
        <button onClick={toggleDescription}>
          {isDescriptionVisible ? "Hide" : "Show"}
        </button>
      </div>
      <div>
        <h3>Perform this Attack</h3>
        <MyComponent />
      </div>
    </div>
  );
};

export default BrokenAccessControl;
