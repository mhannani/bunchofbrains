import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const RelationshipIssues = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 ptsd'}>
            <GoBackButton/>
            <div className={'container'}>
                RelationshipIssues
            </div>
        </div>
    )
}

export default RelationshipIssues