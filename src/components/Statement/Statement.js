import React, {useEffect} from "react";

const Statement = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div>
            Statement page...
        </div>
    )
}

export default Statement;