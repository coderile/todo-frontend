import React from "react";
import AllTask from "./components/AllToDo";
import AddNewToDo from "./components/AddNewToDo";
import CompleteTask from "./components/CompleteTask";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>To Do List</h1>

          <Router>
            <div>
              <nav >
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/all">All</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/completed">Completed</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/all">
                  <AllTask />
                </Route>
                <Route path="/completed">
                  <CompleteTask />
                </Route>
                <Route path="/">
                  <AllTask />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
        <div className="col-4">
          <AddNewToDo />
        </div>
      </div>
      <div className="two"></div>
    </div>
  );
};
export default App;
