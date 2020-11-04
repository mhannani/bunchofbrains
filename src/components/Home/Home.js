import React, {useEffect} from 'react'
import SlideShow from "./SlideShow";
import Cards from "./cards";

const Home = (props)=>{
    useEffect(() => {
        document.title = props.title || "";
    })

        return(
            <div>
                <SlideShow/>
                <Cards/>
            </div>
        )
}
export default Home