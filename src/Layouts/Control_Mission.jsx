import React, { useContext } from 'react';
import "../styles/_Control_Mission.scss";

//Componets
import Chart_A from "../Components/Chart";
import Weather from "../Components/Wather";
import Comunications_Computers from "../Components/Comunications";
import Map from '../Components/GPS';

import Bg_CM from "../img/Bg_CM.webp";
import { T_Context } from '../Context/T_Context';

const Control_Mission = () => {
    
    const {
        cos, 
        sin, 
        setTimeScale, 
        timeScale,
        dataTrayectory,
        setDataTrayectory
    } = useContext(T_Context);
    
   

    setTimeScale(240);

    return (  
        <div id='Control_M' >
            <h2 className='title_page '>Mission Control</h2>
            <Chart_A 
                stimatedFunc={sin} 
                recivedFunc={cos}
                timeScale={timeScale}
                height={8}
                width={55}
                dataSet={dataTrayectory}
                setDataset={setDataTrayectory}
                showLabel={true}
            />

            <div className="mission_c_data">

                <img src={Bg_CM} alt='Bg' loading='lazy' className='BG_CM'/>
                <Comunications_Computers />

                <Weather City={"Chicoloapan"} Country={"MX"} />
                
                <Map />
            </div>
        </div>
    );
}
 
export default Control_Mission;