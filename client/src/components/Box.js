import React from "react";

const style = {
	background: "purple",
  border: "2px solid pink",
  color: "white",
	fontSize: "40px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
};

const Box = (props) => {
  const { value, onClick } = props;
  return (
  <button style={style} onClick={onClick}>{value}</button>
  )
};

export default Box;