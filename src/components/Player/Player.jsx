import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function updateNameHandler(event) {
    // update player name
    setPlayerName(event.target.value);
  }

  function toggleIsEditingHandler() {
    setIsEditing((editing) => !editing);
  }

  let playerNameJSX = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameJSX = (
      <input
        type="text"
        requiered
        value={playerName}
        onChange={updateNameHandler}
      />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNameJSX}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleIsEditingHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
