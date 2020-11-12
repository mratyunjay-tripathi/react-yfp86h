import React from "react";
import "./style.css";

export default function App() {
  const relatives = ["chacha", "mama", "phupha", "bua"];

  // console.log(updatedNums);
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, indx) => (
          <li key={"relativeListItem" + (indx + 1)}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}
