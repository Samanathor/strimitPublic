import React from "react";
import "./main.generated.css";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "../Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <Auth></Auth>
      </Router>
    </div>
  );
}

export default App;
