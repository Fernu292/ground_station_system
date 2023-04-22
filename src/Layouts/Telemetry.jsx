import React, {useContext} from 'react';
import { T_Context } from '../Context/T_Context';
import "../Styles/_Telemetry.scss";

import Simulation from '../Components/Simulation';
import Rocket from "../img/Rocket_Ansys.webp";
import Alar from "../img/perfil_alar_ansys.jpeg";
import Chart_A from '../Components/Chart';
import Comunications_Computers from '../Components/Comunications';
import Temperaturas from '../Components/Temps';
const Telemetry = () => {

    const {
        cubo, 
        cos, 
        dataFG,
        setDataFG,
        dataPresion,
        setDataPresion,
        dataResAer,
        setDataResAer,
        dataSusten,
        setDataSusten
    } = useContext(T_Context);



    return (  
        <div id='Telemetry'>
            <h2 className='title_page'>Telemetry</h2>

            <div className='telemetry_data'>
                <Simulation simul={Rocket} className="Rocket_Ansys"/>
                <Simulation simul={Alar} className="Alar_Ansys" />

                <div className='graphs_T'>
                    <Chart_A 
                        stimatedFunc={cos} 
                        recivedFunc={cubo} 
                        timeScale={240}
                        sizeFont={12}
                        dataSet={dataFG}
                        setDataset={setDataFG}
                    />
                    <Chart_A 
                        stimatedFunc={cubo} 
                        recivedFunc={cos} 
                        timeScale={240}
                        sizeFont={12}
                        dataSet={dataPresion}
                        setDataset={setDataPresion}
                    />
                </div>

                <div >
                    <Temperaturas />
                </div>

                <div className="graphs_T">
                    <Chart_A 
                        stimatedFunc={cos} 
                        recivedFunc={cubo} 
                        timeScale={240}
                        sizeFont={12}
                        dataSet={dataResAer}
                        setDataset={setDataResAer}
                    />
                    <Chart_A 
                        stimatedFunc={cubo} 
                        recivedFunc={cos} 
                        timeScale={240}
                        sizeFont={12}
                        dataSet={dataSusten}
                        setDataset={setDataSusten}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Telemetry;