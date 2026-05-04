// Create a React code for simple login form where the user login by entering their username and password. The form inputs are validated to check if correct information is entered and the error messages are the validation fails. The login form is hidden and the "Welcome, ${name}" message is shown when the user login is successful.

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const login = (e) => {
    e.preventDefault();
    if (name === "admin" && password === "1234") {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {success ? (
        <h2>Welcome, {name}</h2>
      ) : (
        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>{error}</p>
        </form>
      )}
    </>
  );
}

export default App;
