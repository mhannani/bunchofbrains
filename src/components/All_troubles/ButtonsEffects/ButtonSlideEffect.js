import React from "react";

const ButtonSlideEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <div className="button" id="button-2">
                <div id="slide"/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default ButtonSlideEffect