import { useState } from "react";

import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really really sure?",
  "Pls",
  "You're lying and i KNOW IT",
  "It's like you don't care...",
  "STOP IT!",
  "You're a hoe",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 35;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="feb-box">
      {yesPressed ? (
        <>
          <img
            alt="YAY"
            src="https://gifdb.com/images/high/happy-cat-dance-sticker-o3nopnssrtk6yqzw.webp"
          />
          <div className="text">YIPPIEEEEEEE!!!!!!!</div>
        </>
      ) : (
        <>
          <img
            src="https://gifdb.com/images/high/kill-rabbit-choking-another-bunny-3ufe97t671uj8tiy.webp"
            alt="Choke"
          />

          <div className="question"> Will you be my valentine? </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
