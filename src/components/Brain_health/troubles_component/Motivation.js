import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Motivation = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 motivation'}>
            <GoBackButton/>
            <div className={'container'}>
                Motivation
            </div>
        </div>
    )
}

export default Motivation