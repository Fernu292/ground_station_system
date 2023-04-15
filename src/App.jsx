import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.scss";

//Layouts 
import Control_Mission from "./Layouts/Control_Mission";
import Header from "./Components/Header";

const App = () => {

    const [controlM, setControl] = useState(true);
    const [motors, setMotors] = useState(false); 
    const [systemC, setSystem] = useState(false);
    const [telemetry, setTelemetry] = useState(false);

    return (  
        <div className="container">
            <Header />

            <Control_Mission />
        </div>
    );
}
    
export default App;