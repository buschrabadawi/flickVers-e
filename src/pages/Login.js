import React, { useState } from "react"; // Import React and useState hook
import "../styles/Login.css"; // Import CSS styles for the login page

function Login() {
  // State to store the username input
  const [username, setUsername] = useState("");
  
  // State to store the password input
  const [password, setPassword] = useState("");
  
  // State to track if the user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default page reload
    // Simple login check (hardcoded credentials)
    if (username === "testuser" && password === "password") {
      setLoggedIn(true); // Update state to logged in
      alert("Login successful!"); // Show success message
    } else {
      alert("Invalid credentials!"); // Show error if credentials don't match
    }
  };

  // Function to log out the user
  const handleLogout = () => {
    setLoggedIn(false); // Update state to logged out
    setUsername(""); // Clear username input
    setPassword(""); // Clear password input
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        {loggedIn ? ( // If user is logged in, show welcome message and logout button
          <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : ( // If user is not logged in, show the login form
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {/* Username input field */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password input field */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Submit button */}
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login; // Export component so it can be used in other parts of the app




