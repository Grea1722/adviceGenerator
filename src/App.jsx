import { useEffect, useState } from "react";
import dividerDesktop from "./assets/pattern-divider-desktop.svg";
import diceIcon from "./assets/icon-dice.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="principal">
      {advice != "" ? (
        <>
          <h1>ADVICE #{advice.id}</h1>
          <p>{advice.advice}</p>
          <img src={dividerDesktop} alt="dividerDesktop" />
          <button onClick={handleClick}>
            <img src={diceIcon} alt="dice icon for button" />
          </button>
        </>
      ) : (
        <p>Loading... </p>
      )}
    </div>
  );
}

export default App;
