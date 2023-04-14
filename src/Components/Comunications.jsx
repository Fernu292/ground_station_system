import React from 'react';
import Computer_Com from './Computer_com';
import "../Styles/_Comunications.scss";

const Comunications_Computers = () => {
    return (  
        <div className='Comunications'>
           <Computer_Com progress={10} computer={"Computer 1"}/>
           <Computer_Com progress={0} computer={"Computer 2"}/>
           <Computer_Com progress={30} computer={"Computer 3"}/> 
        </div>
    );
}
 
export default Comunications_Computers;