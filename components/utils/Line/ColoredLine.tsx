import React from "react";

interface ColoredLineProps {
  color: string;
  width?: string;
}
const ColoredLine = ({ color, width }: ColoredLineProps) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
        width: width ? width : "70%",
      }}
    />
  );
};

export default ColoredLine;
