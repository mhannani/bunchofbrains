import React from "react";
import {useHistory} from "react-router-dom";

const GoBackButton = ()=>{
    let history = useHistory();

    const goBack = ()=>{
        history.go(-1);
    }

    return(
        <div className="goBackButton" onClick={goBack}/>
    )
}

export default GoBackButton