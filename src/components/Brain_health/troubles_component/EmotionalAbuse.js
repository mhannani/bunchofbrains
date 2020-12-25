import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const EmotionalAbuse = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 emotional_abuse'}>
            <GoBackButton/>
            <div className={'container'}>
                EmotionalAbuse
            </div>
        </div>
    )
}

export default EmotionalAbuse