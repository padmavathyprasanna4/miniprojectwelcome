import React from "react";
import "./Welcome.css";

function Welcome() {
  // Inline styling
  const messageStyle = {
    color: "#1a73e8",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div className="welcome-box">
      <h2 style={messageStyle}>Welcome to React Learning!</h2>
    </div>
  );
}

export default Welcome;
