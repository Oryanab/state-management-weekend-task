import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
