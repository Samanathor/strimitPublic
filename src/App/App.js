import React from "react";
import "./main.generated.css";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "../Auth/index";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";

// store
import initStore, { history } from 'Config/store';
export const store = initStore();

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <ConnectedRouter history={history}>
      <Router>
        <Auth />
      </Router>
            </ConnectedRouter>
        </Provider>
    </div>
  );
}

export default App;
