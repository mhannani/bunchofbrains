import React, {useEffect} from "react";

const PolicyAccessibility = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div>
            PolicyAccessibility page...
        </div>
    )
}

export default PolicyAccessibility;