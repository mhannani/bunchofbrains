import React, {useEffect} from "react";

const PolicyAccessibility = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div className={"policy_and_accessibility"}>
            PolicyAccessibility page...
        </div>
    )
}

export default PolicyAccessibility;