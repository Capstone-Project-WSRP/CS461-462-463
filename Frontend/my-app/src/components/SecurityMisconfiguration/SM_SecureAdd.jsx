import React, { useState } from 'react';


const SecureAdd = ({closePopup}) => {
  // States to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      closePopup();
      const response = await fetch('http://localhost:5000/sm_secure_creation', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email, password}),
      });
  
      const data = await response.json();
      if (response.ok) {
          alert(data.message); // Show success message
      } else {
          if (data.message) {
            alert(data.message); // Show backend specific error message
          } else {
            alert('Failed to create user. Please try again.'); // Generic error message
          }
      }
    }
    catch (error) {
      alert('An error occurred while creating the user.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default SecureAdd;
