import React from "react";
import reactDom from "react-dom";
import App from "./App.jsx";
import T_Context_Provider from "./Context/T_Context.jsx";

const div = document.getElementById("root");

reactDom.render(
    <T_Context_Provider>
        <App />
    </T_Context_Provider>
,div);