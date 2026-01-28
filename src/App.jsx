import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then(res => res.json())
      .then(data => setStatus(data.status));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>RDBMS Application</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;