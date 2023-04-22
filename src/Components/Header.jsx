import React from 'react';
import Logo from './Logo';
import Bandera_Mxn from "../img/Bandera_MXN.jpg";
import Antares_logo from "../img/antares final.png";
import "../Styles/_Header.scss";
import Button from './Button';

const Header = () => {

    const elements = ['Motors', 'Mission C', 'System C', 'Telemetry']

    return (  
        <header className='header'>
            <div className='header_title'>
                <Logo img={Bandera_Mxn}/>
                <h1>Antares Telemetry System</h1>
                <Logo img={Antares_logo}/>
            </div>
            <div className='header_bar'>
                {
                    elements.map((e)=>(
                        <Button text={e} />
                    ))
                }
            </div>
        </header>
    );
}
 
export default Header;