import React from 'react';

const SQLdescription = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        A Structured Query Language (SQL) is a computer language that is used to manage data in a relational database management system, which has widespread usage in today’s climate. 
        SQL injection uses these SQL statements to create invalid data which will be passed to the database, 
        usually by entering specific key phrases or unique symbols into the application’s input, in a way that will allow the user to introduce or change the execution process of the program.
        Due to this, it is extremely important as developers to ensure we are utilizing secure practices in our daily work. Further examples of SQL injections and their implications are discussed in more detail below.
      </p>

      <h2>Understanding SQL Injections</h2>
      <p>
        SQL Injections can manifest in various forms, including:
      </p>
      <ol>
        <li><strong>Poor Filtration:</strong> Lacks a system to regulate what kind of values a user is allowed to input into a text prompt.</li>
        <li><strong>Poor Validation:</strong> Lacks a system to authorize those who are allowed to have direct access to the server of the database.</li>
        <li><strong>Poor Sanitation:</strong> Lacks a system to regulate what kind of data or information is being passed into the database.</li>
        <li><strong>Too Much Trust:</strong> In other words, when the application is placing too much trust in the data that the user has inputted to the database.</li>
      </ol>

      <h2>The Impact of SQL Injections</h2>
      <p>
        SQL injections can have significant impacts on the security posture of an application or system, leading to various consequences, including:
      </p>
      <ol>
        <li><strong>Data Modification:</strong> SQL injections may allow the attacker to modify or delete data entries within the database, potentially causing data corruption/loss or unauthorized changes to the application's behavior.</li>
        <li><strong>Unauthorized Data Access:</strong> Attackers can exploit SQL injection vulnerabilities to access sensitive data stored in a database, including user credentials, personal information, financial records, and more.</li>
        <li><strong>Denial of Service (DoS):</strong> Attackers may exploit SQL injections to perform DoS attacks by executing resource-intensive SQL queries that consume system resources and degrade the performance or availability of the application or database server.</li>
        <li><strong>Reputational Hit:</strong> Since SQL injections can directly lead to things like data breaches and the like, this could cause some serious financial, reputational, and competitive loss to any corporation or organization affected by this form of attack.</li>
      </ol>

      <h2>Preventing SQL Injections</h2>
      <p>
        To combat SQL injections, organizations must prioritize the following:
      </p>
      <ol>
        <li><strong>Parameterized Queries:</strong> Instead of dynamically constructing SQL queries by concatenating strings, use parameterized queries or prepared statements to separate SQL code from user input.</li>
        <li><strong>Input Validation and Sanitization:</strong> Validate and sanitize all user-supplied input before using it in SQL queries and ensure that input adheres to expected formats, such as only allowing alphanumeric characters or specific patterns.</li>
        <li><strong>Least Privilege Principle:</strong> Limit the privileges of the database user account used by the application by assigning minimal permissions necessary for the app to function correctly and avoid using administrative accounts for regular application operations.</li>
        <li><strong>Escape User Input:</strong> Escape user input, like quotes and semicolons, before incorporating it into SQL queries. This will ensure that those special characters are treated as literal values rather than executable SQL statements.</li>
      </ol>

      <h2>Case Studies</h2>
      <p>
        TODO
      </p>

      <h2>Conclusion</h2>
      <p>
        SQL injections are a preventable form of attack, but they remain prevalent due to their relative simplicity and potential impact. It is crucial for organizations to prioritize cybersecurity efforts and implement secure coding practices to mitigate the risks associated with SQL injections.
      </p>
    </div>
  );
};

export default SQLdescription;
