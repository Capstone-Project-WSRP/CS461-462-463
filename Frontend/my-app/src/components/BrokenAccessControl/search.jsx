import React, { useState } from 'react';

function Search() {
  const [email, setEmail] = useState(''); // Changed to use email
  const [password, setPassword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    // Construct the URL with the email and password
    const url = `http://localhost:5000/user_search/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;
    try {
      const response = await fetch(url, {
        method: 'GET', // Now using GET method
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
          type="email" // Changed to email input for semantic correctness
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="password" // Confirming this is a password input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <ul>
          {results.map((user, index) => (
            <li key={index}>
              Name: {user.Name}, Email: {user.Email}
              {/* Display additional user details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;