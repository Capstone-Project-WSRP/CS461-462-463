import React, { useState } from 'react';
import styles from "./SQLInjection.module.css";

function Search() {
  const [email, setEmail] = useState(''); // Changed to use email
  const [password, setPassword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    // Construct the URL with the header
    const url = `http://localhost:5000/insecure_user_search`; 
    try {
      const response = await fetch(url, { 
        method: 'POST', // Now using POST method
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        setResults([data]); // Assuming the backend returns search results as an array
      } else {
        console.error('Search failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className={styles.inputbox}
          type="text" // Changed to text input for a lack of semantic correctness
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          /* What works as input: alice@example.com' --'*/
        />
        <input
          className={styles.inputbox}
          type="password" // Confirming this is a password input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button className={styles.fetch} type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <ul>
          {results.map((user, index) => (
            <li key={index}>
              {Object.keys(user).map((key, subIndex) => (
                <div key={subIndex}>
                  {key} : {user[key]} <br />
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;