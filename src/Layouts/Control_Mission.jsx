import React, { useContext } from 'react';
import "../styles/_Control_Mission.scss";

//Componets
import Chart_A from "../Components/Chart";
import Weather from "../Components/Wather";
import Comunications_Computers from "../Components/Comunications";
import Map from '../Components/GPS';

import Bg_CM from "../img/Bg_CM.png";
import { T_Context } from '../Context/T_Context';

const Control_Mission = () => {
    
    const {cos} = useContext(T_Context);
    
    const sin = (angle)=>{
        return Math.sin(((angle*100)*Math.PI)/180) 
    }

    return (  
        <>
            <h2 className='title_CM'>Mission Control</h2>
            <Chart_A 
                stimatedFunc={sin} 
                recivedFunc={cos}
                timeScale={240}
            />

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