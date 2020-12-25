import React, {useEffect} from "react";

const News = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div className={'news-page'}>
            New route
        </div>
    )
}

export default News