import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, activePlayerSymbol }) {
  const [board, setBoard] = useState(initialBoard);

  function handleSelect(rowIndex, colIndex) {
    setBoard((prevBoard) => {
      const updateBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelect();
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
