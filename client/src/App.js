import React, { useEffect } from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";
import HelpModal from "./component/Modals/help/HelpModal";
import { withRouter } from "react-router-dom";

function App({ match }) {
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
      <HelpModal />
    </div>
  );
}

export default withRouter(App);
