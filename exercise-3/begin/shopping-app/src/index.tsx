import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components";
import "./index.css";

// import { Provider } from "react-redux";
// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunkPromiseMiddleware from "redux-thunk-promise";
// import { reducers } from "./domains";

ReactDOM.render(<App userId="user-id" />, document.getElementById("root") as HTMLElement);
