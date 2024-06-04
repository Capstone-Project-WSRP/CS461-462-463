import React from 'react';

const MyComponent = () => {
  return (
    <div >
      <h2>Perform this attack</h2>
      <p>These are the steps that you will need to follow to perform this vulnerability:</p>
      <ol>
			
        <li>First, you will need to install Burp Suite Community edition.</li>
        <li>Launch Burp Suite and start a project.</li>
				<img src="/assets/ssrf/step1.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <li>Use the default options for the project setup.</li>
				<img src="/assets/ssrf/step2.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <li>Click on the Proxy tab.</li>
				<img src="/assets/ssrf/step3.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
        <li>Open a browser and navigate to the web application.</li>
				<img src="/assets/ssrf/step4.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
				<img src="/assets/ssrf/step5.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
        <li>Click the Target tab.</li>
				<img src="/assets/ssrf/step6.png" alt="step" style={{ width: '60vw', height: 'auto' }}/>
        <li>Begin the pen testing in the web application by finding the server using different error messages and Burp Suite.</li>
				<img src="/assets/ssrf/step7.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <li>Once the server is found, determine if it uses HTTPS.</li>
        <img src="/assets/ssrf/step8.png" alt="step" style={{ width: '50vw', height: 'auto' }}/>
				
        <li>Find the text file containing the passwords by testing URLs with common file names such as "passwords" or "passwrds".</li>
        <img src="/assets/ssrf/step9.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <li>If necessary, explore deeper directories such as "static".</li>
        <img src="/assets/ssrf/step10.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
				
        <li>Identify the correct file path, for example, http://(where the server is hosted)/static/password.txt.</li>
        <img src="/assets/ssrf/step11.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <li>Access the file using the input field and common knowledge. AKA common words that are used for storing things such as data.txt, passwords.txt, or users.txt.</li>
        <img src="/assets/ssrf/step12.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
      </ol>
      <p style={{margin: '40px',}}>
        Attackers who normally find files set up scripts to automatically find files on open internal networks, so they don’t have to pen tests like that themselves.
      </p>
    </div>
  );
};

export default MyComponent;
