import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.scss";

//Layouts 
import Control_Mission from "./Layouts/Control_Mission";
import Motors from "./Layouts/Motors";
import System_Control from "./Layouts/System_Control";
import Telemetry from "./Layouts/Telemetry";

const App = () => {
    return (  
        <div className="App container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Control_Mission/>}>
                        <Route path="Motors" element={<Motors/>}/>
                        <Route path="System_C" element={<System_Control/>}/>
                        <Route path="Telemetry" element={<Telemetry/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
    
export default App;