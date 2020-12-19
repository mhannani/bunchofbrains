import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const SelfEsteem = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 self_esteem'}>
            <GoBackButton/>
            <div className={'container'}>
                SelfEsteem
            </div>
        </div>
    )
}

export default SelfEsteem