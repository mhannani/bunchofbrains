import React from 'react'
import SlideShow from "./SlideShow";
import Cards from "./cards";
import News from "../Footer/news";

class Home extends React.Component{
    render(){
        return(
            <div>
                <SlideShow/>
                <Cards/>
                <News/>
            </div>

        )
    }
}
export default Home