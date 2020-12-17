import React from "react";
import ReactTooltip from "react-tooltip";
import {Link} from "react-router-dom";

const ButtonSpinEffect = (props)=>{
    let dataTip = props.dataTip ? props.dataTip : undefined;
    let tooltip = props.tooltip ? props.tooltip : false;

    return(
        <div className={'col-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div data-tip={dataTip} className="button" id="button-6">
                    <div id="spin"/>
                    <span>{props.text}</span>
                    {tooltip &&
                        <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
                    }
                </div>
            </Link>
        </div>
    )
}

export default ButtonSpinEffect