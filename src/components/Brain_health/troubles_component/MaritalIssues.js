import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const MaritalIssues = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'mx-4 marital_issues'}>
            <GoBackButton/>
            <div className={'container'}>
                MaritalIssues
            </div>
        </div>
    )
}

export default MaritalIssues