import "./App.css";
import Firstside from "./components/Firstside";

import Dashboard from "./components/Dashboard";

import Roster from "./components/Roster";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Firstside />
            <Dashboard />
          </Route>
          <Route path="/dashboard" exact>
            <Firstside />
            <Dashboard />
          </Route>
          <Route path="/roster" exact>
            <Firstside />
            <Roster />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
