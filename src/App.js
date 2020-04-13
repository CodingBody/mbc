import React from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";
import Category from "./component/category/Category";

function App() {
  return (
    <div>
      <Route path exact path="/" component={HomePage} />

      <Route
        path="/dashboard/mbc/"
        render={() => (
          <React.Fragment>
            <Dashboard />
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default App;
