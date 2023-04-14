import React from 'react';
import "../Styles/_Logo.scss";

const Logo = ({img}) => {
    return (  
        <img src={img} alt={"Logotipo"} loading='lazy' className='logo'/>
    );
}
 
export default Logo;