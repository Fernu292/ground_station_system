import React, { useEffect, useState, useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { T_Context } from '../Context/T_Context';



const Chart_A = (
  {stimatedFunc, 
    recivedFunc, 
    timeScale, 
    colorStimated, 
    colorRecived, 
    width, 
    height, 
    sizeFont,
    dataSet,
    setDataset,
    showLabel
  
  })=>{


  const {timer} = useContext(T_Context);
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display:showLabel,
        labels:{
          font:{
            size:sizeFont
          }
        }
      },
      title: {
        display: showLabel,
        text: 'Trayectory plot',
      },
    },
    scales:{
      y:{
        title:{
          display:true,
          aling:'center',
          text: "Longitude[m]"
        }
      },
      x:{
        title:{
          display:true,
          aling: 'center',
          text: 'Time[s]'
        }
      }
    },
    animation:{
      duration: 0.00005,
      type:'number',
      easing:'easeOutExpo',
      loop:false,

      from: dataSet[dataSet.length-1]
    }
  });

  const labels = [];

  for(let i=0;i<=timeScale;i++){
    labels.push(i/10);
  } 

  /*

  //Graficar ambas funciones al tiempo
  let aux = [0];

  const [labels, setLabels] = useState([0]);
  useEffect(()=>{

    const id = setInterval(()=>{
      aux.push(aux[aux.length-1]+10);
      setLabels(label => [...label,aux[aux.length-1]]);
    },1000); 

    return ()=>{
      clearInterval(id);
    }
  },[]);
  */

  /*
  useEffect(()=>{
    let i = 1;
    const id = setInterval(()=>{
      i++; 
      setDataR(e=>[...e,recivedFunc(labels[i])]);
      if(i>labels.length){
        i=0;
        setDataR([]);
      }
    },100);

    return ()=>{
      clearInterval(id);
    }
  },[]);*/

  useEffect(()=>{

    if(timer>=0){
      setDataset(data=>[...data, recivedFunc(labels[timer])]);   
    }
  },[timer]);

    
  const data = {
    labels,
    datasets: [
      {
        label: 'Stimated',
        data: labels.map((e) => stimatedFunc(e) ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Recived',
        data: dataSet,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return(
    <Line options={options} data={data} height={height} width={width}/>
  );
}

export default Chart_A;