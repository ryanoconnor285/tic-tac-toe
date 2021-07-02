import React, { useState } from "react";
import { calculateWinner } from "../utils";
import { getGameStats, postGameStats } from "../actions/gameStats";
import Board from "./Board";
import GameStats from "./GameStats";

const style = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [gameStats, setGameStats] = useState([]);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const checkMoves = [...board];
    if (winner || checkMoves[i]) return;
    checkMoves[i] = player1Turn ? "X" : "O";
    setBoard(checkMoves);
    setPlayer1Turn(!player1Turn);
  };

  const handleGetStats = async () => {
    const stats = await getGameStats() 
    console.log(stats)
    return setGameStats(stats);
  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>
      Start New Game
    </button>
  );

  return (
    <div>
      <div style={style}>
        <p>
          {winner ? "Winner: " + winner : (player1Turn ? "X" : "O") + "'s Turn"}
        </p>
          {winner ? (<button onClick={() => postGameStats(winner, board)}>Post Winner</button>): null}
        {renderMoves()}
      </div>
      <Board boxes={board} onClick={handleClick} />;
      <div style={style}>
        <button onClick={() => handleGetStats()}>Get Game Stats</button>
        <GameStats gameStats={gameStats} />
      </div>
    </div>
  );
};

export default Game;
