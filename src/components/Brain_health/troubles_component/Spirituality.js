import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Spirituality = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 spirituality'}>
            <GoBackButton/>
            <div className={'container'}>
                spirituality
            </div>
        </div>
    )
}

export default Spirituality