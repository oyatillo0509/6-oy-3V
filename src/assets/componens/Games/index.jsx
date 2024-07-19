import React, { useState } from "react";

const GamePicker = () => {
  const [selectedGame, setSelectedGame] = useState("");

  const games = [
    "CS.GO",
    "PUBG",
    "Free File",
    "Overwatch",
    "Minecraft",
    "Race car",
  ];

  const RandomGame = () => {
    const res = Math.floor(Math.random() * games.length);
    setSelectedGame(games[res]);
  };

  return (
    <div>
      <button onClick={RandomGame}>Pick Game</button>
      {selectedGame && <p>Selected Game: {selectedGame}</p>}
    </div>
  );
};

export default GamePicker;
