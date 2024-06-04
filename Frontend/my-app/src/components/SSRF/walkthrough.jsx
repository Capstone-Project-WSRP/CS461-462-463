import React from 'react';

const MyComponent = () => {
  return (
    <div >
      <h2>Perform this Attack</h2>
      <p>These are the steps that you will need to follow to perform this vulnerability:</p>
      <ol>
			
        <li><strong>First, you will need to install Burp Suite Community edition.</strong></li>
        <br></br>

        <li><strong>Launch Burp Suite and start a project.</strong></li>
				<img src="/assets/ssrf/step1.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Use the default options for the project setup.</strong></li>
				<img src="/assets/ssrf/step2.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Click on the Proxy tab.</strong></li>
				<img src="/assets/ssrf/step3.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Open a browser and navigate to the web application.</strong></li>
				<img src="/assets/ssrf/step4.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
				<img src="/assets/ssrf/step5.png" alt="step" style={{ width: '40vw', height: 'auto' }}/>
        <br></br>
        <br></br>
        
        <li><strong>Click the Target tab.</strong></li>
				<img src="/assets/ssrf/step6.png" alt="step" style={{ width: '60vw', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Begin the pen testing in the web application by finding the server using different error messages and Burp Suite.</strong></li>
				<img src="/assets/ssrf/step7.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Once the server is found, determine if it uses HTTPS.</strong></li>
        <img src="/assets/ssrf/step8.png" alt="step" style={{ width: '50vw', height: 'auto' }}/>
				<br></br>
        <br></br>

        <li><strong>Find the text file containing the passwords by testing URLs with common file names such as "passwords" or "passwrds".</strong></li>
        <img src="/assets/ssrf/step9.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>If necessary, explore deeper directories such as "static".</strong></li>
        <img src="/assets/ssrf/step10.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
				<br></br>
        <br></br>

        <li><strong>Identify the correct file path, for example, http://(where the server is hosted)/static/password.txt.</strong></li>
        <img src="/assets/ssrf/step11.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>

        <li><strong>Access the file using the input field and common knowledge. AKA common words that are used for storing things such as data.txt, passwords.txt, or users.txt.</strong></li>
        <img src="/assets/ssrf/step12.png" alt="step" style={{ width: 'auto', height: 'auto' }}/>
        <br></br>
        <br></br>
      </ol>
      <p style={{margin: '40px',}}>
        Attackers who normally find files set up scripts to automatically find files on open internal networks, so they don’t have to pen tests like that themselves.
      </p>
      <br></br>
    </div>
  );
};

export default MyComponent;
