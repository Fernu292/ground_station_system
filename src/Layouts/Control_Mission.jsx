import React from 'react';
import "../styles/_Control_Mission.scss";
//Layouts 
import Header from "../Components/Header";

//Componets
import Chart_A from "../Components/Chart";
import Weather from "../Components/Wather";
import Comunications_Computers from "../Components/Comunications";
import Map from '../Components/GPS';

import Bg_CM from "../img/Bg_CM.png";

const Control_Mission = () => {
    return (  
        <>
            <Chart_A />

            <div className="mission_c_data">

                <img src={Bg_CM} alt='Bg' loading='lazy' className='BG_CM'/>
                <Comunications_Computers />

                <Weather City={"Chicoloapan"} Country={"MX"} />
                
                <Map />
            </div>
        </>
    );
}
 
export default Control_Mission;