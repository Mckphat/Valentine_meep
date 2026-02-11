import { useState } from "react";
import "./App.css";
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
</html>;

const phrases = [
  "No",
  "Are you sure?",
  "Really really sure?",
  "You're lying and i KNOW IT",
  "It's like you don't care...",
  "STOP IT!",
  "You're a hoe",
  "babe.",
  "Pls.",
  "凸(￣ヘ￣)",
];

function App() {
  const imageCycle = [
    "https://gifdb.com/images/high/crying-emoji-sticker-cux2iq9plqj9jexj.webp",
    "https://gifdb.com/images/high/sad-crying-meme-luxpwb04l4w9s27y.webp",
    "https://gifdb.com/images/high/cat-crying-gif-u412nuee9anoo4u5.webp",
  ];
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [current, setCurrent] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    noImageClick();
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function noImageClick() {
    const nextImage = () => {
      setCurrent((prev) => (prev + 1) % imageCycle.length);
    };
    return (
      <>
        <img src={imageCycle[current]} alt="cycle" />
        <button onClick={nextImage}> </button>
      </>
    );
  }

  return (
    <div className="feb-box">
      {yesPressed ? (
        <>
          <img
            alt="amongus"
            src="https://gifdb.com/images/high/yellow-among-us-shaking-back-twerk-3vq8kaluqev0pbow.webp"
            //src="https://gifdb.com/images/high/happy-cat-dance-sticker-o3nopnssrtk6yqzw.webp"
          />
          <div className="text">YAYYYYYYYY!!!</div>
          <div className="subtext">
            <a href="https://forms.gle/K4BD2kxo8MnfSZma6">
              Click Here Please (´｡• ᵕ •｡`){" "}
            </a>
            (´｡• ᵕ •｡`)
          </div>
        </>
      ) : (
        <>
          <img
            src="https://gifdb.com/images/high/kill-rabbit-choking-another-bunny-3ufe97t671uj8tiy.webp" //main image on website
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
