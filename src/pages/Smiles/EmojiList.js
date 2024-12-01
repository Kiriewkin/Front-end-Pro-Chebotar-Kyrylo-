import React, { useState, useEffect } from "react";
import Results from "./Results";
import { saveToLocalStorage, loadFromLocalStorage } from "../../utils/localStorage";

const EmojiList = () => {
  const initialEmojis = [
    { name: "Smile", symbol: "😊", votes: 0 },
    { name: "Heart", symbol: "❤️", votes: 0 },
    { name: "Thumbs Up", symbol: "👍", votes: 0 },
  ];

  const [emojis, setEmojis] = useState(loadFromLocalStorage("emojis") || initialEmojis);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    saveToLocalStorage("emojis", emojis);
  }, [emojis]);

  const addVotes = (name) => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) =>
        emoji.name === name ? { ...emoji, votes: emoji.votes + 1 } : emoji
      )
    );
  };

  const clearVotes = () => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) => ({ ...emoji, votes: 0 }))
    );
    setShowResults(false);
    localStorage.removeItem("emojis");
  };

  return (
    <div>
      {emojis.map((emoji) => (
        <div key={emoji.name} className="emoji-container">
          <button onClick={() => addVotes(emoji.name)}>{emoji.symbol}</button>
          <p>Голоса: {emoji.votes}</p>
        </div>
      ))}

      <div className="emoji-btn">
      <button onClick={() => setShowResults(true)}>Показать результаты</button>
      <button onClick={clearVotes}>Очистить результаты</button>
      </div>

      {showResults && <Results emojis={emojis} />}
    </div>
  );
};

export default EmojiList;
