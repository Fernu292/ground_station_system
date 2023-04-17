import React,{useContext} from "react";
import "./Styles/App.scss";

//Layouts 
import Control_Mission from "./Layouts/Control_Mission";
import Motors from "./Layouts/Motors";
import System_Control from "./Layouts/System_Control";
import Telemetry from "./Layouts/Telemetry";
import Header from "./Components/Header";

//Context for central state
import { T_Context } from "./Context/T_Context";

const App = () => {

    const {controlM, motors, systemC,telemetry, timer} = useContext(T_Context);

    return (  
        <div className="container">
            <Header />
            {controlM?<Control_Mission />:null}
            {motors?<Motors />:null}
            {systemC?<System_Control />:null}
            {telemetry?<Telemetry />:null}
        </div>
    );
}
    
export default App;