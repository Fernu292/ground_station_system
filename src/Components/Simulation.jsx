import React from "react";

const Simulation = ({simul, className}) => {
    return (  
        <>
            <img src={simul} alt="Simulation" className={className}/>
        </>
    );
}
 
export default Simulation;