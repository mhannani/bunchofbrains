import React from "react";
import {Link} from "react-router-dom";
import ReactTooltip from "react-tooltip";
const ButtonSlideEffect = (props)=>{
    let dataTip = props.dataTip ? props.dataTip : undefined;
    let tooltip = props.tooltip ? props.tooltip : false;
    return(
        <div className={'col-sm-12 col-md-6 col-lg-3'}>
            <Link to={props.to} className={'trouble_button'}>
                <div data-tip={dataTip} className="button" id="button-1">
                    <div id="slide"/>
                    <span>{props.text}</span>
                    {tooltip &&
                        <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
                    }
                </div>
            </Link>
        </div>



    // return(
    //     <div className={'col-sm-12 col-md-6 col-lg-3'}>
    //         <Link to={props.to} className={'trouble_button'}>
    //             <div data-tip={dataTip} className="button" id="button-6">
    //                 <div id="spin"/>
    //                 <span>{props.text}</span>
    //                 {tooltip &&
    //                 <ReactTooltip className={'tooltip'} textColor={'black'} effect={'solid'} type={'success'} />
    //                 }
    //             </div>
    //         </Link>
    //     </div>
    // )
    )
}

export default ButtonSlideEffect