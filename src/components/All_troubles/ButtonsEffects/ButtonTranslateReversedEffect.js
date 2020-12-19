import React from "react";
import {Link} from "react-router-dom";

const ButtonTranslateReversedEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div className="button" id="button-7">
                    <div id="translate_reversed"/>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}

export default ButtonTranslateReversedEffect