import React, { useState, useContext, useEffect } from "react";
import { T_Context } from "../Context/T_Context";

import "../Styles/_button.scss";

const Button_Signal = ({initialState, text, fligth, postFligth}) => {

    const [state, setState] = useState(initialState);
    const {timer} = useContext(T_Context);


    useEffect(()=>{
        if(timer>fligth && timer<postFligth){
            setState(true);
        }else if(timer<fligth || timer>postFligth){
            setState(false)
        }

        if(state){
            document.getElementById(text).classList.add("Action");
        }else{
            document.getElementById(text)?.classList.remove("Action");
        }
    }, [timer]);

    return (  
        <a className="button button_signal" id={text}>
            <p>{text}</p>
        </a>
    );
}
 
export default Button_Signal;