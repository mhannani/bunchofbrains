import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";
const Addiction = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 addiction'}>
            <GoBackButton/>
            <div className={'container'}>
                addiction
            </div>
        </div>
    )
}

export default Addiction