import React, { useState } from 'react';

function Search() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); // Add error state

  const handleSearch = async (event) => {
    event.preventDefault();
    const url = `http://localhost:5000/user_search/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;
    try {
      const response = await fetch(url, {
        method: 'GET', 
      });
      if (response.ok) {
        const data = await response.json();
        setResults([data]); 
        setError(null); // Clear error state if request is successful
      } else {
        const data = await response.json();
        setError(data.message); // Set error message if request fails
        console.error('Search failed:', response.statusText);
      }
    } catch (error) {
      setError('Error fetching search results:', error); // Set error message for network errors
      console.error('Error fetching search results:', error);
    }
  };

  const handleSecureSearch = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:5000/user_search_secure'; 
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const data = await response.json();
        setResults([data]);
        setError(null); // Clear error state if request is successful
      } else {
        if (response.status === 429) {
          setError('Too many requests. Please try again later.'); // Set custom error message for 429 status code
        } else {
          const data = await response.json();
          setError(data.message); // Set error message for other error cases
        }
        console.error('Secure search failed:', response.statusText);
      }
    } catch (error) {
      setError('Error performing secure search:', error); // Set error message for network errors
      console.error('Error performing secure search:', error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSecureSearch}>Secure Search</button>
      </form>
      {error && <p>Error: {error}</p>} {/* Display error message if error state is set */}
      {results.length > 0 && (
        <ul>
          {results.map((user, index) => (
            <li key={index}>
              Name: {user.Name} <br/>
              Email: {user.Email} <br/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
