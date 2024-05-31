import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { MessageErrorProvider } from "./context/contextMessageError";
import { AddBatchProvider } from "./context/AddBatchContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MessageErrorProvider>
        <AddBatchProvider>
          <App />
        </AddBatchProvider>
      </MessageErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
