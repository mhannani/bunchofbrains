import React from "react";

const ButtonCircleEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <div className="button" id="button-3">
                <div id="circle"/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default ButtonCircleEffect