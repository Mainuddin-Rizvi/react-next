import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello</h1>;
}

// New in React 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Before 18
// ReactDOM.render(<App />, document.getElementById("root"));
