import React, {useEffect} from "react";

const Blog = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })
    return(
        <div>
            Our blog
        </div>
    )
}

export default Blog