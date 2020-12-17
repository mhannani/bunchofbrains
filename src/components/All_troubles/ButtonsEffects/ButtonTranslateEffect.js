import React from "react";
import {Link} from "react-router-dom";

const ButtonTranslateEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div className="button" id="button-5">
                    <div id="translate"/>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}

export default ButtonTranslateEffect