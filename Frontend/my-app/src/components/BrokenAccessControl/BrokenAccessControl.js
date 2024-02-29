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

    const containerDiv = popupWindow.document.createElement("div");
    containerDiv.id = "popupContainer";
    popupWindow.document.body.appendChild(containerDiv);

    ReactDOM.render(<AddUser closePopup={closePopup} />, containerDiv);

    const style = popupWindow.document.createElement("style");
    style.textContent = `
  body { font-family: 'Arial', sans-serif; padding: 20px; background-color: #f4f4f4; }
  input, button { 
    margin-top: 10px; 
    display: block; 
    width: 100%; /* Makes the input and buttons stretch to 90% of their container's width */
    padding: 10px; /* Adds padding inside the input fields and buttons */
    border: 1px solid #ccc; /* Adds a border around the input fields and buttons */
    border-radius: 4px; /* Rounds the corners of the input fields and buttons */
    box-sizing: border-box; /* Includes padding and border in the element's total width and height */
  }
  input:focus, button:focus { 
    border-color: #66afe9; /* Changes the border color when the element is focused */
    outline: 0; /* Removes the default focus outline */
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6); /* Adds a glow effect on focus */
  }
  label { 
    margin-top: 20px; 
    text-align: center;
    display: block; /* Ensures that labels take up the full width like a block-level element */
    font-weight: bold; /* Makes the text of the label bold */
  }
  h2{
    text-align: center;
  }
  button { 
    background-color: #4CAF50; /* Changes the background color of the button */
    color: white; /* Changes the text color of the button */
    border: none; /* Removes the border from the button */
    cursor: pointer; /* Changes the cursor to indicate the button is clickable */
  }
  button:hover { 
    background-color: #45a049; /* Darkens the button background on hover */
  }
  #popupContainer {
    transition: 0.3s; /* Animates the shadow effect */
    border-radius: 5px; /* Rounds the corners of the popup container */
  }
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
