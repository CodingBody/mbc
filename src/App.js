import React from "react";
import HomePage from "./layout/homepage/HomePage";
import Dashboard from "./layout/dashboard/Dashboard";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path exact path="/" component={HomePage} />
      <Route path="/dashboard/mbc" component={Dashboard} />
    </div>
  );
}

export default App;
