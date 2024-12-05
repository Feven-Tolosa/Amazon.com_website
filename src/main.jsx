import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvidor/DataProvider.jsx";
import { initialState, reduser } from "./Utility/reduser.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reduser={reduser} initialState={initialState}>
      <App />
    </DataProvider>
  </StrictMode>
);

{
  /* <StrictMode>
  <StateProvider initialState={initialState} reduser={reduser}>
    <App />
  </StateProvider>
</StrictMode>; */
}

// import React from "react";
// import ReactDOM from "react-dom";
// import "./main.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reduser={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();
