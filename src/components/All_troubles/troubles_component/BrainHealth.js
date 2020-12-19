import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const BrainHealth = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 brain_health'}>
            <GoBackButton/>
            <div className={'container'}>
                Anxiety
            </div>
        </div>
    )
}

export default BrainHealth