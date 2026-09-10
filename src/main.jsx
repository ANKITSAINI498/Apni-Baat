import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Apni-Baat root element #root was not found.");
}

createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);