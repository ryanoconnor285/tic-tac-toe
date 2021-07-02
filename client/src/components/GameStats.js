import React from "react";
import Board from "./Board";

const GameStats = ({ gameStats }) => {
  return (
    <div>
      {gameStats.map((game) => (
        <div key={game._id}>
          <h4>Winner: {game.winner}</h4>
          <Board boxes={game.board} />
        </div>
      ))}
    </div>
  );
};

export default GameStats;
