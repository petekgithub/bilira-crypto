import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import "./index.css";
import App from "./App";

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!); // Use non-null assertion operator

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
