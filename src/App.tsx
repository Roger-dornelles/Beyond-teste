import React from "react";

import "./App.css";

import Router from "./router";
import Aside from "./components/aside";
function App() {
  return (
    <>
      <Aside>
        <Router />
      </Aside>
    </>
  );
}

export default App;
