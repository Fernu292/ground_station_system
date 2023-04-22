import React from "react";
import Termometro from "./Termometro";

import "../Styles/_Temperaturas.scss";


const Temperaturas = () => {
    return (  
        <div className="Temperaturas">
            <Termometro />
            <Termometro />
            <Termometro />
        </div>
    );
}
 
export default Temperaturas;