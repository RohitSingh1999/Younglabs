import { useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");
  const API_BASE_URL = "https://younglabs-9avu.onrender.com"; // Backend URL

  const fetchGreeting = async () => {
    try {
      setGreeting("");
      setError("");

      const res = await axios.get(`${API_BASE_URL}/api/greet?name=${name}`);

      setGreeting(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="main">
        <h2>Greeting App</h2>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={fetchGreeting}>Get Request</button>
        {greeting && <p>{greeting}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default App;
