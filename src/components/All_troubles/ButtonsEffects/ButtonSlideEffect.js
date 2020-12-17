import React from "react";
import {Link} from "react-router-dom";
const ButtonSlideEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div className="button" id="button-2">
                    <div id="slide"/>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}

export default ButtonSlideEffect