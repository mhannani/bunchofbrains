import React, {useEffect} from "react";

const Privacy = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div>
            Privacy page ...
        </div>
    )
}

export default Privacy;