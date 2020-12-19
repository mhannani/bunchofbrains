import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const PanicDisorder = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 panic_disorder'}>
            <GoBackButton/>
            <div className={'container'}>
                PanicDisorder
            </div>
        </div>
    )
}

export default PanicDisorder