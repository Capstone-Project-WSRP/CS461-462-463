import React from 'react';

const SQLdescription = () => {
  return (
    <div>
      <h3>Introduction</h3>
      <p>
        A Structured Query Language (SQL) is a computer language that is used to manage data in a relational database management system, which has widespread usage in today’s climate. 
        SQL injection uses these SQL statements to create invalid data which will be passed to the database, 
        usually by entering specific key phrases or unique symbols into the application’s input, in a way that will allow the user to introduce or change the execution process of the program.
        Due to this, it is extremely important as developers to ensure we are utilizing secure practices in our daily work. Further examples of SQL injections and their implications are discussed in more detail below.
      </p>

      <h3>Understanding SQL Injections</h3>
      <p>
        SQL Injections can manifest in various forms, including:
      </p>
      <ol>
        <li><strong>Poor Filtration:</strong> Lacks a system to regulate what kind of values a user is allowed to input into a text prompt.</li>
        <li><strong>Poor Validation:</strong> Lacks a system to authorize those who are allowed to have direct access to the server of the database.</li>
        <li><strong>Poor Sanitation:</strong> Lacks a system to regulate what kind of data or information is being passed into the database.</li>
        <li><strong>Too Much Trust:</strong> In other words, when the application is placing too much trust in the data that the user has inputted to the database.</li>
      </ol>

      <h3>The Impact of SQL Injections</h3>
      <p>
        SQL injections can have significant impacts on the security posture of an application or system, leading to various consequences, including:
      </p>
      <ol>
        <li><strong>Data Modification:</strong> SQL injections may allow the attacker to modify or delete data entries within the database, potentially causing data corruption/loss or unauthorized changes to the application's behavior.</li>
        <li><strong>Unauthorized Data Access:</strong> Attackers can exploit SQL injection vulnerabilities to access sensitive data stored in a database, including user credentials, personal information, financial records, and more.</li>
        <li><strong>Denial of Service (DoS):</strong> Attackers may exploit SQL injections to perform DoS attacks by executing resource-intensive SQL queries that consume system resources and degrade the performance or availability of the application or database server.</li>
        <li><strong>Reputational Hit:</strong> Since SQL injections can directly lead to things like data breaches and the like, this could cause some serious financial, reputational, and competitive loss to any corporation or organization affected by this form of attack.</li>
      </ol>

      <h3>Preventing SQL Injections</h3>
      <p>
        To combat SQL injections, organizations must prioritize the following:
      </p>
      <ol>
        <li><strong>Parameterized Queries:</strong> Instead of dynamically constructing SQL queries by concatenating strings, use parameterized queries or prepared statements to separate SQL code from user input.</li>
        <li><strong>Input Validation and Sanitization:</strong> Validate and sanitize all user-supplied input before using it in SQL queries and ensure that input adheres to expected formats, such as only allowing alphanumeric characters or specific patterns.</li>
        <li><strong>Least Privilege Principle:</strong> Limit the privileges of the database user account used by the application by assigning minimal permissions necessary for the app to function correctly and avoid using administrative accounts for regular application operations.</li>
        <li><strong>Escape User Input:</strong> Escape user input, like quotes and semicolons, before incorporating it into SQL queries. This will ensure that those special characters are treated as literal values rather than executable SQL statements.</li>
      </ol>

      <h3>Case Studies</h3>
      <ol>
        <li>
          <h4>Heartland Payment Systems, Data Breach (Aug 2009):</h4>
          <ol style={{"list-style-type": "upper-roman"}}>
            <li>A website form that granted access to Heartland's corporate network had an SQL vulnerability in its code for several years until hackers figured it out and breached the database in late 2007 via SQL injection. This attack remained undetected for several months until early 2009, resulting in over 130 millions credit cards being compromised and more than $300 million in losses. It was considered to be one of the largest case of identity theft in its time.</li>
            <li>Why was this significant?
              <ul>
                <li>This attack highlights the importance of adequate input validation and sanitization in web forms, along with the need to remain aware of common forms of cyberattack. The reason this had happened was because of the lack in awareness of what SQL injections are, which is an incredibly simple vector of attack that could easily be prevented with proper input etiquettecy.</li>
              </ul>
            </li>
            <li>Sources:
              <ul>
                <li><a href= "https://www.secretservice.gov/press/releases/2018/02/sentencing-largest-data-breach-prosecuted-united-states">"Sentencing in Largest Data Breach Prosecuted in United States"</a>, U.S. Secret Service Media Relations, 14 February 2018.</li>
                <li>Cheney, Julia S. <a href="https://www.philadelphiafed.org/-/media/frbp/assets/consumer-finance/discussion-papers/D-2010-January-Heartland-Payment-Systems.pdf">"Heartland Payment Systems: Lessons Learned from a Data Breach"</a>, Federal Reserve Bank of Philadelphia, January 2010.</li>
                <li>Fishman, Jacob. <a href="https://www.bing.com/ck/a?!&&p=45d6be48a90b4ccbJmltdHM9MTcxNTczMTIwMCZpZ3VpZD0zZDdkNTFjMS1iMTFlLTY2NzUtMGQyMS00MzMxYjA1ZDY3M2MmaW5zaWQ9NTIwOA&ptn=3&ver=2&hsh=3&fclid=3d7d51c1-b11e-6675-0d21-4331b05d673c&psq=heartland+2009+sql+injection+attack+university+of+virginia&u=a1aHR0cHM6Ly9saWJyYWV0ZC5saWIudmlyZ2luaWEuZWR1L2Rvd25sb2Fkcy92OTc5djM4OXM_ZmlsZW5hbWU9RmlzaG1hbl9KYWNvYl9TVFNfUmVzZWFyY2hfUGFwZXIucGRm&ntb=1">"Heartland Payment Systems: A Case Study in Unethical Behavior"</a> (Link Will Download File), University of Virginia, 9 April 2020.</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
      
      <h3>Conclusion</h3>
      <p>
        SQL injections are a preventable form of attack, but they remain prevalent due to their relative simplicity and potential impact. It is crucial for organizations to prioritize cybersecurity efforts and implement secure coding practices to mitigate the risks associated with SQL injections.
      </p>
    </div>
  );
};

export default SQLdescription;
