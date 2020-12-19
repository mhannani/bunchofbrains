import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Schizophrenia = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div className={'mx-4 schizophrenia'}>
            <GoBackButton/>
            <div className={'container'}>
                schizophrenia
            </div>
        </div>
    )
}

export default Schizophrenia