import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const GoalSetting = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 goal_setting'}>
            <GoBackButton/>
            <div className={'container'}>
                GoalSetting
            </div>
        </div>
    )
}

export default GoalSetting