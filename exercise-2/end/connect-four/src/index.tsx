import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import "./index.css";

ReactDOM.render(<App columns={7} rows={6} />, document.getElementById("root"));
