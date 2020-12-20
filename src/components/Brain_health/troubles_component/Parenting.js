import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Parenting = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 parenting'}>
            <GoBackButton/>
            <div className={'container'}>
                Parenting
            </div>
        </div>
    )
}

export default Parenting