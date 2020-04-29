import React from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";
import HelpDialog from "./component/Dialog/help/HelpDialog";

function App() {
  return (
    <div>
      <Route path exact path="/" component={HomePage} />

      <Route
        path="/dashboard/mbc/"
        render={() => (
          <React.Fragment>
            <Dashboard />
            <HelpDialog />
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default App;
