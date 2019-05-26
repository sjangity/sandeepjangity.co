import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import PortfolioMaster from "./PortfolioMaster";

import { Router } from "./components/router";

ReactDOM.render(
  // <App is now the child of the <Router component
  <Router>
    <PortfolioMaster />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
