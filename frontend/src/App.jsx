import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  const fetchGreeting = async () => {
    try {
      setGreeting("");
      setError("");
      const res = await axios.get(`http://localhost:5000/api/greet?name=${name}`);

      setGreeting(res.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>Greeting App</h2>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={fetchGreeting}>Get Greeting</button>
      {greeting && <p>{greeting}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
