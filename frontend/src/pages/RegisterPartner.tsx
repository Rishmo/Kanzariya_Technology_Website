import React, { useState } from "react";

const RegisterPartner: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    const response = await fetch("https://68219bb2259dad2655afc9b6.mockapi.io/api/v2/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role: "pending" }),
    });
    if (response.ok) {
      setSuccess("Request submitted for approval");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="register-container">
      <h2>Become a Partner</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{success}</p>
    </div>
  );
};

export default RegisterPartner;
