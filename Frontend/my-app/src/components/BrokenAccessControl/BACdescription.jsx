import React from 'react';
import styles from "./BrokenAccessControl.module.css";
const BACdescription = () => {
  return (
    <div className={styles.bacdes} >
  <h3>Introduction</h3>
  <p>Access control is a fundamental element of cybersecurity that grants or restricts a user's ability to interact with a system's resources. It operates as a gatekeeper, ensuring that only authorized individuals or processes can access specific data, files, or functionalities. However, when flaws occur in the implementation of these controls, the result is broken access control. This significant vulnerability paves the way for unauthorized actors to gain access to sensitive information or manipulate system behavior.</p>

  <h3>Understanding Broken Access Control</h3>
  <p>Broken access control arises when users are able to exceed the boundaries of their intended permissions. This can manifest in various ways, including:</p>
  <ol>
    <li><strong>Direct Object References:</strong> Files or data objects accessible by simply changing a parameter in the URL.</li>
    <li><strong>Privilege Escalation:</strong> A low-privilege user gains access to higher-level functions or data.</li>
    <li><strong>Modification of Metadata:</strong> Altering metadata to manipulate how access to resources is granted.</li>
    <li><strong>Failure to Restrict Session IDs:</strong> This permits users to impersonate others by hijacking active sessions.</li>
  </ol>

  <h3>The Impact of Broken Access Control</h3>
  <p>The consequences of broken access control are severe. Security breaches become far more likely, potentially leading to:</p>
  <ol>
    <li><strong>Data Exposure and Theft:</strong> Unauthorized parties can steal sensitive information, compromising the privacy of individuals.</li>
    <li><strong>Modification of Data:</strong> Data integrity is damaged as attackers tamper with records.</li>
    <li><strong>Disruption of Operations:</strong> Attackers may be able to exploit system functions for malicious purposes, hindering business operations.</li>
    <li><strong>Financial and Reputational Harm:</strong> Organizations face financial penalties, lawsuits, and loss of public trust due to these breaches.</li>
  </ol>

  <h3>Identifying and Preventing Broken Access Control</h3>
  <p>To combat broken access control, organizations must prioritize the following:</p>
  <ol>
    <li><strong>Detection:</strong> Vulnerability scanners and penetration testing reveal broken access control issues.</li>
    <li><strong>Robust Policies:</strong> Enforce least-privilege access, ensuring users get only what they need.</li>
    <li><strong>Security Audits:</strong> Regular reviews expose misconfigurations or weaknesses in controls.</li>
    <li><strong>Developer Education:</strong> Security training for developers reduces the likelihood of introducing these flaws during development.</li>
  </ol>

  <h3>Case Studies</h3>
  <ol>
    <li>
      <h4>SnapChat, Data Breach (Jan 2014):</h4>
      <ol>
        <li><a href="https://gibsonsec.org/snapchat/">Gibson Security</a> detailed vulnerabilities in the Snapchat service, which was dismissed as a purely theoretical attack. A week later, brute force enumeration had revealed 4.6 million usernames and phone numbers.</li>
        <li>Why was this significant?
          <ul>
            <li>The attack seems to be motivated at least partly by Snapchat's assertion that the attack was theoretical, and they had not taken any action. This resulted in the data leakage of phone numbers and user details that could be valuable for various uses.</li>
          </ul>
        </li>
      </ol>
    </li>
    <li>
      <h4>Facebook Business Pages, Attack (2015):</h4>
      <ul>
        <li><a href="https://www.7xter.com/2015/08/hacking-facebook-pages.html">Laxman Muthiyah</a> found that it was possible for a malicious user to use a request to assign admin permissions to himself for a particular Facebook page. A sample request can be seen below:</li>
        <li>
          <p><strong>Request:</strong></p>
          <ul style={{marginLeft: "20px"}}>
            <li>i. POST /&lt;page_id&gt;/userpermissions HTTP/1.1</li>
            <li>ii. Host: graph.facebook.com</li>
            <li>iii. Content-Length: 245</li>
            <li>iv. role=MANAGER&amp;user=&lt;target_user_id&gt;&amp;business=&lt;associated_business_id&gt;&amp;access_token=&lt;application_access_token&gt;</li>
            <li>v. Response:</li>
            <li>vi. true</li>
          </ul>
        </li>
        <li><strong>Why was this significant?</strong>
          <ul style={{marginLeft: "20px"}}>Business pages are a widely used function, and by executing this attack, a malicious user could add himself as an administrator and deny access to the actual manager or administrator.</ul>
        </li>
      </ul>
    </li>
  </ol>
</div>


  );
};

export default BACdescription;