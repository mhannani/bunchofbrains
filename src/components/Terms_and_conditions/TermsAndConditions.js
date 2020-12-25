import React, {useEffect} from "react";

const TermsAndConditions = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={"terms_and_conditions"}>
            Terms And Conditions page...
        </div>
    )
}

export default TermsAndConditions;