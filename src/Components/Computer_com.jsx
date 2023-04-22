import React, {useState, useEffect} from 'react';
import { LinearProgress, sliderClasses } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';




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
            <div className='bar_Title'>
                <h4>{computer}</h4>
                <h4>{value.toPrecision(2)}%</h4>
            </div>
            <LinearProgress 
                variant='determinate' 
                value={value} 
                color='success'
                orientation="vertical"
            />
        </>
       
    );
}
 
export default Computer_Com;