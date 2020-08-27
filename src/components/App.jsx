import React from "react";

function App() {
  setInterval(updateTime, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now.substring(0, 7));
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime.substring(0, 7));
    console.log(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>

      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
