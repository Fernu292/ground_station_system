import React, {useContext} from "react";
import Header from "./Components/Header";

import Control_Mission from "./Layouts/Control_Mission";
import Motors from "./Layouts/Motors";
import System_Control from "./Layouts/System_Control";
import Telemetry from "./Layouts/Telemetry";

import { T_Context } from "./Context/T_Context";

import "./Styles/App.scss";

const Second_W = () => {

    const {controlM, motors, systemC,telemetry, timer} = useContext(T_Context);

    return (  
        <div className="container">
            <Header />
            {controlM?<Control_Mission loading='lazy'/>:null}
            {motors?<Motors numberM={2}/>:null}
            {systemC?<System_Control />:null}
            {telemetry?<Telemetry />:null}
        </div>
    );
}
 
export default Second_W;