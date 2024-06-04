import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <ol>
        <li><strong>First, ensure you are connected to the database.</strong></li>
        <br></br>
        <li>
          <strong>Next, find email addresses in the database. Here are two examples:</strong>
          <br />
          <strong>- Alice@example.com</strong>
          <br />
          <strong>- Bob@example.com</strong>
        </li>
        <br></br>
        <li><strong>Perform a user search in the database. The search function typically provides personal information upon inputting the correct email address and password. However, since we don't know the password, we'll exploit a vulnerability in the input.</strong></li>
        <br></br>

        <li><strong>The SQL query used in the code is poorly implemented, allowing for SQL injection. Here's a snippet of the query:</strong></li>
        <img src="/assets/sql/step1sql.png" alt="step1" style={{ width: 'auto', height: 'auto' }} />
        <br></br>
        <br></br>

        <li><strong>Inputs are treated as part of the SQL query rather than data. By injecting SQL statements, you can alter the query's behavior. Test for vulnerability by inputting special characters such as "--" to comment out subsequent text:</strong></li>
        <img src="/assets/sql/step2sql.png" alt="step2" style={{ width: 'auto', height: 'auto' }} />
        <br></br>
        <br></br>

        <li><strong>Upon clicking "Search," you should receive output on the webpage:</strong></li>
        <img src="/assets/sql/step3sql.png" alt="step3" style={{ width: 'auto', height: 'auto' }} />
        <br></br>
        <br></br>

        <li><strong>Congratulations! You've successfully acquired personal information from the database without needing the user's password. This is a basic SQL injection, but you can explore more advanced techniques by studying SQL. Remember, this implementation is highly vulnerable.</strong></li>
      </ol>
    </div>
  );
};

export default MyComponent;

