import React, { useState } from 'react';

function Search() {
  const [email, setEmail] = useState(''); // Changed to use email
  const [password, setPassword] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); // Added error state

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
    // Construct the URL with the header
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
        setResults([data]); // Assuming the backend returns search results as an array
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
      <form> {/*onSubmit={handleSearch}>*/}
        <input
          type="text" // Changed to text input for a lack of semantic correctness
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          /* What works as input: alice@example.com' --'*/
        />
        <input
          type="password" // Confirming this is a password input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        {/*<button type="submit">Search</button>*/}
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSecureSearch}>Secure Search</button>
      </form>
      {error && <p>Error: {error}</p>} {/* Display error message if error state is set */}
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