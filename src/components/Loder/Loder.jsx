import React from "react";
import { DotLoader } from "react-spinners";
function Loder() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <DotLoader color="#ffbc57" />
    </div>
  );
}

export default Loder;
