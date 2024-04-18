import React, { useState } from 'react';

function Search() {
<<<<<<< HEAD
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
=======
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
        setResults([]); // Clear results state if request is not successful
        console.error('Search failed:', response.statusText);
      }
    } catch (error) {
      setError('Error fetching search results:', error); // Set error message for network errors
      setResults([]); // Clear results state if request is not successful
>>>>>>> main
      console.error('Error fetching search results:', error);
    }
  };

<<<<<<< HEAD
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="email" // Changed to email input for semantic correctness
=======
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
        setResults([]); // Clear results state if request is not successful
        console.error('Secure search failed:', response.statusText);
      }
      
    } catch (error) {
      setError('Error performing secure search:', error); // Set error message for network errors
      setResults([]); // Clear results state if request is not successful
      console.error('Error performing secure search:', error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="email" 
>>>>>>> main
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
<<<<<<< HEAD
          type="password" // Confirming this is a password input
=======
          type="password" 
>>>>>>> main
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
<<<<<<< HEAD
        <button type="submit">Search</button>
      </form>
=======
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSecureSearch}>Secure Search</button>
      </form>
      {error && <p>Error: {error}</p>} {/* Display error message if error state is set */}
>>>>>>> main
      {results.length > 0 && (
        <ul>
          {results.map((user, index) => (
            <li key={index}>
<<<<<<< HEAD
              Name: {user.Name}, Email: {user.Email}
              {/* Display additional user details as needed */}
=======
              Name: {user.Name} <br/>
              Email: {user.Email} <br/>
>>>>>>> main
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> main
