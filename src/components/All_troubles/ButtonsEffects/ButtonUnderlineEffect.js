import React from "react";
import {Link} from "react-router-dom";

const ButtonUnderlineEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div className="button" id="button-4">
                    <div id="underline"/>
                    <span>{props.text}</span>
                </div>
            </Link>
        </div>
    )
}

export default ButtonUnderlineEffect