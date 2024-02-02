import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updateTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelect={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
