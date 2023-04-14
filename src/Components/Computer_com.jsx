import React, {useState, useEffect} from 'react';
import { LinearProgress } from '@mui/material';

const Computer_Com = ({progress, computer}) => {
    const[value, setValue] = useState(progress);


    useEffect(()=>{
        const timer = setInterval(()=>{
            setValue( oldProgress =>{
                if(oldProgress==100){
                    return 0;
                }

                const diff = (Math.random()*70)+14;

                return diff;
            });
        }, 700);

        return ()=> clearTimeout(timer);
    },[]);
    
    return (  
        <>
            <h4>{computer} {value.toPrecision(2)}%</h4>
            <LinearProgress 
                variant='determinate' 
                value={value} 
                color='success'
            />
        </>
       
    );
}
 
export default Computer_Com;