import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Ptsd = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 ptsd'}>
            <GoBackButton/>
            <div className={'container'}>
                Ptsd
            </div>
        </div>
    )
}

export default Ptsd