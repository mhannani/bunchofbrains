import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Ocd = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 ocd'}>
            <GoBackButton/>
            <div className={'container'}>
                ocd
            </div>
        </div>
    )
}

export default Ocd