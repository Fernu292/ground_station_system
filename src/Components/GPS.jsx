import React from 'react';

import Mapa from "../img/Map_preview.webp";

import "../Styles/_Map.scss";


const Map = () => {
    return (  
        <div className='Map_Container'>
            <img src={Mapa} alt='map' loading='lazy' className='map'/>
        </div>
    );
}
 
export default Map;