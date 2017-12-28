import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <div id="outer">
            <div className="text-center" id="inner_fixed">
              <h1>Welcome</h1>
              <Link to={`/tasks`} className="btn btn-primary margin-right">
                Tasks
              </Link>
            </div>
            <div id="inner_remaining"></div>
          </div>
        )}
      />
      {/* <Route path="/tasks" component={TasksPage} /> */}
    </div>
  </Router>
);

export default App;