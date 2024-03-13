import React, { useState, useEffect } from 'react';
import styles from './SSRF.module.css';
import SSRFdescription from './SSSRFdescription';
import MyComponent from "./walkthrough";

const SSRF = () => {
  const [url, setUrl] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [error, setError] = useState('');
  const [isDescriptionVisible, setDescriptionVisible] = React.useState(true);
  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  const handleFetchFile = async () => {
    const fetchUrl = 'http://localhost:5000/fetch_file';

    try {
      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setFileContent(responseData.file_content);
        setError('');
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        setFileContent('');
      }
    } catch (error) {
      setError('An error occurred');
      setFileContent('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Server-Side Request Forgery (SSRF)</h1>
      <p className={styles.description}>
        SSRF occurs when an attacker can make the server perform requests on their behalf, potentially to internal resources.
        In this simulation, we are trying to fetch a file that is server-side that contains the passwords of the users in the database. 
        We are going to do this doing pen testing and the server is going to give us some feedback as we do it.
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter URL of the file"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleFetchFile}>Fetch File</button>
      </div>
      {fileContent && <pre>{fileContent}</pre>}
      {error && <div>Error: {error}</div>}
      <button className={styles.button} onClick={toggleDescription}>
            {isDescriptionVisible ? "Hide" : "Show"}
          </button>
          {isDescriptionVisible && <SSRFdescription />}
      <div>
        <MyComponent />
      </div>
    </div>
  );
};

export default SSRF;