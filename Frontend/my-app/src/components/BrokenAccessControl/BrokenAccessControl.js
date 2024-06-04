import React from "react";
import ReactDOM from "react-dom";
import AddUser from "./addUser";
import Search from "./search";
import BACdescription from "./BACdescription";
import BACwalkthrough from "./walkthrough.jsx";
import BACsecurity from "./security.jsx";
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
      <div>
        <Search />
        <p>
          <button className={styles.fetch} onClick={openAddUserPopup}>Add User</button>
        </p>
        <h2>
          What is Broken Access Control?&nbsp;&nbsp;&nbsp;
          <button className={styles.fetch} onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide" : "Show"}
          </button>
        </h2>
        {isDescriptionVisible && <BACdescription />}
      </div>
      <br></br>
      <div>
        <h2>Perform this Attack</h2>
        <BACwalkthrough />
      </div>
      <br></br>
      <div>
        <h2>How it is Secure</h2>
        <BACsecurity />
      </div>
    </div>
  );
};

export default BrokenAccessControl;
