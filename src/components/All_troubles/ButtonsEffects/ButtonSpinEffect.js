import React from "react";
import ReactTooltip from "react-tooltip";

const ButtonSpinEffect = (props)=>{
    let dataTip = props.dataTip ? props.dataTip : undefined;
    let tooltip = props.tooltip ? props.tooltip : false;

    return(
        <div className={'col-3'}>
            <div data-tip={dataTip} className="button" id="button-6">
                <div id="spin"/>
                <a href={props.href}>{props.text}</a>
                {tooltip &&
                    <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
                }
            </div>
        </div>
    )
}

export default ButtonSpinEffect