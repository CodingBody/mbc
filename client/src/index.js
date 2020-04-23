import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import store from "./redux/Store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2c2c2c",
    },
    secondary: {
      main: "#87ceeb",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: "none",
        minWidth: 40,
        "&:hover": {
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Router>
            <App />
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
