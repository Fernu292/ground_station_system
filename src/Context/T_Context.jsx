import React,{useState, createContext, useEffect} from "react";

export const T_Context = createContext(null);

const T_Context_Provider = ({children})=>{
    const [controlM, setControl] = useState(true);
    const [motors, setMotors] = useState(false); 
    const [systemC, setSystem] = useState(false);
    const [telemetry, setTelemetry] = useState(false);


    //Time and charts
    const [timer, setTimer] = useState(1);
    const [timeScale, setTimeScale] = useState(0);

    const [dataT, setDataT] = useState([]);
    const [labels, setLabels] = useState([]);

    const cos = angle =>{
        return Math.cos(((angle*100)*Math.PI)/180); 
    }

    const sin = angle =>{
        return Math.sin(((angle*100)*Math.PI)/180);
    }


    useEffect(()=>{
        const id = setInterval(()=>{
            setTimer(e=>e+1);
        },100);
        return ()=>{
            clearInterval(id);
        }
    },[]);

    if(timer>240){
        setTimer(0);
    }


    return(
        <T_Context.Provider
            value={{
                controlM,
                setControl,
                motors,
                setMotors,
                systemC,
                setSystem,
                telemetry,
                setTelemetry, 
                timer,
                cos,
                sin,
                setDataT,
                dataT
            }}
        >
            {children}
        </T_Context.Provider>
    );
}

export default T_Context_Provider;