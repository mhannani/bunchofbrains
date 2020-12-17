import React from "react";

const ButtonUnderlineEffect = (props)=>{
    return(
        <div className={'col-3'}>
            <div className="button" id="button-4">
                <div id="underline"/>
                <a href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default ButtonUnderlineEffect