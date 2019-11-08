import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SmurfProvider } from './contexts';


ReactDOM.render(
    <SmurfProvider>
        <App />
    </SmurfProvider>,
    document.getElementById("root")
);
