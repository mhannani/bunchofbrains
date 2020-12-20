import React, {useEffect} from "react";
import GoBackButton from "../goBackButton";

const Bullying = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

    return(
        <div className={'mx-4 bullying'}>
            <GoBackButton/>
            <div className={'container'}>
                Bullying
            </div>
        </div>
    )
}

export default Bullying