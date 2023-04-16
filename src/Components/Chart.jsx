import React, { useEffect, useState } from 'react';
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



const Chart_A = ({stimatedFunc, recivedFunc, timeScale, colorStimated, colorRecived})=>{

  const [dataR, setDataR] = useState([]);
  const [options, setOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
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

      from: dataR[dataR.length-1]
    }
  });

  const labels = [];

  for(let i=0;i<=240;i++){
    labels.push(i/10);
  } 

  /*
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

  useEffect(()=>{
    let i = 1;
    const id = setInterval(()=>{
      console.log(labels[i]);
      i++; 
      setDataR(e=>[...e,Math.cos(((labels[i]*100)*Math.PI)/180) ]);


      console.log('Data: ',dataR);
      if(i>labels.length){
        i=0;
        setDataR([]);
      }
    },100);

    return ()=>{
      clearInterval(id);
    }
  },[]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Stimated',
        data: labels.map((e) => Math.sin(((e*100)*Math.PI)/180) ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Recived',
        data: dataR,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
 

  return(
    <Line options={options} data={data} height={30} width={90}/>
  );
}

export default Chart_A;