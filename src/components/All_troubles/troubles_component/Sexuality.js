import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Sexuality = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div className={'mx-4 sexuality'}>
            <GoBackButton/>
            <div className={'container'}>
                Sexuality
            </div>
        </div>
    )
}

export default Sexuality