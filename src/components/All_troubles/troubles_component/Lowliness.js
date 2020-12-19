import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Lowliness = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 lowliness'}>
            <GoBackButton/>
            <div className={'container'}>
                GoalSetting
            </div>
        </div>
    )
}

export default Lowliness