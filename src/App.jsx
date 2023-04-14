import React,{useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.scss";

//Layouts 
import Control_Mission from "./Layouts/Control_Mission";

const App = () => {
    return (  
        <div className="container">
            <Control_Mission />
        </div>
    );
}
    
export default App;