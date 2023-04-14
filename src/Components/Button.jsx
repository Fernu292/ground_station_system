import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/_button.scss";

const Button = ({text}) => {

    const page = `/${text}`;

    return ( 
        <a className='button'>
           <p>{text}</p>
        </a>
    );
}
 
export default Button;