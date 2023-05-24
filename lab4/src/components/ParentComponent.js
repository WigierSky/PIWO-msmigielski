// ParentComponent.jsx
import React, { useState } from "react";
import Hero from "./LoginComponent";
import Nav from "./NavComponent";

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [greeting, setGreeting] = useState("");

  // Function to handle login
  const handleLogin = (user) => {
    setGreeting(`Hello, ${user.name} ${user.lastName}!`);
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setGreeting("");
    setIsLoggedIn(false);
  };

  return (
    <div>
        <Nav isLoggedIn={isLoggedIn} greeting={greeting} />
      <Hero
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default ParentComponent;
