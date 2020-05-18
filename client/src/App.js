import React from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";
import HelpModal from "./component/Modals/help/HelpModal";
import axios from "axios";
import { connect } from "react-redux";
var AWS = require("aws-sdk");

function App({ user }) {
  return (
    <div>
      <Route path exact path="/" component={HomePage} />

      <Route
        path="/dashboard/mbc/:category"
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
