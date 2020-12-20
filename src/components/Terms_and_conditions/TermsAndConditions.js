import React, {useEffect} from "react";

const TermsAndConditions = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div>
            Terms And Conditions page...
        </div>
    )
}

export default TermsAndConditions;