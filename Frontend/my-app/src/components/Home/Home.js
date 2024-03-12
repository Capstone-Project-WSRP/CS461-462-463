import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to WSRP React App</h1>
      <p className={styles.description}>
        This is a Website Security Research Project (WSRP) simulation built with
        React for educational purposes.
      </p>
      <h2>Introduction</h2>
      <p className={styles.description}>
          Web applications are insecure, and due to these vulnerabilities, there have been
numerous severely damaging data breaches in recent history. Currently, development is
happening at a rapid pace that security professionals cannot keep up with. There are many
points of weakness in new tech due to its rapid development and how the threat landscape
is constantly evolving. Developers and security professionals have a need to fortify against
these security vulnerabilities for the sake of both their companies and their users. In this
project, we will study some of the most common vulnerabilities relating to data integrity
and account breaches in order to create a “how-to” web application and guide, to demonstrate
these vulnerabilities and how to harden web apps to protect against them.
        <br></br>
        <br></br>
          By presenting clear, step-by-step instructions and immediate access to necessary tools within our platform, we streamline the learning process and eliminate the need for users to navigate external sources. This approach could provide a consolidated and comprehensive resource that significantly reduces search time and ensures users have consistent and reliable guidance at their fingertips. Envision it as a comprehensive hub for beginner-level cybersecurity training that is up in a manner that promotes user-friendliness. Our product's direct guide promotes a more structured and efficient learning experience, offering users a unified platform for learning and applying cybersecurity measures. It also emphasizes self-sufficiency by providing the user with the tools and knowledge to perform the vulnerability. The streamlined design alleviates some challenges inherent in mastering a new, complex skill like cybersecurity.
        <br></br>
        <br></br>
            It is important to note that while we focus on teaching a specific method to exploit a vulnerability, users may discover alternative techniques. In that case, we want to encourage others to share such findings, aiding in the growth of community knowledge. The knowledge we learn from this phase of the implementation will aid in the plans to further expand the scope of this product in the future. Perfecting our delivery of this knowledge now will produce a better product in the years to come.
            <br></br>
            <br></br>
            <br></br>

      </p>
      <h2>Instructions</h2>
      <p className={styles.description}>
        Please begin by navigating to the security vulnerability you would like to learn more about using the menu to the left, or the links below.
        Once on an individual vulnerability's page, you may read about the vulnerability, why it is important
        to protect against it, and how to exploit similar vulnerabilities.
        <br></br>
        <br></br>
        You will also be able to hide the educational information if you choose, and begin the how-to section.
        The how-to section will serve as a guide for completing a basic exploit of the vulnerability.
        There will be a hands-on area to work with, as well as a walkthrough provided, so that
        you are not left without guidance when learning about how to exploit the vulnerability.
        <br></br>
        <br></br>NOTE: It is very important to reset the database (using the "Reset Database" button in the bottom left hand corner, in the web page's footer) on each vulnerability page before proceeding to work with the hands-on section and its corresponding walkthrough. This is necessary in order to produce accurate and expected results.
        <br></br>
        <br></br>
        Thank you for checking out our project! Happy Hacking!
        <br></br>
        <br></br>
        <br></br>
      </p>
      <h2 className={styles.title}>Vulnerabilities:</h2>
      <ul className={styles.description}>
        <li className={styles.description}>
          <Link className={styles.link} to="/broken-access-control">
            Broken Access Control
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/security-misconfiguration">
            Security Misconfiguration
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/ssrf">
            Server-Side Request Forgery (SSRF)
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/sql-injection">
            SQL Injection
          </Link>
        </li>
      </ul>
      <img
        src="logo_transparent.png"
        alt="WSRP Logo"
        style={{ width: "150px", height: "auto" }}
      />
    </div>
  );
};

export default Home;
