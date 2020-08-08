import React, {useState} from "react";

function getCurrentTime() {
  return new Date().toLocaleTimeString()
}

function App() {

  const [time, setTime] = useState(getCurrentTime());

  function updateTime() {
    setTime(getCurrentTime());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(updateTime, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
