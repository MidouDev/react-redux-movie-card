import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import rootReducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./styles/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
