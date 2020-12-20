import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const CognitiveDevelopment = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 cognitive_development'}>
            <GoBackButton/>
            <div className={'container'}>
                CognitiveDevelopment
            </div>
        </div>
    )
}

export default CognitiveDevelopment