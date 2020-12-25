import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Phobias = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 phobias'}>
            <GoBackButton/>
            <div className={'container'}>
                Phobias
            </div>
        </div>
    )
}

export default Phobias