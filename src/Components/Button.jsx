import React, {useContext} from 'react';
import {T_Context} from "../Context/T_Context";
import "../Styles/_button.scss";

const Button = ({text}) => {

    const {setControl, setMotors, setTelemetry, setSystem} = useContext(T_Context);

    const settPage = ()=>{
        switch(text){
            case 'Motors':
                setMotors(true);
                setControl(false);
                setTelemetry(false);
                setSystem(false);

                break;
            case 'Mission C':
                setMotors(false);
                setControl(true);
                setSystem(false);
                setTelemetry(false);
               
                break;
            case 'System C':
                setMotors(false);
                setControl(false);
                setSystem(true);
                setTelemetry(false);

                break;
            case 'Telemetry':
                setMotors(false);
                setControl(false);
                setSystem(false);
                setTelemetry(true);
                break;
        }
    }

    return ( 
        <a onClick={settPage} className='button'>
           <p>{text}</p>
        </a>
    );
}
 
export default Button;