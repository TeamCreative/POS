import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import hooks & redux
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

//imports
import Roster from './components/Roster'

//imports

function App() {
  return (
    <div className="App">
      <Roster/>
    </div>
  );
}

export default App;
