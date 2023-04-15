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



const Chart_A = ()=>{
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
    }
  });

  const [timer, setTimer] = useState(0);
  const [labels, setLabels] = useState([0]);
  
  let aux = [0];

  

  useEffect(()=>{

    const id = setInterval(()=>{
      aux.push(aux[aux.length-1]+15);
      setLabels(label => [...label,aux[aux.length-1]]);
    },1000); 

    return ()=>{
      clearInterval(id);
    }
  },[]);

  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: 'Stimated',
        data: labels.map((e) => Math.sin((e*Math.PI)/180) ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Recived',
        data: labels.map((e) => Math.cos((e*Math.PI)/180) ),
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