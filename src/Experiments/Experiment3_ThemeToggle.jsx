import { useState } from "react";

function Experiment3_ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Experiment 3: Theme Toggle SPA</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light M⬜de" : "Dark M⬛de"}
      </button>
    </div>
  );
}

export default Experiment3_ThemeToggle;
