import React from "react";
import ReacDom from "react-dom";
import T_Context_Provider from "./Context/T_Context";

import Second_W from "./App_2";

const div = document.getElementById("root");

ReacDom.render(
    <T_Context_Provider>
        <Second_W />
    </T_Context_Provider>
, div);