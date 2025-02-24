import React from "react";

export default function Login() {
    const handleLogin = () => {
        window.location.href = "http://localhost:5001/auth/github"; // Redirect to GitHub OAuth
      };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
        🔑 <button onClick={handleLogin}>Login with GitHub</button>
      
    </div>
  );
}
