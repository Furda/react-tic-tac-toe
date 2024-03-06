import { useState } from "react";

// components
import Player from "./components/Player/Player";

function App() {
  const [player1, setPlayer1] = useState({ name: "Player 1", symbol: "X" });
  const [player2, setPlayer2] = useState({ name: "Player 2", symbol: "O" });

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
