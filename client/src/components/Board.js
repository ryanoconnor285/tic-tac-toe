import React from "react";
import Box from "./Box";

const style = {
  border: "4px solid purple",
  borderRadius: "5px",
  width: "500px",
  height: "500px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ boxes, onClick }) => {
  return (
    <div style={style}>
      {boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
