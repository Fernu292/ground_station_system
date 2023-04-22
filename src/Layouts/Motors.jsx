import React, {useContext, useState, useEffect} from 'react';
import { T_Context } from '../Context/T_Context';
import { LinearProgress, sliderClasses } from '@mui/material';


import Button_Signal from '../Components/Button_Signal';
import Chart_A from "../Components/Chart";
import "../styles/_Motors.scss";

const Motors = ({numberM}) => {

    const {cos, sin, cubo, dataResAer, setDataResAer} = useContext(T_Context);
    const [fuel, setFuel] = useState(100);

    useEffect(()=>{
        const id=setInterval(()=>{
            setFuel(f =>{
                return f-10;
            });  
        },1000);

        if(fuel<=0){
            setFuel(100);
        }
        return ()=>{
            clearInterval(id);
        }
    },[fuel]);

    return (  
        <div id='Motors' >
            
            <div className='Motor_Hero'>
                <Button_Signal text={"Fligth"} fligth={0} postFligth={120}/>
                <h2 className='title_Motor'>Motor {numberM}</h2>
                <Button_Signal text={"Postfligth"} fligth={120} postFligth={240} />
            </div>

            <div className='Motor_Content'>
                <div className='H_Cont'>
                    <div>
                        <div className='Fuel_Label'>
                            <h3>Fuel</h3>
                            <h3>{fuel}%</h3>
                        </div>

                        <LinearProgress 
                            variant='determinate' 
                            value={fuel} 
                            color='error'
                        />
                    </div>

                    <div className='Status_M'>
                        <h3>Carga Pirotecnica</h3>
                        <Button_Signal text={"Armed"} initialState={true} />

                        <h3>Parachute</h3>
                        <Button_Signal text={"Deployed"} initialState={true} />
                    </div>
                </div>

                <div className='Motor_C'>
                    <div className='Charts'>
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={40}
                            width={30}

                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={40}
                            width={30}


                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={40}
                            width={30}

                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={35}
                            width={30}

                        />
                    </div>

                    <div className='Charts_2'>
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={45}
                            width={35}

                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={45}
                            width={35}

                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={45}
                            width={35}

                        />
                        <Chart_A 
                            stimatedFunc={cos} 
                            recivedFunc={cubo} 
                            timeScale={240}
                            sizeFont={12}
                            dataSet={dataResAer}
                            setDataset={setDataResAer}
                            showLabel={false}
                            height={45}
                            width={35}
                        />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            
        </div>
    );
}
 
export default Motors;