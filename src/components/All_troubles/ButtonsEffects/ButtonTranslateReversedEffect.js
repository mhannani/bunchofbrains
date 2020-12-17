import React from "react";

const ButtonTranslateReversedEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <div className="button" id="button-7">
                <div id="translate_reversed"/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default ButtonTranslateReversedEffect