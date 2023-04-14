import React from 'react';
import "../styles/_Control_Mission.scss";
//Layouts 
import Header from "../Components/Header";

//Componets
import Chart_A from "../Components/Chart";
import Weather from "../Components/Wather";
import Comunications_Computers from "../Components/Comunications";

const Control_Mission = () => {
    return (  
        <>
            <Header />
            <Chart_A />

            <div className="mission_c_data">
                <Comunications_Computers />

                <Weather City={"Chicoloapan"} Country={"MX"} />
                
            </div>
        </>
    );
}
 
export default Control_Mission;