import React,{useState, createContext, useEffect} from "react";

export const T_Context = createContext(null);

const T_Context_Provider = ({children})=>{

    //Layaouts
    const [controlM, setControl] = useState(true);
    const [motors, setMotors] = useState(false); 
    const [systemC, setSystem] = useState(false);
    const [telemetry, setTelemetry] = useState(false);


    //Time and charts
    const [timer, setTimer] = useState(-100);
    const [timeScale, setTimeScale] = useState(0);

    //Data
    const [dataTrayectory, setDataTrayectory] = useState([]);
    const [dataFG, setDataFG] = useState([]);
    const [dataSusten, setDataSusten] = useState([]);
    const [dataResAer, setDataResAer] = useState([]);
    const [dataPresion, setDataPresion] = useState([]);


    const cos = angle =>{
        return Math.cos(((angle*100)*Math.PI)/180); 
    }

    const sin = angle =>{
        return Math.sin(((angle*100)*Math.PI)/180);
    }

    const cubo = value=>{
        return Math.sqrt(value);
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
        setTimer(-100);
        setDataTrayectory([]);
        setDataFG([]);
        setDataPresion([]);
        setDataResAer([]);
        setDataSusten([]);
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
                cubo,
                timeScale, 
                setTimeScale,
                setDataTrayectory,
                dataTrayectory,
                dataFG,
                setDataFG,
                dataPresion,
                setDataPresion,
                dataResAer,
                setDataResAer,
                dataSusten,
                setDataSusten

            }}
        >
            {children}
        </T_Context.Provider>
    );
}

export default T_Context_Provider;