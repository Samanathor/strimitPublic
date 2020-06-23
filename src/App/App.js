import React from "react";
import "./main.generated.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "../Auth/index";
import { ConnectedRouter } from "connected-react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import Home from "../Home/HomeContainer";
import { AuthActions } from "../Auth/AuthActions";

// store
import initStore, { history } from "Config/store";
export const store = initStore();

//Auth
const { reloadUser } = AuthActions;

function App() {
  store.dispatch(reloadUser());
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedRouter history={history}>
          <Router>
            <Switch>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
