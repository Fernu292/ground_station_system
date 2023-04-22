import React, {useContext} from 'react';
import { T_Context } from '../Context/T_Context';

const System_Control = () => {

    const {systemC} = useContext(T_Context);

    return (  
        <div id='Sis_C'>
            <h2 className='title_page'>System Control</h2>
        </div>
    );
}
 
export default System_Control;