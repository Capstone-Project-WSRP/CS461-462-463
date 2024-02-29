import React, { useState } from 'react';

const AddUser = ({closePopup}) => {
  // States to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
        closePopup();
        const response = await fetch('http://localhost:5000/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await response.json(); 
      if (response.ok) {
        alert(data.message); // Show success message  
         
      } else {
        alert(data.error); // Show error message from the server
      }
    } catch (error) {
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
            Name:
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
            Email:
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
            Password:
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

export default AddUser;
