import "./App.css";

//commponents Imports
import Firstside from "./components/Firstside";

import Dashboard from "./components/Dashboard";
import Roster from "./components/Roster";
import Products from './components/Products'
//commponents Imports
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
          <Route path="/products" exact>
            <Firstside />
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
