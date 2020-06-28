import React from "react";
import "./main.generated.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../Auth/index";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Home from "../Home/HomeContainer";
import { AuthActions } from "../Auth/AuthActions";
import Collections from "../Collections/CollectionContainer";

// store
import initStore, { history } from "config/store";
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
              <Route path="/auth" component={Auth} />
              <Route path="/colecciones" component={Collections} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
