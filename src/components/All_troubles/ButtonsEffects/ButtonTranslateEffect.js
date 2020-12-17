import React from "react";

const ButtonTranslateEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <div className="button" id="button-5">
                <div id="translate"/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default ButtonTranslateEffect