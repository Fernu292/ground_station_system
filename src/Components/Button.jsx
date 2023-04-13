import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({text}) => {

    const page = `/${text}`;

    return ( 
        <Link to={page} className='button'>{text}</Link>
    );
}
 
export default Button;